<template>
<div id="app" class="container">
  <controls-component></controls-component>
  <countdown-component></countdown-component>
  <state-title-component></state-title-component>
  <transition name="fade">
    <kittens-component v-show="!isworking"></kittens-component>
  </transition>
</div>
</template>

<script>
import ControlsComponent from './components/ControlsComponent'
import StateTitleComponent from './components/StateTitleComponent'
import KittensComponent from './components/KittensComponent'
import CountdownComponent from './components/CountdownComponent'
import store from './vuex/store'
import { mapGetters } from 'vuex'

window.data = {
  kittens: true
}

export default {
  computed: mapGetters({
    isworking: 'isWorking'
  }),
  store,
  name: 'App',
  components: {
    ControlsComponent,
    StateTitleComponent,
    KittensComponent,
    CountdownComponent
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
