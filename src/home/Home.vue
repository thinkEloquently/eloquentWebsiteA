<template>
    <Nav />
    <Intro />
</template>

<script>
import Nav from './components/Nav.vue'
import Intro from './components/Intro.vue'
    export default {
        name: 'Home',
        components: {
            Nav,
            Intro
        }
    }
</script>

<style scoped>

</style>