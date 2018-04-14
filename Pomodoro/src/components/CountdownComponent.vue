<template>
<div class="well">
  <div class="pomodoro-timer">
    <span>{{ min + ':' + sec }}</span>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      min: '10',
      sec: '59'
    }
  }
}
</script>

<style scoped>

</style>
