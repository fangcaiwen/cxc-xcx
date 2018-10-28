// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    code:''
  },
  
  // 监听手机号输入
  listenPhoneInput:function(e){
    this.data.phone = e.detail.value;
  },

  // 监听验证码输入
  listenCodeInput: function(e){
    this.data.code = e.detail.value;
  },

  // 获取验证码
  getCodeEvent:function(e){
    wx.showToast({
      title: "验证码发送成功",
      duration: 1000,
      mask: true
    });
  },

  // 登录事件
  loginEvent:function(e){
    if (this.data.phone == "" || this.data.code == "") {
      wx.showToast({
        title: "用户名密码为空",
        duration: 1000,
        mask: true
      })
      return;
    }

    wx.showToast({
      title: "登录中...",
      duration: 1000,
      icon:'loading',
      mask: true
    })

    // wx.showToast({
    //   title: "登录成功",
    //   duration: 1000,
    //   mask: true
    // })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '登录'  //修改title
    });
     
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