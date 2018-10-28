// pages/redpag/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      money:5,
      ifmoney:20,
      use:true,
      text:'去使用'
    },{
        money: 10,
        ifmoney: 35,
        use: true,
        text: '去使用'
      },{
        money: 3.8,
        ifmoney: 20,
        use: false,
        text: '已使用'
      },{
        money: 5.1,
        ifmoney: 20,
        use: false,
        text: '已过期'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的红包'  //修改title
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