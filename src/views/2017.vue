<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
              <h1 class="title">Uni'Son 2017</h1>
              <h5 class="description">
                Edition 2017
                <img
                  src="@/assets/img/affiche/affiche2018.png"
                  alt="affiche2018"
                  style="padding-bottom: 15px"
                >
              </h5>
              <br>
            </div>
          </div>
          <div class="md-layout-item md-medium-size-33 md-small-size-100">
            <div class="team-player">
              <md-card class="md-card-plain">
                <div class="md-layout-item mx-auto">
                  <div
                    class="image"
                    v-for="(image, imageIndex) in images"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
                  ></div>
                  <gallery :images="images" :index="index" @close="index = null"></gallery>
                </div>
              </md-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="path/to/vue-easy-lightbox.umd.min.js"></script>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";
import VueGallery from "vue-gallery";

export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/affiche/couverture2019.jpg")
    }
  },
  data() {
    return {
      images: [],
      background: require("@/assets/img/affiche/fond-bannière.jpg"),
      index: 0
    };
  },
  components: {
    VueGallerySlideshow,
    gallery: VueGallery
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    onClick(i) {
      this.index = i;
    },
    fullTable(images) {
      console.log("oui");
      for (var i = 1; i < 70; i++) {
        var url = "@/assets/img/2018/uni_son-" + i + ".jpg";
        console.log("ouiezr");
        images.push(url);
        console.log("oui2");
      }

      return images;
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
body {
  font-family: sans-serif;
}
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>



