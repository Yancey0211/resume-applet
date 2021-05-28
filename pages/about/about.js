// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 添加个人微信
  showQrcode: function() {
    wx.previewImage({
      current: 'http://yancey.test.upcdn.net/d9d4f1a53b47c6711e9c079d70f8ca0.jpg', // 当前显示图片的http链接
      urls: ['http://yancey.test.upcdn.net/d9d4f1a53b47c6711e9c079d70f8ca0.jpg'] // 需要预览的图片http链接列表
    })
  },

  // 拨打电话
  phoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: '17608474984',
      complete: (res) => {},
      fail: (res) => {},
      success: (res) => {},
    })
  },

  // 保存通讯录
  saveContact: function() {
    wx.addPhoneContact({
      firstName: 'Yancey',
      remark: '前端工程师',
      mobilePhoneNumber: '17608474984',
      weChatNumber: 'Yancey',
      organization: '身所科技',
      title: '前端开发工程师'
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