// pages/shop/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://pfziknqzb.bkt.clouddn.com/banner@3x.png',
      'http://pfziknqzb.bkt.clouddn.com/banner2@3x.png',
      'http://pfziknqzb.bkt.clouddn.com/banner3@3x.png'
    ],
    homeBtns:[
      {},
      {}
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    navFixed:false,// 导航是否固定,
    navScrollViewHeight:0,
    scrollIntoViewId:'topView',//滚动条的位置
    modalHeight:0,
    isShowModal:false,
    selectTab:"1",
    addressLocation:'上海市浦东新区秀沿路2580弄'
  },
  // 点击搜索按钮事件
  clickSearchBtnEvent:function(e){
    wx.navigateTo({
      url: '../search/index',
    });
  },

  // 页面滚动事件
  scrollSlideEvent:function(e){
    if(e.detail.scrollTop>361){
      this.setData({
        navFixed:true,
        navScrollViewHeight: e.detail.scrollTop
      });
    }else{
      this.setData({
        navFixed: false,
        navScrollViewHeight: e.detail.scrollTop
      });
    }
  },

  // 点击筛选按钮跳转到顶部
  getSelectEvent:function(e){
    var self=this;
    this.setData({
      scrollIntoViewId:'selectViewId',
      isShowModal: false,
      selectTab: e.currentTarget.dataset.kind
    });
    if(e.currentTarget.dataset.kind=="1"){
      if (this.data.navScrollViewHeight>361){
        self.setData({
          isShowModal: true
        });
      }else{
        setTimeout(function () {
          self.setData({
            isShowModal: true
          });
        }, 300);
      }
    }else{
      this.loadingShopList();
    }
  },

  // 轮播图点击事件
  clickLunBoEvent:function(e){
    var title = e.currentTarget.dataset.title||'轮播图';
    wx.navigateTo({
      url: '../moresearch/index?title=' + title,
    });

  },

  // 加载主页数据列表
  loadingShopList:function(e){
    wx.showToast({
      title: "数据加载中...",
      duration: 1000,
      icon: 'loading',
      mask: true
    })
  },

  // 关闭弹窗
  closeModalEvent:function(e){
    this.setData({
      isShowModal: false
    });
  },

  // 点击商品单项事件
  clickSingleItemEvent:function(e){
    wx.navigateTo({
      url: '../shopdetail/index',
    });
  },

  // 定位
  getLocationEvent:function(){
    wx.showToast({
      title: "定位中",
      duration: 1000,
      icon: 'loading',
      mask: true
    })
    var self = this;
    wx.getLocation({
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude//维度
        var longitude = res.longitude//经度
        console.log(res);
        var locationString = res.latitude + "," + res.longitude;
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + locationString +'&key=7G2BZ-V53AS-MVGOX-6LTHX-45RCF-HWBZF&get_poi=1',
          method: 'GET',
          // header: {}, 
          success: function (res2) {
            // success
            self.setData({
              addressLocation: res2.data.result.address
            });
            try{
              wx.setStorageSync("locationAddress", res2.data.result.address);
            }catch(e){}
            console.log("请求数据:" + res2.data.result.address);
          },
          fail: function () {
            // fail
            console.log("请求失败");
          },
          complete: function () {
            // complete
            console.log("请求完成");
          }
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth,
          modalHeight: res.windowHeight-40,
        });
      },
    });
    this.getLocationEvent();
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