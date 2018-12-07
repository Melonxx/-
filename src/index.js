import Vue from 'vue'
import Button from './button'
import {expect} from 'chai'

Vue.component('g-button', Button)
new Vue({
  el: '#app'
})

{
  expect('foo').to.be.a('string');
}
