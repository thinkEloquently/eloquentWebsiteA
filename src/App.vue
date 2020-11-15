<template>
  <Home />
  <ScrollToTop />
</template>

<script>
import Home from "./home/Home.vue";
import ScrollToTop from './components/shared/ScrollToTop'

export default {
  name: "App",
  components: {
    Home,
    ScrollToTop,
  },
};
</script>

<style>
@import "./assets/css/elo.css";
#app {
  width: 100%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  overflow: hidden;
}
</style>
