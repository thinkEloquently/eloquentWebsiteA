<template>
    <Nav />
    <Intro />
    <Services />
    <OurTeam />
    <ContactUs />
    <Footer />
</template>

<script>

import Nav from './components/Nav.vue'
import Intro from './components/Intro.vue'
import Services from './components/Services'
import OurTeam from './components/OurTeam'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

    export default {
        name: 'Home',
        components: {
            Nav,
            Intro,
            Services,
            OurTeam,
            ContactUs,
            Footer,
        }
    }

</script>

<style scoped>
#home {
    position: relative;
}
</style>