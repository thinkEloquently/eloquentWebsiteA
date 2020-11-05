<template>
  <Home/>
</template>

<script>
import Home from './home/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
*, 
*::before, 
*::after {
  margin: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
body {
    width: 100%;
    height: 100%;
}
#app {
  width: 100%;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
