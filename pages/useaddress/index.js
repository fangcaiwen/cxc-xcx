// pages/useaddress/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      address: '浦东新区卡园三路58号',
      name: '徐小姐(女士)',
      phone: '13654789654',
      choose: true,
      check:true,
      index:0
    }, {
      address: '浦东新区紫薇路750弄52号501',
      name: '徐小姐(女士)',
      phone: '13654789654',
      choose: true,
      check:false,
      index:1
    }]
  },

  // check点击事件
  checkClickEvent:function(e){
    var index = e.currentTarget.dataset.index;
    var newArr = this.data.list.concat([]);
    for(var i=0;i<newArr.length;i++){
      if (i == index){
        newArr[i].check = true; 
      }else{
        newArr[i].check = false; 
      }
    }
    this.setData({
      list: newArr
    });
  },

  // 增加地址
  clickToAddAddress:function(e){
    wx.navigateTo({
      url: '../addaddress/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '收货地址'  //修改title
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