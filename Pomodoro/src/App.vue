<template>
<div id="app" class="container">
  <controls-component></controls-component>
  <countdown-component></countdown-component>
  <state-title-component v-bind:isworking="isworking"></state-title-component>
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

window.data = {
  kittens: true,
  isworking: true
}

export default {
  name: 'App',
  components: {
    ControlsComponent,
    StateTitleComponent,
    KittensComponent,
    CountdownComponent
  },
  data () {
    return window.data
  }
}
</script>
