<template>
    <Nav />
    <Intro />
    <OurTeam />
    <Service />
</template>

<script>
import Nav from './components/Nav.vue'
import Intro from './components/Intro.vue'
import OurTeam from './components/OurTeam'
import Service from './components/Services'
    export default {
        name: 'Home',
        components: {
            Nav,
            Intro,
            OurTeam,
            Service,
        }
    }
</script>

<style scoped>

</style>