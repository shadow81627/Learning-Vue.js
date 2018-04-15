<template>
  <div>
    <show-greetings-component :msg='msg'></show-greetings-component>
    <change-greetings-component :msg='msg'></change-greetings-component>
  <div>
</template>
 
<script>
import ShowGreetingsComponent from './components/ShowGreetingsComponent.vue'
import ChangeGreetingsComponent from './components/ChangeGreetingsComponent.vue'

export default {
  components: { ShowGreetingsComponent, ChangeGreetingsComponent },
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>
