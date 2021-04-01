// @ts-nocheck
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCircleNotch, faCheckCircle, faEnvelope, faPhoneSquareAlt, faChevronUp, faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import { faJs, faHtml5,faJava, faPhp, faReact, faVuejs, faAngular, faLaravel, faAndroid, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from './router'

const Vue = createApp( App )



library.add( faJs, faHtml5, faJava, faPhp, faReact, faVuejs, faAngular,
    faLaravel, faAndroid, faCircleNotch, faCheckCircle, faLinkedin,
    faFacebookSquare, faEnvelope, faEnvelopeSquare, faPhoneSquareAlt,
    faChevronUp )

Vue.component('font-awesome-icon', FontAwesomeIcon)

// @ts-ignore
Vue.config.productionTip=false

Vue.use(router).mount('#app')