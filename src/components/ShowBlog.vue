<template>
  <div v-theme="'wide'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" :key="blog.title" class="single-blog">
      <router-link :to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title | toUpperCase }}</h2></router-link
      >
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<script>
import myMixins from "./../mixins/mixin";

export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },

  methods: {},

  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function (data) {
        this.blogs = data.body.slice(0, 10);
      });
  },

  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    },
  },

  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
      },
    },

    theme: {
      bind(el, binding, vnode) {
        if (binding.value === "wide") {
          el.style.maxWidth = "1200px";
        }
      },
    },
  },

  mixins: [myMixins],
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
