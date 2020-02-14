// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    driving_room: null,
    room_status: true,
    school_status: true,
    driving_school: null,
    banner_status: true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdriving_room();
    this.getdriving_school();
    this.getbanner();
  },
  /*
   * banner图
   */
  getbanner: function (e) {
    var url = app.url;
    var that = this;
    wx.request({
      url: url + '/Index/get_banner',
      success: function (e) {
        if (e.data.error == 400) {
          that.setData({
            banner_status: false,
            banner_info: e.data.info
          })
        } else {
          that.setData({
            banner_info: e.data.data
          })
        }
      }
    })
  },
  /*
   * 考场推荐
   */
  getdriving_room: function (e) {
    var url = app.url;
    var that = this;
    wx.request({
      url: url + '/Index/driving_room',
      success: function (e) {
        if (e.data.error == 400) {
          that.setData({
            room_status: false,
            driving_room: e.data.info
          })
        } else if (e.data.error == 200) {
          that.setData({
            driving_room: e.data.data
          })
        }
      }
    })
  },
  /*
   * 驾校推荐
  */
  getdriving_school: function (e) {
    var url = app.url;
    var that = this;
    wx.request({
      url: url + '/Index/driving_school',
      success: function (e) {
        if (e.data.error == 400) {
          that.setData({
            school_status: false,
            driving_school: e.data.info
          })
        } else if (e.data.error == 200) {
          // var data = JSON.stringify(e.data.data);
          that.setData({
            driving_school: e.data.data
          })
        }
      }
    })
  },
  kaochang() {
      wx.navigateTo({
        url: '../kaochang/index',
      })
  },
  jiaxiao() {
    wx.navigateTo({
      url: '../jiaxiao/index',
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