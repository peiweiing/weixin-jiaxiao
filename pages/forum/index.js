// pages/forum/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chakan:"0",
    arr:[
      { src: "../../img/quanbu.png", txt: "全部", url: "" },
      { src: "../../img/xiaoxizhongxin.png", txt: "招生素材", url: "" },
      { src: "../../img/kechengbaoming.png", txt: "报名", url: "" },
      { src: "../../img/fatie.png", txt: "发帖", url: "" },
    ],
    main:[
      { title: "大新县驾驶培训有限公司", ttsrc: "../../img/logo.png", h1: "大新科目一注意事项", text: "科目一、学员注意事项，各位学员请注意，下面宣读一些考生须知，请大家保持安静", time: "2019-12-12", butt: "考试须知", },
      { title: "大新县驾驶培训有限公司", ttsrc: "../../img/logo_1.png", h1: "大新科目一注意事项", text: "科目一、学员注意事项，各位学员请注意，下面宣读一些考生须知，请大家保持安静", time: "2019-12-12", butt: "考试须知", },
     
    ],
    icon:[
      { src: "../../img/xfenxiang.png", txt: "分享", url: "" },
      { src: "../../img/xchakan.png", txt: "275", url: "" },
      { src: "../../img/xpinglun.png", txt: "评论", url: "" },
      { src: "../../img/xshoucang.png", txt: "7", url: ""},
    ],
  },
  ondetails(){
    wx.navigateTo({
      url: '../details/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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