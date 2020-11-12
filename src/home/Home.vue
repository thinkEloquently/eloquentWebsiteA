<template>
    <Nav />
    <Intro />
    <OurTeam />
    <ContactUs />
</template>

<script>
import Nav from './components/Nav.vue'
import Intro from './components/Intro.vue'
import OurTeam from './components/OurTeam'
import ContactUs from './components/ContactUs'
    export default {
        name: 'Home',
        components: {
            Nav,
            Intro,
            OurTeam,
            ContactUs,
        }
    }
</script>

<style scoped>

</style>