<template>
    <Nav />
    <Intro />
    <Services />
    <OurTeam />
    <ContactUs />
    <Footer />
    <ScrollToTop />
</template>

<script>

import Nav from './components/Nav.vue'
import Intro from './components/Intro.vue'
import Services from './components/Services'
import OurTeam from './components/OurTeam'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import ScrollToTop from './../components/shared/ScrollToTop'

    export default {
        name: 'Home',
        components: {
            Nav,
            Intro,
            Services,
            OurTeam,
            ContactUs,
            Footer,
            ScrollToTop
        }
    }

</script>

<style scoped>
#home {
    position: relative;
}
</style>