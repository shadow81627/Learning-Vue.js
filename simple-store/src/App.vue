<template>
<div class="container">
  <div class="row">
    <div class="u-full-width" style="margin-top: 25%">
    <show-greetings-component></show-greetings-component>
    <change-greetings-component></change-greetings-component>
    </div>
  </div>
</div>
</template>
 
<script>
import ShowGreetingsComponent from './components/ShowGreetingsComponent.vue'
import ChangeGreetingsComponent from './components/ChangeGreetingsComponent.vue'
import store from './vuex/store'

export default {
  components: { ShowGreetingsComponent, ChangeGreetingsComponent },
  store
}
</script>
