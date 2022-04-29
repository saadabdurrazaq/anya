<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">PA Tulungagung</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link :to="{ name: 'welcome' }" class="nav-link" href="#"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            :to="{ name: 'syarat-berperkara' }"
            class="nav-link"
            href="#"
            >Syarat Berperkara</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'perceraian' }" class="nav-link" href="#"
            >Gugatan Mandiri</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'narasi' }" class="nav-link" href="#"
            >Narasi</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import "jquery/dist/jquery.js";
import "bootstrap-hover-dropdown/bootstrap-hover-dropdown.js";

export default {
  data() {
    return {
      data_menus: [],
    };
  },
  methods: {
    showData() {},
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
};
</script>

<style>
/*
  There is a collision between css default frontend theme and docs.md-iconic-font.min.css that called in public/index.html so, the navbar property must be reverted
*/
.navbar {
  padding: 0;
}
</style>
