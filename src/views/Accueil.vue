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
              class="md-layout-item md-size-100 md-xsmall-size-100 mx-auto text-center"
            >
              <h1 class="title text-center">
                Uni'Son
              </h1>
              <h3 class="subtitle">by Pulsation UTT</h3>
              <h5 class="description">
                Uni’Son est une soirée de concerts, organisée tous les ans
                depuis 2016, qui permet aux artistes étudiants de se produire
                sur scène. Pas moins de 500 personnes sont attendues le samedi 6
                avril prochain pour fêter ensemble la musique et se rassembler
                autour de cette passion commune. Uni’Son est la réunion de TOUS
                les étudiants, quelles que soient leur nationalité,
                culture...Tous les styles musicaux sont chaque année mis à
                l’honneur : Rap, Jazz, Funk, Rock, Métal, Electro, Musique
                vivante.
              </h5>
              <div
                class="md-layout-item md-size-33 md-xsmall-size-50 mx-auto text-center"
              >
                <img
                  v-img
                  src="@/assets/img/affiche/affiche2019.png"
                  alt="affiche2019"
                  style="padding-bottom: 5vw"
                />
              </div>
            </div>

            <div class="md-layout">
              <div
                class="md-layout-item md-medium-size-50 md-small-size-100 mx-auto text-center"
              >
                <md-button
                  href="https://www.youtube.com/watch?v=elF57mj-xxY&feature=youtu.be"
                  class="md-success md-layout-item md-medium-size-75 md-small-size-100"
                  target="_blank"
                >
                  <i class="fas fa-play"></i> Teaser
                </md-button>

              </div>
            </div>
          </div>

          <div class="md-layout">
            <md-card class="md-card-plain">
              <div class="md-layout-item md-size-100 md-xsmall-size-100 mx-auto text-center">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>map</md-icon>
                  </div>
                </div>

                <h2 class="title text-center">Où c'est ?</h2>

                  <h5 class="description">
                    Pour la première fois, Uni'Son aura lieu à la Chapelle
                    Argence !
                  </h5>
                  <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
                  <img :src="mapView" v-img alt="Maps" class="img-raised" />
                </div>
                <br />
                <h4 class="card-title">
                  <a
                    href="https://www.google.com/maps/place/Chapelle+Argence/@48.2877116,4.0723357,13.75z/data=!4m12!1m6!3m5!1s0x47ee9858d95ac6c3:0xbde05fa9da5fb65a!2sChapelle+Argence!8m2!3d48.2998506!4d4.0724576!3m4!1s0x47ee9858d95ac6c3:0xbde05fa9da5fb65a!8m2!3d48.2998506!4d4.0724576"
                    >20 bis Boulevard Gambetta, 10000 Troyes</a
                  >
                </h4>
              </div>
            </md-card>
          </div>
        </div>
      </div>

      <div class="section text-center">
        <div class="container">
          <h2 class="title text-center">Consommables</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-50">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-40 mx-auto">
                      <img
                        :src="imgBieres[0].biere"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Leffe Ruby
                      <br />
                      <small class="card-description text-muted">2.5€</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Une bière fruitée, aromatisée aux fruits rouges et
                        brassée avec du jus de sureau.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-40 mx-auto">
                      <img
                        :src="imgBieres[2].biere"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Maredsous 6
                      <br />
                      <small class="card-description text-muted">2.5€</small>
                    </h4>
                    <md-card-content>
                      <p class="card-description">
                        Une bière belge au caractère agréablement floral. 
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
            </div>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="imgBieres[4].biere"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Soft
                      <br />
                      <small class="card-description text-muted"
                        >Gratuit pour les SAM</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Eau/Sodas/Jus de Fruits
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="imgBieres[3].biere"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Croques Monsieur
                      <br />
                      <small class="card-description text-muted"
                        >1 € l'un et 2 € les 3</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        - Chèvre miel <br />- Classique <br />
                        (Photo non contractuelle)
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title text-center">Remerciements</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="partenaires[4].logo"
                        alt="Thumbnail Image"
                        class="img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Argentique UTT
                      <br />
                      <small class="card-description text-muted"
                        >Photographes officiels</small
                      >
                    </h4>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="partenaires[5].logo"
                        alt="Thumbnail Image"
                        class="img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Media UTT
                      <br />
                      <small class="card-description text-muted"
                        >Le concert est filmé!</small
                      >
                    </h4>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="partenaires[6].logo"
                        alt="Thumbnail Image"
                        class="img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Radio Campus 3
                      <br />
                      <small class="card-description text-muted"
                        >Radio étudiante, numéro 1 de France</small
                      >
                    </h4>
                  </md-card>
                </div></div>
                  <div class="md-layout-item md-medium-size-33 md-small-size-100">
                      <div class="team-player">
                          <md-card class="md-card-plain">
                              <div class="md-layout-item md-size-50 mx-auto">
                                  <img
                                          :src="partenaires[8].logo"
                                          alt="Thumbnail Image"
                                          class="img-fluid"
                                  />
                              </div>
                              <h4 class="card-title">
                                  UNG
                                  <br />
                                  <small class="card-description text-muted"
                                  >Hébergeur du site d'Uni'son</small
                                  >
                              </h4>
                          </md-card>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Partenaires</h2>
          <div class="team">
            <div class="md-layout center">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="partenaires[0].logo"
                        alt="Thumbnail Image"
                        class="img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      BDE UTT
                      <br />
                      <small class="card-description text-muted"
                        >Soutien et sponsor officiel de l'événement </small
                      >
                    </h4>
                  </md-card>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="partenaires[2].logo"
                        alt="Thumbnail Image"
                        class="img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Crous Reims
                      <br />
                      <small class="card-description text-muted"
                        >Pour une meilleure vie étudiante</small
                      >
                    </h4>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="partenaires[3].logo"
                        alt="Thumbnail Image"
                        class="img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Maison du Boulanger
                      <br />
                      <small class="card-description text-muted"
                        >Centre Culturel</small
                      >
                    </h4>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="partenaires[7].logo"
                        alt="Thumbnail Image"
                        class="img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      MGEL
                      <br />
                      <small class="card-description text-muted"
                        >La sécurité sociale étudiante</small
                      >
                    </h4>
                  </md-card>
                </div>
              </div>
            </div>
            <div class="md-layout"></div>
          </div>
        </div>
      </div>

      <!-- 
        <div class="section text-center">
        <div class="container">
          <h2 class="title">Consommables</h2>

          <div class="team">
            <div class="md-layout mx-auto">
              <div class="md-layout-item md-medium-size-33 md-small-size-75">
                <item
                  :img="imgBieres[0].biere"
                  title="Binouze"
                  subtitle="connais pas"
                  description="input text."
                  isRaised="true"
                ></item>
                <item
                  :img="imgBieres[1].biere"
                  title="Binouze"
                  subtitle="bière locale du canada"
                  description="2.50"
                  isRaised="true"
                ></item>
                <item
                  :img="imgBieres[2].biere"
                  title="Et encore de la binouze"
                  subtitle="pas vraiment de la bière"
                  description="7 €"
                  isRaised="true"
                ></item>
                <item
                  :img="imgBieres[3].biere"
                  title="Mdr ce sont des legos"
                  subtitle="raffraichissante"
                  description="19 €"
                  isRaised="true"
                ></item>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Photos des éditions précédentes</h2>
          <div class="team">
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
              <md-card>
                <carousel
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
                  <slide>
                    <img v-img:group :src="carousel1" alt="carousel1">
                  </slide>
                  <slide>
                    <img v-img:group :src="carousel2" alt="carousel2">
                  </slide>
                  <slide>
                    <img v-img:group :src="carousel3" alt="carousel3">
                  </slide>
                </carousel>
              </md-card>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Remerciements</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <item
                  :img="partenaires[4].logo"
                  title="Argentique UTT"
                  subtitle="Parce qu'ils font de jolies photos"
                ></item>
                <item
                  :img="partenaires[5].logo"
                  title="Media UTT"
                  subtitle="Dommage qu'ils n'aient pas de talents..."
                ></item>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Partenaires</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <item
                  :img="partenaires[0].logo"
                  title="BDE UTT"
                  subtitle="Parce qu'ils nous aiment bien"
                ></item>
                <item
                  :img="partenaires[1].logo"
                  title="Carrefour"
                  subtitle="C'est toujours bien d'avoir de la bouffe"
                ></item>
                <item
                  :img="partenaires[2].logo"
                  title="Crous Reims"
                  subtitle="C'est toujours sympa les subventions"
                ></item>
                <item
                  :img="partenaires[3].logo"
                  title="Maison du Boulanger"
                  subtitle="Centre Culturel"
                ></item>
              </div>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
export default {
  bodyClass: "landing-page",
  components: { Item },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/affiche/couverture2019.jpg")
    }
  },
  data() {
    return {
      carousel1: require("@/assets/img/2018/uni_son-5.jpg"),
      carousel2: require("@/assets/img/2018/uni_son-12.jpg"),
      carousel3: require("@/assets/img/2018/uni_son-35.jpg"),
      imgBieres: [
        { biere: require("@/assets/img/consommable/biere-1.jpg") },
        { biere: require("@/assets/img/consommable/biere-2.jpg") },
        { biere: require("@/assets/img/consommable/biere-3.jpg") },
        { biere: require("@/assets/img/consommable/biere-4.jpg") },
        { biere: require("@/assets/img/consommable/biere-5.jpg") }
      ],
      background: require("@/assets/img/affiche/fond-bannière.jpg"),
      mapView: require("@/assets/img/map.png"),
      partenaires: [
        { logo: require("@/assets/img/partenaires/bdeutt.jpg") },
        { logo: require("@/assets/img/partenaires/carrefour.png") },
        { logo: require("@/assets/img/partenaires/crous.png") },
        { logo: require("@/assets/img/partenaires/maison-boulanger.jpg") },
        { logo: require("@/assets/img/partenaires/argentique.jpg") },
        { logo: require("@/assets/img/partenaires/media.jpg") },
        { logo: require("@/assets/img/partenaires/rc3.jpeg") },
        { logo: require("@/assets/img/partenaires/mgel.jpg") },
        { logo: require("@/assets/img/partenaires/ung.png") }
      ],
      videoId: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    getVideoId(url) {
      this.videoId = this.$youtube.getIdFromURL(url);
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
.body {
  background-image: url(../assets/img/affiche/fond-bannière.jpg);
  margin: 50;
}
</style>
