<template>
  <div class="icon-row-item">
    <b-card class="mb-4 text-center clickable" @click="clicked" v-bind:class="{ 'card-selected': selected }">
      <i :class="icon"/>
      <p class="card-text font-weight-semibold mb-0">{{ title }}</p>
      <p class="lead text-center">{{ value }}</p>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: 'icon-card-title' },
    icon: { type: String, default: 'iconsminds-clock' },
    value: { type: String, default: 0 },
    selected: {type: Boolean, default: false},
    clicked: {
      type: Function,
      default: () => {
          console.log("clicked...............")
      }
    }
  }
}
</script>

<style>
  .clickable{
    cursor: pointer;
  }
</style>
