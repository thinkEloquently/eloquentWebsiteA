<template>
  <div id="scroll-top" @click="scrollToTop" v-if="isActive">
    <font-awesome-icon :icon="['fas', 'chevron-up']" class="icon" />
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "ScrollToTop",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    scrollToTop() {
      document.querySelector("#nav").scrollIntoView({
        behavior: "smooth",
      });
    },
    activate() {
      this.isActive = true;
    },
    handleScroll: _.debounce((e) => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        e.isActive = true;
      } else {
        e.isActive = false;
      }
    }, 200),
    scrollHandler() {
      const self = this;
      this.handleScroll(self);
    },
  },
  mounted() {
    this.activate();
  },
  created() {
    window.addEventListener("scroll", this.scrollHandler);
  },
  unmounted() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
};
</script>

<style scoped>
#scroll-top {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  padding: 10px;
}
.icon {
  font-size: 1rem;
  color: #5f5d5d;
}
</style>