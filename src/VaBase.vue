<template>
  <div ref="element">
    <slot></slot>
  </div>
</template>

<script>
import { userInteractionTriggers } from "./config/triggers";
import { scrollTriggers } from "./config/triggers";
export default {
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
  data() {
    return {
      elementToBeAnimated: null,
      animation: null,
      observer: null,
      isTriggered: false,
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
    };
  },
  computed: {
    mergedConfig() {
      return { ...this.defaultConfig, ...this.config };
    },
  },
  mounted() {
    // nextTick to ensure the DOM has been updated
    this.$nextTick(() => {
      this.elementToBeAnimated = this.$refs.element.firstElementChild;
      this.setupUserInteractionTriggers();
      this.setupScrollTrigger();

      if (!this.isTriggered) {
        this.playAnimation();
      }
    });
  },
  methods: {
    setupUserInteractionTriggers() {
      console.log(this);
      Object.keys(userInteractionTriggers).forEach((trigger) => {
        // console.log(this);
        if (this[trigger]) {
          const eventName = userInteractionTriggers[trigger].eventName;
          this.elementToBeAnimated.addEventListener(
            eventName,
            this.playAnimation
          );
          this.isTriggered = true;
        }
      });
    },
    setupScrollTrigger() {
      const options = {
        root: null, // relative to the viewport
        threshold: [this.threshold],
      };

      //Determine if visibility triggers are on
      const hasScrollTrigger = Object.keys(scrollTriggers).some(
        (trigger) => this[trigger]
      );
      if (hasScrollTrigger) {
        this.isTriggered = true;
        this.elementToBeAnimated.style.opacity = 0;
      }

      this.observer = new IntersectionObserver((entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        if (this.onScrollToElement && isVisible) {
          this.playAnimation();
          this.observer.disconnect();
        }
      }, options);

      this.observer.observe(this.elementToBeAnimated);
    },
    playAnimation() {
      this.animation = this.elementToBeAnimated.animate(
        this.mergedConfig.keyframes,
        {
          duration: this.mergedConfig.duration,
          easing: this.mergedConfig.easing,
          delay: this.mergedConfig.delay,
          iterations: this.mergedConfig.iterations,
          fill: this.mergedConfig.fill,
        }
      );

      // Handle the promise when animation is finished
      this.animation.finished.then(() => {
        this.onAnimationEnd();
      });
    },
    onAnimationEnd() {
      this.$emit("animation-ended");
      if (this.observer) {
        this.observer.disconnect();
      }
    },
  },
  beforeDestroy() {
    if (this.animation) {
      this.animation.cancel(); // Stops the animation when the component is destroyed
    }

    if (this.observer) {
      this.observer.disconnect();
    }

    Object.keys(userInteractionTriggers).forEach((trigger) => {
      if (this[trigger]) {
        const eventName = trigger.replace(/^on/, "").toLowerCase();

        if (this.validEventNames.includes(eventName)) {
          this.elementToBeAnimated.removeEventListener(
            eventName,
            this.playAnimation
          );
        }
      }
    });
  },
};
</script>
