// pages/kaochang/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  kaochang(){
    wx.navigateTo({
      url: '../kaochangs/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.gethot_room();
    this.getposition_room();
  },
  /*
   * 获取推荐考场
   */
  getposition_room(e) {
    var url = app.url;
    var that = this;
    wx.request({
      url: url + '/Index/position_room',
      success: function (e) {
        if (e.data.error == 200) {
          that.setData({
            position_room: e.data.data
          })
        }
      }
    })
  },
  /*
   * 获取热门考场
  */
  gethot_room: function (e) {
    var url = app.url;
    var that = this;
    wx.request({
      url: url + '/Index/hot_room',
      success: function (e) {
        if (e.data.error == 200) {
          that.setData({
            hot_room: e.data.data
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})