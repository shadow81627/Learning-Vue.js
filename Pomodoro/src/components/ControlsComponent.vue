<template>
<h2>
  <span>{{ 'Pomodoro' | lowercase | uppercase | addspace }}</span>
  <button :disabled='isStarted && !isPaused'>
    <i class="glyphicon glyphicon-play"></i>
  </button>
  <button :disabled='!isStarted || isPaused'>
    <i class="glyphicon glyphicon-pause"></i>
  </button>
  <button :disabled='!isStarted'>
   <i class="glyphicon glyphicon-stop"></i>
  </button>
</h2>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['isStarted', 'isPaused', 'isStopped'])
}
</script>

<style scoped>

</style>
