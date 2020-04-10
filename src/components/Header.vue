<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to="/" :active='$route.name == "home"'>Home</b-nav-item>
        <b-nav-item to="/etl" :active='$route.name == "etl"'>Etl</b-nav-item>
        <b-nav-item to="/films" :active='$route.name == "films"'>Films</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
