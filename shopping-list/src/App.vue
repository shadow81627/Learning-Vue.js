<template>
<div id="app" class="container">
  <ul class="nav nav-tabs" role="tablist">
    <li :class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" :key="list.id" role="presentation">
      <a :href="'#' + list.id" :aria-controls="list.id" role="tab" data-toggle="tab">{{ list.title }}</a>
    </li>
  </ul>
  <div class="tab-content">
    <div :class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" :key="list.id" class="tab-pane" role="tabpanel" :id="list.id">
      <shopping-list-component :id="list.id" :title="list.title" :items="list.items" v-on:changeTitle="onChangeTitle"></shopping-list-component>
    </div>
  </div>
</div>
</template>

<script>
import ShoppingListComponent from './components/ShoppingListComponent'
import ShoppingListTitleComponent from './components/ShoppingListTitleComponent'
import store from './vuex/store'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    ShoppingListComponent,
    ShoppingListTitleComponent
  },
  computed: mapGetters({
    shoppinglists: 'getLists'
  }),
  methods: mapActions(['populateShoppingLists']),
  store,
  mounted () {
    this.populateShoppingLists()
  }
}
</script>

<style>

</style>
