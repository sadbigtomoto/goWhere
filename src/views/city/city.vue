<template>
  <div class="city">
    <city-header></city-header>
    <city-search :city="cities"></city-search>
    <city-list :city="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :city="cities" @change="handleLeterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./component/Header.vue";
import CitySearch from "./component/Search.vue";
import CityList from "./component/List.vue";
import CityAlphabet from "./component/Alphabet.vue";
import axios from "axios";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: "",
    };
  },

  methods: {
    getCityInfo() {
      axios.get("/city.json").then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLeterChange(letter) {
      this.letter = letter;
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<style >
</style>
