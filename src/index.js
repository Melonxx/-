import Vue from 'vue'
import Button from './button'
import {expect} from 'chai'

Vue.component('g-button', Button)
new Vue({
  el: '#app'
})

{
  const vm = Vue.extend(Button)
  const button = new vm({
    el: '#div',
    propsData: {
      icon: 'settings'
    }
  })
  const icon = button.$el.querySelector('use')
  console.log(icon)
  expect(icon.getAttribute('xlink:href')).to.eq('#icon-settings');
}
