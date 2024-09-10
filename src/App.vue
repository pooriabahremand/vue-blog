<template>
  <nav>
    <HeaderComponent />
    <router-view></router-view>
  </nav>
</template>

<script>
import HeaderComponent from "./components/Header.vue";
export default {
  components: { HeaderComponent },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
body {
  margin: 0;
  font-family: "sans-serif";
}
</style>
