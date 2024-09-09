<template>
  <div id="app">
    <AddBlogComponent />
  </div>
</template>

<script>
import AddBlogComponent from "./components/AddBlog.vue";

export default {
  components: {
    AddBlogComponent,
  },

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
