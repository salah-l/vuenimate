<template>
  <va-base v-bind="this.$props" :config="mergedConfig">
    <slot></slot>
  </va-base>
</template>

<script>
import VaBase from "./VaBase.vue";
import { userInteractionTriggers } from "./config/triggers";
import { scrollTriggers } from "./config/triggers";
export default {
  components: {
    VaBase,
  },
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
    threshold: {
      type: Number,
      default: 0.5, // Default threshold value
    },
    ...userInteractionTriggers,
    ...scrollTriggers,
  },
  computed: {
    mergedConfig() {
      let thisAnimationConfig = {
        duration: 1000,
        delay: 0,
        easing: "ease-out",
        iterations: 1,
        fill: "forwards",
        offset: 20,
      };

      // Check for attempts to modify non-editable properties
      const nonEditableProps = ["keyframes"];
      nonEditableProps.forEach((prop) => {
        if (this.config[prop] !== undefined) {
          console.error(
            `Attempted to modify non-editable property: ${prop}. You can not edit this property on this component. Use BaseAnimation instead.`
          );
        }
      });

      // Merge only the editable properties
      const editableProps = [
        "duration",
        "delay",
        "easing",
        "iterations",
        "fill",
        "offset",
      ];
      editableProps.forEach((prop) => {
        if (this.config[prop] !== undefined) {
          thisAnimationConfig[prop] = this.config[prop];
        }
      });

      // Construct the keyframes based on the final offset
      thisAnimationConfig.keyframes = [
        {
          opacity: 0,
          transform: `translateX(${thisAnimationConfig.offset}px)`,
        },
        { opacity: 1, transform: "translateX(0)" },
      ];

      return thisAnimationConfig;
    },
  },
};
</script>
