// pages/jiaxiao/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageurl1: "../../img/xiangxia.png",
    daindex1: 0,
    imageurl2: "../../img/xiangxia.png",
    daindex2: 0,
    imageurl3: "../../img/xiangxia.png",
    daindex3: 0,
    school_status: true
  },
  choosesort1: function (e) {
    if (this.data.daindex1 == 0) {
      this.setData({
        imageurl1: "../../img/xiangshang.png",
        daindex1: 1
      })
    } else {
      this.setData({
        imageurl1: "../../img/xiangxia.png",
        daindex1: 0
      })
    }
  },
  choosesort2: function (e) {
    if (this.data.daindex2 == 0) {
      this.setData({
        imageurl2: "../../img/xiangshang.png",
        daindex2: 1
      })
    } else {
      this.setData({
        imageurl2: "../../img/xiangxia.png",
        daindex2: 0
      })
    }
  },
  choosesort3: function (e) {
    if (this.data.daindex3 == 0) {
      this.setData({
        imageurl3: "../../img/xiangshang.png",
        daindex3: 1
      })
    } else {
      this.setData({
        imageurl3: "../../img/xiangxia.png",
        daindex3: 0
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdriving_school();
  },
  /*
     * 驾校
    */
  getdriving_school: function (e) {
    var that = this;
    var url = app.url;
    wx.request({
      url: url + '/Index/driving_school_all',
      success: function (e) {
        if (e.data.error == 200) {
          that.setData({
            school_res: e.data.data
          })
        } else if (e.data.error == 400) {
          that.setData({
            school_res: e.data.info,
            school_status: false
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