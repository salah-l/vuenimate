<template>
  <div ref="element">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      defaultConfig: {
        duration: 1000,
        delay: 0,
        easing: "ease",
        iterations: 1,
        fill: "forwards",
        keyframes: [
          { transform: "translateY(0)", opacity: 1 },
          { transform: "translateY(-100%)", opacity: 0 },
        ],
      },
      animation: null,
    };
  },
  computed: {
    mergedConfig() {
      return { ...this.defaultConfig, ...this.config };
    },
  },
  mounted() {
    this.$nextTick(() => {
      // Ensure the DOM has been updated
      this.playAnimation();
    });
  },
  methods: {
    playAnimation() {
      this.animation = this.$refs.element.animate(this.mergedConfig.keyframes, {
        duration: this.mergedConfig.duration,
        easing: this.mergedConfig.easing,
        delay: this.mergedConfig.delay,
        iterations: this.mergedConfig.iterations,
        fill: this.mergedConfig.fill,
      });

      // Handle the promise when animation is finished
      this.animation.finished.then(() => {
        this.onAnimationEnd();
      });
    },
    onAnimationEnd() {
      this.$emit("animation-ended");
    },
  },
  beforeDestroy() {
    if (this.animation) {
      this.animation.cancel(); // Stops the animation when the component is destroyed
    }
  },
};
</script>
