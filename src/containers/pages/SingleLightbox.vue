<template>
  <div>
    <!-- <router-link to="#" @click.native.prevent="onThumbClick(0)"> -->
      <img :src="thumb" alt="thumbnail" :class="className" />
       <b-badge variant="secondary" pill class="position-absolute badge-top-left-lightbox" v-if="type">{{type}}</b-badge>
       <img :src="icon" class="position-absolute category-top-right-lightbox" v-if="icon"/> 
    <!-- </router-link> -->
    <LightGallery
      :images="[large]"
      :index="photoIndex"
      :disable-scroll="true"
      @close="handleHide()"
    />
  </div>
</template>

<script>
import { LightGallery } from "vue-light-gallery";

export default {
  props: {
    "thumb": {
      default: ""
    },
    "large": {
      default: ""
    },
    "className": {
      default: ""
    },
    "icon": {
      default: null
    },
    "type": {
      default: null
    }
  },
  components: {
    LightGallery
  },
  data() {
    return {
      photoIndex: null
    };
  },
  methods: {
    onThumbClick(index) {
      this.photoIndex = index;
    },
    handleHide() {
      this.photoIndex = null;
    }
  }
};
</script>
