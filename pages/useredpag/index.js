// pages/useredpag/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      money: 10,
      ifmoney: 20,
      check: true,
      index:0
    }, {
      money: 5,
      ifmoney: 35,
      check: false,
      index:1 
    }],
    isUseRedPag:true
  },

  // 不使用红包事件
  doUseRedPagEvent:function(){
    this.changeListArray(-1);
    this.setData({
      isUseRedPag: false
    });
  },

  // 点击使用红包单项
  clickChooseEvent:function(e){
    var index = e.currentTarget.dataset.index;
    this.changeListArray(index);
  },

  // 更改数组check
  changeListArray:function(index){
    this.setData({
      isUseRedPag: true
    });
    var newArr = this.data.list.concat([]);
    for (var i = 0; i < newArr.length; i++) {
      if (i == index) {
        newArr[i].check = true;
      } else {
        newArr[i].check = false;
      }
    }
    this.setData({
      list: newArr
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '使用红包'  //修改title
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