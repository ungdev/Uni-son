<template xmlns:v-img="http://www.w3.org/1999/xhtml">
  <div class="section profile-content">
    <div class="container">
      <div class="md-layout">
        <div class="md-layout-item mx-auto">
          <div class="profile">
            <div class="avatar">
              <img
                :src="img"
                alt="Circle Image"
                class="img-raised rounded-circle img-fluid md-medium-size-25 md-small-size-33"
              />
            </div>
            <div class="name">
              <h3 class="title">{{ nom }}</h3>
              <h6>{{ titre }}</h6>
              <div v-show="isVisible">
                <md-button
                  :href="insta"
                  class="md-just-icon md-simple md-instagram"
                >
                  <i class="fab fa-instagram"></i>
                </md-button>
                <md-button
                  :href="fb"
                  class="md-just-icon md-simple md-facebook"
                >
                  <i class="fab fa-facebook"></i>
                </md-button>
                <md-button :href="yt" class="md-just-icon md-simple md-youtube">
                  <i class="fab fa-youtube"></i>
                </md-button>
                <md-button
                  :href="twitter"
                  class="md-just-icon md-simple md-twitter"
                >
                  <i class="fab fa-twitter"></i>
                </md-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="description text-center">
        <p>{{ description }}</p>
      </div><div class="container">
      <div class="md-layout" >
          <div class="md-layout-item">
        <!-- here you can add your content for tab-content -->
        <template>
          <!-- <div v-if="carousel">
           <md-card><carousel
              :per-page="1"
              loop
              :speed="700"
              autoplay
              :autoplay-timeout="5000"
              :mouse-drag="false"
              navigationEnabled
              navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
              navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
            >
              <slide
                v-for="(src, index) in photos"
                :key="index"
                class="md-layout-item md-medium-size-33 md-small-size-50"
                @click="() => showImg(index)"
              >
                <img v-img:group :src="src.image" alt="carousel1" />
              </slide>
            </carousel></md-card>
          </div>-->
          <div align="center">
            <div class="md-medium-size-33 md-xsmall-size-100 md-small-size-100 mx-auto">
              <img v-img :src="photos" class="img-raised rounded img-fluid"/>
            </div>
            <!--<div
              v-for="(src, index) in images"
              :key="index"
              class="md-layout-item md-medium-size-25 md-small-size-33"
              @click="() => showImg(index)"
            >
              <div class="md-layout-item md-medium-size-25 md-small-size-33">
                <div class="md-layout-item md-medium-size-25 md-small-size-33">
                  <img :src="src" />
                </div>

                <div class="md-layout-item md-medium-size-25 md-small-size-33">
                  <VueEasyLightbox
                    :visible="visible"
                    :imgs="images"
                    :index="index"
                    @hide="handleHide"
                  ></VueEasyLightbox>
                </div>
              </div>
            </div>-->
          </div>
        </template>
          </div>
      </div>
    </div></div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import VueGallery from "vue-gallery";
import VueGallerySlideshow from "vue-gallery-slideshow";
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    Tabs,
    gallery: VueGallery,
    VueGallerySlideshow,
    VueEasyLightbox
  },
  bodyClass: "profile-page",
  data() {
    return {};
  },
  props: {
    img: {
      type: String,
      default: require("@/assets/img/faces/image-de-profil.jpg")
    },
    nom: String,
    titre: String,
    photos: Array,
    description: String,
    // carousel: false,
    isVisible: false,
    visible: false,
    index: 0,

    fb: {
      type: String,
      defaut: null
    },
    insta: {
      type: String,
      defaut: null
    },
    twitter: {
      type: String,
      defaut: null
    },
    yt: {
      type: String,
      defaut: null
    }
  },
  methods: {
    onClick(i) {
      this.index = i;
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    showSingle() {
      this.imgs = "http://via.placeholder.com/350x150";
      this.show();
    },
    showMultiple() {
      this.imgs = [
        "http://via.placeholder.com/350x150",
        "http://via.placeholder.com/350x150"
      ];
      this.index = 1; // index of imgList
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>


</style>
