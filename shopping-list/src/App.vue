<template>
<div id="app" class="container">
  <ul class="nav nav-tabs" role="tablist">
    <li v-for="list in shoppinglists" v-bind:key="list.id" role="presentation">
      <a v-bind:href="'#' + list.id" v-bind:aria-controls="list.id" role="tab" data-toggle="tab">{{ list.title }}</a>
    </li>
  </ul>
  <div class="tab-content">
    <div v-for="list in shoppinglists" v-bind:key="list.id" class="tab-pane" role="tabpanel" v-bind:id="list.id">
      <shopping-list-component v-bind:title="list.title" v-bind:items="list.items"></shopping-list-component>
    </div>
  </div>
</div>
</template>

<script>
import ShoppingListComponent from './components/ShoppingListComponent'

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
  }
}
</script>

<style>

</style>
