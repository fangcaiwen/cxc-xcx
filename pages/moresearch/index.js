// pages/moresearch/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectTab: "1",
  },
  // 点击商品单项事件
  clickSingleItemEvent: function (e) {
    wx.navigateTo({
      url: '../shopdetail/index',
    });
  },

  // 点击筛选按钮.当为综合排序的时候打开弹窗，其他都关闭弹窗
  getSelectEvent: function (e) {
    var self = this;
    this.setData({
      isShowModal: false,
      selectTab: e.currentTarget.dataset.kind
    });
    if (e.currentTarget.dataset.kind == "1") {
      self.setData({
        isShowModal: true
      });
    } else {
      this.loadingShopList();
    }
  },

  // 加载主页数据列表
  loadingShopList: function (e) {
    wx.showToast({
      title: "数据加载中...",
      duration: 1000,
      icon: 'loading',
      mask: true
    })
  },

  // 关闭弹窗
  closeModalEvent: function (e) {
    this.setData({
      isShowModal: false
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title = options.title||'更多筛选';
    wx.setNavigationBarTitle({
      title: title  //修改title
    });
    var self = this;
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight-40,
          windowWidth: res.windowWidth,
          modalHeight: res.windowHeight - 40,
        });
      },
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