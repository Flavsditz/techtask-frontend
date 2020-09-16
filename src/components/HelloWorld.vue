<template>
  <b-container>
    <b-jumbotron
      header="BootstrapVue"
      lead="Bootstrap v4 Components for Vue.js 2"
    >
      <p>For more information visit our website</p>
      <b-btn variant="primary" href="https://bootstrap-vue.org/"
        >More Info</b-btn
      >
    </b-jumbotron>

    <b-form-group
      horizontal
      :label-cols="4"
      description="Let us know your name."
      label="Enter your name"
    >
      <b-form-input v-model.trim="name"></b-form-input>
    </b-form-group>

    <b-alert variant="success" :show="showAlert()">Hello {{ name }}</b-alert>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  name = "";

  showAlert() {
    return this.name.length > 4;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
