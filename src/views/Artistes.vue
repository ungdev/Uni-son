<template xmlns:img="">
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <br />
    <br />
    <div class="main main-raised">
      <div class="section profile-content text-center">
        <div class="container">
          <h2 class="title">Tête d'affiche</h2>
          <div class="md-layout">
            <div
              class="md-layout-item md-size-50 md-xsmall-size-100 md-small-size-66 mx-auto text-center"
            >
              <artiste
                nom="Yves Romao"
                titre="Auteur - Compositeur - Interprète"
                :img="photoRomao"
                isVisible="true"
                :photos="photosRomao[0].image"
                fb="https://www.facebook.com/romaoyves/"
                insta="https://www.instagram.com/yvesromao/"
                yt="https://www.youtube.com/user/yvesromao"
                twitter="https://twitter.com/yvesromao"
                description="
              Auteur-compositeur-inteprète, Yves Romao vous invite, le 6 Avril 2019, à découvrir des textes teintés de sensibilité, aux mélodies efficaces et aux musiques marquées par ses différentes influences.
Ces dernières années, après la sortie de son album « Mes Racines » (auto-production en partenariat avec la Sacem), nous avons pu l’écouter lors des premières parties de Gage et Amir, au Festival en Othe, Ville en Musique…c’est l’un des seuls artistes français à avoir fait une tournée dans une quinzaine de Starbucks en France en 2015, lors de sa tournée très intimiste « Mes Scènes Tour ».

              "
              />
            </div>
          </div>
          <div class="section text-center">
            <div class="container">
              <h2 class="title">Artistes Pulsation</h2>
              <div class="team">
                <div class="md-layout" style="padding-bottom: 20px">
                  <div
                    class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-small-size-100 mx-auto text-center"
                  >
                    <item
                      v-img
                      :img="photosUnison[0].image"
                      title="Big Band UTT"
                      subtitle="Jazz & Rock"
                      description="Le Big Band c’est la rock star de l’UTT, dans un style Jazz-Rock il saura te faire danser et chanter
comme tu ne l’as pas fait depuis que tu sautais en pyjama sur le lit de tes parents !
Il vous proposera pour cette folle soirée le meilleur de son répertoire, mélangeant BO, grands
classiques, succès mondiaux et medleys endiablés."
                    />
                  </div>
                  <div
                    class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-small-size-100 mx-auto text-center"
                  >
                    <item
                      v-img
                      :img="photosUnison[1].image"
                      title="GSN"
                      subtitle="Hard Rock"
                      description="GSN c’est: distorsion, riffs endiablés et headbang assurés avec des reprises des meilleurs morceaux de rock alternatif."
                    />
                  </div>
                  <div
                    class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-small-size-100 mx-auto text-center"
                  >
                    <item
                      v-img
                      :img="photosUnison[2].image"
                      title="Prol'UTT"
                      subtitle="Tous les styles"
                      description="Vous voulez écouter du jazz et de la musique chill d'ambiance? Passez votre chemin : nos inspirations musicales ont pour vocation de vous faire danser comme jamais! Rock, jazz, reggae en passant par du funk, toute l'énergie requise est là pour vous faire vous trémousser comme jamais!"
                    />
                  </div>
                </div>
                <div class="md-layout">
                  <div
                    class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-small-size-100 mx-auto text-center"
                  >
                    <item
                      v-img
                      :img="photosUnison[4].image"
                      title="Red Machines"
                      subtitle="Rock & Funk"
                      description="Tu aimes groover sur du bon rock et de la bonne funk et en plus tu es fan des Red Hot Chili Peppers, Rage Against the Machines, Muse et Rival sons?
Cherche pas plus loin, les Red Machines sont là pour rocker!
"
                    />
                  </div>
                  <div
                    class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-small-size-100 mx-auto text-center"
                  >
                    <item
                      v-img
                      :img="photosUnison[3].image"
                      title="Les Zicos"
                      subtitle="Rock & Blues"
                      description="Le rock, le blues, c’est bien séparé mais ensemble c’est encore mieux! Viens nous écouter jouer des classiques du blues/rock à notre sauce et  groover le temps de notre set"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section text-center">
            <div class="container">
              <h2 class="title">Artistes Extérieurs</h2>
              <div class="team">
                <div class="md-layout" style="padding-bottom: 20px">
                    <div
                       npm      class="md-layout-item md-size-50 md-xsmall-size-100 md-small-size-66 mx-auto text-center"
                    >
                  <div
                    class="md-layout-item md-medium-size-33 md-xsmall-size-100 md-small-size-100 mx-auto text-center"
                  >
                    <item
                      v-img
                      :img="photosUnison[5].image"
                      title="Still in Beta"
                      subtitle="Rock"
                      description="Comme l'année dernière (Rush to Stage remember), Uni'Son c'est un gros traquenard ! 3 semaines pour monter un set, facile ! Pour le plaisir de vos oreilles, et notre plaisir à nous quand même, nous vous avons concocté un set pop-rock avec une sauce UTBohéMienne ! Nous sommes une formation de 5 étudiants de Belfort, et on est chauds !
Mais n'oubliez pas, on est Still in Beta, soyez indulgent !
Ready to Rock !"
                    /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Artiste from "@/views/Artiste.vue";
import Item from "@/components/Item.vue";
export default {
  data() {
    return {
      photoRomao: require("@/assets/img/faces/romao-profil.jpg"),
      photosRomao: [
        { image: require("@/assets/img/faces/romao.jpg") },
        { image: require("@/assets/img/faces/romao.jpg") }
      ],
      photosUnison: [
        { image: require("@/assets/img/faces/big-band.jpg") },
        { image: require("@/assets/img/faces/gsn.jpg") },
        { image: require("@/assets/img/faces/prol-utt.jpg") },
        { image: require("@/assets/img/faces/leszicos.jpg") },
        { image: require("@/assets/img/faces/redmachines.jpg") },
        { image: require("@/assets/img/faces/Still-in-Beta.jpg") }
      ]
    };
  },
  components: {
    Artiste,
    Item
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/affiche/couverture2019.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
