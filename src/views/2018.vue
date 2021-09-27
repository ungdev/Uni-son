<template xmlns:v-img="http://www.w3.org/1999/xhtml">
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-33 md-xsmall-size-50 mx-auto text-center"
            >
              <h1 class="title">Uni'Son 2018</h1>
              <h5 class="description">
                Edition 2018
                <img
                  v-img
                  src="@/assets/img/affiche/affiche2018.png"
                  alt="affiche2018"
                  style="padding-bottom: 15px"
                />
              </h5>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Artistes</h2>
          <div class="team">
            <div class="md-layout">
              <md-card class="md-card-plain">
                <div
                  class="md-layout-item md-size-33 md-medium-size-33 md-small-size-50 md-xsmall-size-100 md-small-size-66 mx-auto text-center mx-auto"
                >
                  <img
                    src="@/assets/img/faces/stone-weather.jpg"
                    alt="Thumbnail Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <h4 class="card-title">
                  Stone Weather
                  <br />
                  <small class="card-description text-muted">Funk rock</small>
                </h4>
                <md-card-content>
                  <p class="card-description">
                    L’univers de Stone Weather promet un beau moment de
                    réjouissance. Si le rock est son adage, Stone Weather
                    empreinte allègrement son ambiance à la pop, au blues, au
                    funk. Ainsi les 4 musiciens plongent le public dans un set
                    éclectique savamment orche
                  </p>
                  <div class="md-layout">
                    <div
                      class="md-layout-item md-medium-size-33 md-small-size-50 md-size-66 md-xsmall-size-100 mx-auto text-center"
                    >
                      <img
                        v-img
                        src="@/assets/img/2018/uni_son-44.jpg"
                        alt="Thumbnail Image"
                        class="img-raised img-fluid"
                      />
                    </div>

                    <div
                      class="md-layout-item md-medium-size-33 md-small-size-50 md-size-66 md-xsmall-size-100 mx-auto text-center" style="padding-top:5px"
                    >
                      <img
                        v-img
                        src="@/assets/img/2018/uni_son-45.jpg"
                        alt="Thumbnail Image"
                        class="img-raised img-fluid"
                      />
                    </div>
                  </div>
                </md-card-content>
              </md-card>
            </div>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-50">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto"></div>
                    <h4 class="card-title">
                      Bees Nest
                      <br />
                      <small class="card-description text-muted">UTT</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Bzzzzzzzzz, entre reprises et créations pop-rock, les
                        Bees Nest vont faire bourdonner la scène d'Uni'Son !
                        Back in Bees Nest !
                        <img
                          v-img
                          src="@/assets/img/faces/beesnest.jpg"
                          alt="Thumbnail Image"
                          class="img-raised img-fluid"
                        />
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-50">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto"></div>
                    <h4 class="card-title">
                      Ceci Dit
                      <br />
                      <small class="card-description text-muted">UTT</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Alors en fait j’ai ajouté Guillaume sur Facebook par
                        erreur et puis on a commencé à faire du punk rock. Après
                        il a rencontré Stann dans ce genre de sanitaire (tu le
                        sais) et comme par hasard le démon du rythme l’habitait.
                        Du coup on a commencé à faire du sale dans le respect de
                        chacun. Voilà c’est tout. A plus dans le bus.
                        <img
                          v-img
                          src="@/assets/img/faces/ceci-dit.png"
                          alt="Thumbnail Image"
                          class="img rounded-circle img-fluid"
                        />
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-50">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto"></div>
                    <h4 class="card-title">
                      Jazzy et Michel
                      <br />
                      <small class="card-description text-muted">UTT</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Viens dire merci à Jazzy et Michel, le groupe qui
                        t'envoie de bonne vibes sur tes orifices auditifs
                        <img
                          v-img
                          src="@/assets/img/faces/jazzy-et-michel.jpg"
                          alt="Thumbnail Image"
                          class="img-raised img-fluid"
                        />
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-50">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto"></div>
                    <h4 class="card-title">
                      PT = nRV
                      <br />
                      <small class="card-description text-muted">UTT</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        On réveille les démons de notre apocalypse qui
                        détruisent tout entre les lignes et qui sentent l'esprit
                        des adolescents qui se croient millionnaires.
                        <img
                          v-img
                          src="@/assets/img/faces/ptnrv.jpg"
                          alt="Thumbnail Image"
                          class="img-raised img-fluid"
                        />
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
            </div>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-50">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto"></div>
                    <h4 class="card-title">
                      Rush To Stage
                      <br />
                      <small class="card-description text-muted">UTBM</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Hey ! Nous c'est Rush to Stage, un groupe de l'UTBM
                        monté il y a peu et spécialement pour l'occasion ! Notre
                        délire ? Du bon vieux Rock avec une pointe de Punk de
                        temps à autres, mais on joue aussi un peu de Pop 😀
                        N'hésite pas à venir nous écouter, on fait un peu peur,
                        mais on mord pas, promis ! 😉
                        <img
                          v-img
                          src="@/assets/img/faces/rush-to-stage.jpg"
                          alt="Thumbnail Image"
                          class="img-raised img-fluid"
                        />
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-50">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto"></div>
                    <h4 class="card-title">
                      Wazaaaaa
                      <br />
                      <small class="card-description text-muted">UTT</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Avec plein de a
                        <img
                          v-img
                          src="@/assets/img/faces/wazaaa.jpg"
                          alt="Thumbnail Image"
                          class="img-raised img-fluid"
                        />
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-50">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto"></div>
                    <h4 class="card-title">
                      Zipper
                      <br />
                      <small class="card-description text-muted">UTC</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Le groupe Zipper viendra de l'UTC pour te transporter
                        dans leur univers : le hardrock
                        <img
                          v-img
                          src="@/assets/img/faces/zipper.jpg"
                          alt="Thumbnail Image"
                          class="img-raised img-fluid"
                        />
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-50">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto"></div>
                    <h4 class="card-title">
                      F0cked Rythm
                      <br />
                      <small class="card-description text-muted"
                        >Groovy!</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Ils te proposeront des reprises de riffs et des
                        créations originales, le tout assaisonnés d’une petite
                        sauce résultant d’un mélange de groove et de subtilité
                        <img
                          v-img
                          src="@/assets/img/faces/focked-rythm.jpg"
                          alt="Thumbnail Image"
                          class="img-raised img-fluid"
                        />
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<div class="section text-center">
        <div class="container">
          <h1 class="title">Galerie photos édition 2018</h1>
          <div class="md-layout-item md-medium-size-33 md-small-size-100">
            <div class="team-player">
              <md-card class="md-card-plain">
                <div class="md-layout-item mx-auto">
                  <div
                    v-img:group1
                    class="image"
                    v-for="(image, imageIndex) in images"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    :style="{
                      backgroundImage: 'url(' + image + ')',
                      width: '300px',
                      height: '200px'
                    }"
                  ></div>
                  <gallery
                    :images="images"
                    :index="index"
                    @close="index = null"
                  ></gallery>
                </div>
              </md-card>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script src="path/to/vue-easy-lightbox.umd.min.js"></script>

<script>
import VueGallery from "vue-gallery";
import Artiste from "@/views/Artiste.vue";

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
      /* images: [
        require("@/assets/img/2018/uni_son-1.jpg"),
        require("@/assets/img/2018/uni_son-2.jpg"),
        require("@/assets/img/2018/uni_son-5.jpg"),
        require("@/assets/img/2018/uni_son-6.jpg"),
        require("@/assets/img/2018/uni_son-9.jpg"),
        require("@/assets/img/2018/uni_son-10.jpg"),
        require("@/assets/img/2018/uni_son-12.jpg"),
        require("@/assets/img/2018/uni_son-32.jpg"),
        require("@/assets/img/2018/uni_son-14.jpg"),
        require("@/assets/img/2018/uni_son-20.jpg"),
        require("@/assets/img/2018/uni_son-21.jpg"),
        require("@/assets/img/2018/uni_son-30.jpg"),
        require("@/assets/img/2018/uni_son-40.jpg"),
        require("@/assets/img/2018/uni_son-44.jpg"),
        require("@/assets/img/2018/uni_son-45.jpg"),
        require("@/assets/img/2018/uni_son-52.jpg"),
        require("@/assets/img/2018/uni_son-53.jpg"),
        require("@/assets/img/2018/uni_son-54.jpg"),
        require("@/assets/img/2018/uni_son-56.jpg"),
        require("@/assets/img/2018/uni_son-57.jpg"),
        require("@/assets/img/2018/uni_son-58.jpg"),
        require("@/assets/img/2018/uni_son-60.jpg"),
        require("@/assets/img/2018/uni_son-61.jpg"),
        require("@/assets/img/2018/uni_son-62.jpg"),
        require("@/assets/img/2018/uni_son-66.jpg"),
        require("@/assets/img/2018/uni_son-67.jpg"),
        require("@/assets/img/2018/uni_son-69.jpg")
      ],*/
      background: require("@/assets/img/affiche/fond-bannière.jpg"),
      index: 0
    };
  },
  components: {
    gallery: VueGallery,
    Artiste
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
