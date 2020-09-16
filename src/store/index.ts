import Vue from "vue";
import Vuex from "vuex";
import BackEndGateway from "@/services/BackEndGateway";
import Hero from "@/models/Hero";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes: Array<Hero>()
  },
  mutations: {
    addHeroes(state, heroes) {
      state.heroes = heroes;
    }
  },
  actions: {
    getAllHeroes({ state, commit }) {
      const heroes = BackEndGateway.getAllHeroes();

      commit("addHeroes", heroes);
    }
  },
  modules: {}
});
