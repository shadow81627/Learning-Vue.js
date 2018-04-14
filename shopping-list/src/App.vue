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
import _ from 'underscore'

export default {
  components: {
    ShoppingListComponent
  },
  data () {
    return {
      shoppinglists: [
        {
          id: 'groceries',
          title: 'Groceries',
          items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }]
        },
        {
          id: 'clothes',
          title: 'Clothes',
          items: [{ text: 'black dress', checked: false }, { text: 'all stars', checked: false }]
        },
        {
          id: 'people',
          title: 'People',
          items: [{ text: 'George', checked: true }, { text: 'Connor', checked: false }]
        }
      ]
    }
  },
  methods: {
    onChangeTitle (id, text) {
      _.findWhere(this.shoppinglists, { id: id }).title = text
    }
  }
}
</script>

<style>

</style>
