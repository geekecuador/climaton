<template>
  <user-layout>
    <router-view />
  </user-layout>
</template>

<script>
import UserLayout from "../../../layouts/HuellaLayout";

export default {
  components: {
    "user-layout": UserLayout
  }
};
</script>
