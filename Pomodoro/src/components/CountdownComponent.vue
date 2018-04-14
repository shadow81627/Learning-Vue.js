<template>
<div class="well">
  <div class="pomodoro-timer">
    <span>{{ min | leftpad}}:{{ sec | leftpad}}</span>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      min: '1',
      sec: '5'
    }
  }
}
</script>

<style scoped>

</style>
