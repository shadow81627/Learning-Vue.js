<template>
<div class="well">
  <img :src="catImgSrc" />
</div>
</template>

<script>
export default {

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
