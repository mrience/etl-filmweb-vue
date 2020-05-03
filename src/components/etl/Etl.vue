<template>
  <div class="container">
    <h1>etl</h1>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        description="type your film title here"
      >
        <b-form-input
          id="input-1"
          v-model="title"
          type="text"
          required
          placeholder="Enter title"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
    export default {
      name: "Etl",
      data() {
        return {
          title: '',
          show: true
        }
      },
      methods: {
        onSubmit() {

        }
      }
    }
</script>

<style scoped>

</style>
