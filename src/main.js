import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Plugin
import MaterialKit from "./plugins/material-kit";
import GoogleMaps from "./plugins/googleMaps";

import VueImg from "v-img";
import Lightbox from 'vue-easy-lightbox';
import VueYouTubeEmbed from 'vue-youtube-embed'


Vue.config.productionTip = false;
Vue.use(MaterialKit);
Vue.use(VueImg);
Vue.use(VueYouTubeEmbed)
Vue.use(Lightbox)
Vue.use(GoogleMaps);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
