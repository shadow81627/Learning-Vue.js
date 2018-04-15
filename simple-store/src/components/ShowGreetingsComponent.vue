<template>
  <h1>{{ msg }}</h1>
</template>
<style>
</style>
<script>
  export default {
    computed: {
      msg () {
        return this.$store.getters.getMessage
      }
    }
  }
</script>
