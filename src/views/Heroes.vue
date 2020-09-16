<template>
  <div class="about">
    <h1>This is the list of Heroes:</h1>
    <ul id="example-1">
      <li v-for="item in heroes" :key="item.name">
        {{ item.name }} --> {{ item.ability }}
      </li>
    </ul>
    <b-button variant="success" @click="getHeroesFromServer">Reload</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Heroes extends Vue {
  get heroes() {
    return this.$store.state.heroes;
  }

  getHeroesFromServer() {
    this.$store.dispatch("getAllHeroes");
  }
}
</script>
