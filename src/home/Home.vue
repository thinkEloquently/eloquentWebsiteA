<template>
    <Nav />
    <Intro />
    <Service />
</template>

<script>
import Nav from './components/Nav.vue'
import Intro from './components/Intro.vue'
import Service from './components/Services'
    export default {
        name: 'Home',
        components: {
            Nav,
            Intro,
            Service,
        }
    }
</script>

<style scoped>

</style>