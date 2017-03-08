import Vue from 'vue'
import picker from './view/datepickerPC/datepickerView'

new Vue({
  render (h) {
    return h(picker)
  }
}).$mount('#app')

