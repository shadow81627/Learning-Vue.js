<template>
<div id="app" class="container">
  <controls-component></controls-component>
  <countdown-component></countdown-component>
  <state-title-component></state-title-component>
  <transition name="fade">
    <kittens-component v-if="kittens"></kittens-component>
  </transition>
</div>
</template>

<script>
import ControlsComponent from './components/ControlsComponent'
import StateTitleComponent from './components/StateTitleComponent'
import KittensComponent from './components/KittensComponent'
import CountdownComponent from './components/CountdownComponent'

window.data = {
  kittens: true
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


