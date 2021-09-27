<template>
  <div>
    <div class="md-layout">
      <div class="team-player">
        <md-card class="md-card-plain">
          <div class="md-layout-item md-layout-item md-size-100 md-xsmall-size-100 mx-auto text-center">
            <img
              :src="img"
              alt="Thumbnail Image"
              v-if="isRaised"
              class="img-raised rounded-circle img-fluid"
            >
            <img :src="img" alt="Thumbnail Image" v-else class="img-fluid rounded">
          </div>
          <h4 class="card-title">
            {{title}}
            <br>
            <small class="card-description text-muted">{{subtitle}}</small>
          </h4>

          <md-card-content>
            <p class="card-description">{{description}}</p>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    img: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    isRaised: {
      type: Boolean,
      default: false
    }
  }
};
</script>