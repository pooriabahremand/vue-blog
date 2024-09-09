<template>
  <div id="app">
    <FormComponent>
      <div slot="form-header">
        <h3>This is the title of a form</h3>
        <p>This is some info about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Submit</button>
      </div>
    </FormComponent>
  </div>
</template>

<script>
import FormComponent from "./components/FormHelper.vue";
export default {
  components: {
    FormComponent,
  },

  data() {
    return {};
  },
  methods: {
    handleSubmit: function () {
      alert("thanks for submitting");
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
