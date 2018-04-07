<template>
  <div>
    <item-component :key="item.text" v-for="item in items" :item="item"></item-component>
  </div>
</template>

<script>
import ItemComponent from './ItemComponent'

export default {
  components: {
    ItemComponent
  },
  props: ['items']
}
</script>

<style scoped>

</style>
