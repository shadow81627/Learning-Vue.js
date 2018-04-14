<template>
<div class="well">
  <img v-bind:src="catimgsrc" />
</div>
</template>

<script>
export default {
  data () { 
    return { 
      catimgsrc: "http://thecatapi.com/api/images/get?size=med" 
    } 
  } 
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
