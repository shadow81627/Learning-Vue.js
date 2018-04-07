<template>
  <div class="input-group">
    <input @keyup.enter="addItem" v-model="newItem" placeholder="add shopping list item" type="text" class="form-control">
    <span class="input-group-btn">
      <button @click="addItem" class="btn btn-default" type="button">Add!</button>
    </span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newItem: ''
    }
  },
  methods: {
    addItem: function () {
      var text

      text = this.newItem.trim()
      if (text) {
        this.$emit('add', this.newItem)
        this.newItem = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
