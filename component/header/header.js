// component/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerText: {
      type: String,
      value: 'default value',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    someData: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goback() {
      wx.navigateBack({ delata: 1 })
    },
  }
})
