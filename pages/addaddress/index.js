// pages/addaddress/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'',
    sex:1
  },

  // 选择性别
  clickChooseSex:function(e){
    var sex = e.currentTarget.dataset.sex;
    this.setData({
      sex:sex
    });
  },

  // 定位地址
  clickChooseAddress:function(e){
    try{
      var newAddress = wx.getStorageSync("locationAddress");
      if(newAddress){
        this.setData({
          address: newAddress
      });
    }
    }catch(e){

    }
  },

  // 提交事件
  submitEvent:function(){
    wx.showToast({
      title: '提交成功',
      icon: '',
      image: '',
      duration: 1000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '新增地址'  //修改title
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