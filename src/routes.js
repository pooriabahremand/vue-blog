import ShowBlogComponent from "./components/ShowBlog.vue";
import AddBlogComponent from "./components/AddBlog.vue";
import PostComponent from "./components/Post.vue";
export default [
  { path: "/", component: ShowBlogComponent },
  { path: "/add", component: AddBlogComponent },
  { path: "/blog/:id", component: PostComponent },
];
