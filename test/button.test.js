// import {expect} from 'chai'
const expect = chai.expect
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在', () => {
    expect(Button).to.be.ok //不是 undefined null 0 '' 等falsy值
  })
  it('可以设置icon', () => {
    const vm = Vue.extend(Button)
    const button = new vm({
      el: '#div',
      propsData: {
        icon: 'settings'
      }
    })
    const icon = button.$el.querySelector('use')
    console.log(icon)
    expect(icon.getAttribute('xlink:href')).to.equal('#icon-settings')
  })
  it('点击 button 触发 click 事件', () => {
    const vm = Vue.extend(Button)
    const button = new vm({
      el: '#div',
      propsData: {
        icon: 'settings'
      }
    })
    const callback = sinon.fake()
    button.$on('click', callback)
    button.$el.click()
    expect(callback).to.have.been.called
  })
})