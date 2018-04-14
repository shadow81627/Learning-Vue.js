// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Lowercase filter
Vue.filter('lowercase', (key) => {
  return key.toLowerCase()
})

// Leftpad filter adds leading 0 for timer
Vue.filter('leftpad', (value) => {
  if (value >= 10) {
    return value
  }
  return '0' + value
})

// Uppercase filter
Vue.filter('uppercase', (key) => {
  return key.toUpperCase()
})

// Add space to right side of string
Vue.filter('addspace', (value) => {
  return value + ' '
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})


