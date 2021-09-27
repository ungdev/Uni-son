/* eslint-disable prettier/prettier */
import Vue from 'vue'
import Router from 'vue-router'

import Artistes from './views/Artistes.vue'
import MainNavbar from './layout/MainNavbar.vue'
import MainFooter from './layout/MainFooter.vue'
import Contact from './views/Contact.vue'
import Accueil from './views/Accueil.vue'
import E2018 from './views/2018.vue'
import E2017 from './views/2017.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'accueil',
            components: {
                default: Accueil,
                header: MainNavbar,
                footer: MainFooter
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/artistes',
            name: 'artistes',
            components: {
                default: Artistes,
                header: MainNavbar,
                footer: MainFooter
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/2018',
            name: '2018',
            components: {
                default: E2018,
                header: MainNavbar,
                footer: MainFooter
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/2017',
            name: '2017',
            components: {
                default: E2017,
                header: MainNavbar,
                footer: MainFooter
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/nouscontacter',
            name: 'nous contacter',
            components: {
                default: Contact,
                header: MainNavbar,
                footer: MainFooter
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        },
        {
            path: '/accueil',
            name: 'accueil',
            components: {
                default: Accueil,
                header: MainNavbar,
                footer: MainFooter
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: 'black' }
            }
        }
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    }
})
