<template>
    <Nav />
    <Intro />
    <Services />
    <OurTeam />
    <ContactUs />
</template>

<script>
import Nav from './components/Nav.vue'
import Intro from './components/Intro.vue'
import Services from './components/Services'
import OurTeam from './components/OurTeam'
import ContactUs from './components/ContactUs'
    export default {
        name: 'Home',
        components: {
            Nav,
            Intro,
            Services,
            OurTeam,
            ContactUs,
        }
    }
</script>

<style scoped>

</style>