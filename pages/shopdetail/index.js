// pages/shopdetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseKind:'1',
    hasSolcetion:false,
    foodKind:'0',
    scrollIntoViewId:'scrollViewId1',
    isShowShopCar:false,
    foodList:[
      {
        kindName:'热销商品',
        list:[
          {
            name:'叉烧拼烧鸭双拼饭',
            selllerMonth:200,
            score:'100%',
            price:35.98,
            buyNum:0,
            index:0,
            key:0
          },
          {
            name: '叉烧拼烧鸭双拼饭',
            selllerMonth: 200,
            score: '100%',
            price: 35.98,
            buyNum: 0,
            index: 1,
            key: 0
          }     
        ],
        index:0
      },
      {
        kindName: '老板推荐',
        list: [
          {
            name: '叉烧拼烧鸭双拼饭',
            selllerMonth: 200,
            score: '100%',
            price: 35.98,
            buyNum: 0,
            index: 0,
            key: 1
          },
          {
            name: '叉烧拼烧鸭双拼饭',
            selllerMonth: 200,
            score: '100%',
            price: 35.98,
            buyNum: 0,
            index: 1,
            key: 1
          }
        ],
        index: 1
      },
      {
        kindName: '实惠套餐',
        list: [
          {
            name: '叉烧拼烧鸭双拼饭',
            selllerMonth: 200,
            score: '100%',
            price: 35.98,
            buyNum: 0,
            index: 0,
            key: 2
          },
          {
            name: '叉烧拼烧鸭双拼饭',
            selllerMonth: 200,
            score: '100%',
            price: 35.98,
            buyNum: 0,
            index: 1,
            key: 2
          }
        ],
        index: 2
      },
      {
        kindName: '素菜',
        list: [
          {
            name: '叉烧拼烧鸭双拼饭',
            selllerMonth: 200,
            score: '100%',
            price: 35.98,
            buyNum: 0,
            index: 0,
            key: 3
          },
          {
            name: '叉烧拼烧鸭双拼饭',
            selllerMonth: 200,
            score: '100%',
            price: 35.98,
            buyNum: 0,
            index: 1,
            key: 3
          }
        ],
        index: 3
      },
      {
        kindName: '荤菜',
        list: [
          {
            name: '叉烧拼烧鸭双拼饭',
            selllerMonth: 200,
            score: '100%',
            price: 35.98,
            buyNum: 0,
            index: 0,
            key: 4
          },
          {
            name: '叉烧拼烧鸭双拼饭',
            selllerMonth: 200,
            score: '100%',
            price: 35.98,
            buyNum: 0,
            index: 1,
            key: 4
          }
        ],
        index: 4
      },
      {
        kindName: '主食',
        list: [
          {
            name: '叉烧拼烧鸭双拼饭',
            selllerMonth: 200,
            score: '100%',
            price: 35.98,
            buyNum: 0,
            index: 0,
            key: 5
          },
          {
            name: '叉烧拼烧鸭双拼饭',
            selllerMonth: 200,
            score: '100%',
            price: 35.98,
            buyNum: 0,
            index: 1,
            key: 5
          }
        ],
        index: 5
      },
      {
        kindName: '饮料',
        list: [
          {
            name: '叉烧拼烧鸭双拼饭',
            selllerMonth: 200,
            score: '100%',
            price: 35.98,
            buyNum: 0,
            index: 0,
            key: 6
          },
          {
            name: '叉烧拼烧鸭双拼饭',
            selllerMonth: 200,
            score: '100%',
            price: 35.98,
            buyNum: 0,
            index: 1,
            key: 6
          }
        ],
        index: 6
      }
    ],
    totalBuyFoodNum:0,
    totalBuyMoney:0,
    hasChooseFoodList:[
      {
      name:'叉烧拼烧鸭双拼饭',
      price:35.98,
      num:1
      }, {
        name: '金针菇',
        price: 5.98,
        num: 1
      },
      {
        name: '土豆',
        price: 2.98,
        num: 1
      },
      {
        name: '可乐',
        price: 4.98,
        num: 1
      }]
  },

  // 减少食物份数
  reduceNumEvent:function(e){
    var index = e.currentTarget.dataset.index;
    var key = e.currentTarget.dataset.key;
    var price = e.currentTarget.dataset.price;
    this.changeFoodListEvent(false, index, key, price);
  },

  // 增加食物份数
  addNumEvent:function(e){
    var index = e.currentTarget.dataset.index;
    var key = e.currentTarget.dataset.key;
    var price = e.currentTarget.dataset.price;
    this.changeFoodListEvent(true, index, key, price);
  },

  // 更改食物数组数据
  changeFoodListEvent: function (addTag, index, key, price){
    var newArr = this.data.foodList.concat([]);
    var foodObject = this.data.foodList[key].list[index];
    var buyNum = foodObject.buyNum;
    var newObject;
    if (addTag){
      newObject = Object.assign(foodObject,{ buyNum:buyNum+1});
    }else{
      if (buyNum==0){
        return;
      }
      newObject = Object.assign(foodObject, { buyNum: buyNum - 1 });
    }
    newArr[key].list.splice(index, 1, newObject);
    var totalBuyFoodNum = this.data.totalBuyFoodNum; 
    var totalBuyMoney = this.data.totalBuyMoney;
    var newtotalBuyMoney = addTag ? totalBuyMoney + price : totalBuyMoney - price;
    this.setData({
      foodList: newArr,
      totalBuyFoodNum: addTag ?  totalBuyFoodNum + 1 : totalBuyFoodNum - 1,
      totalBuyMoney: Math.round(newtotalBuyMoney*100)/100 ,
    });
  },

  // 右边菜滚动事件
  scrollSlideEvent:function(e){
    // console.log(e);
  },

  // 收藏事件
  solectionEvent:function(e){
    this.setData({
      hasSolcetion:true
    });
    wx.showToast({
      title: "收藏成功",
      duration: 1000,
      icon: 'success',
      mask: true
    })
  },

  // 点菜下面栏菜单事件
  chooseFoodKindEvent:function(e){
    this.setData({
      foodKind:e.currentTarget.dataset.foodkind,
      scrollIntoViewId: 'scrollViewId' + e.currentTarget.dataset.foodkind
    });
  },

  // 加载数据中...共同
  commonLoading:function(e){
    wx.showToast({
      title: "数据加载中",
      duration: 1000,
      icon: 'loading',
      mask: true
    })
  },

  // 确认订单
  clickGoToSureEvent:function(e){
    wx.navigateTo({
      url: '../surebook/index',
    })
  },

  // 点击选择菜单栏
  clickChooseEvent:function(e){
    var kind = e.currentTarget.dataset.kind;
    this.setData({
      chooseKind: kind
    });
  },

  // 点击购物车图标页面
  clickShopCarEvent:function(e){
    this.setData({
      isShowShopCar:true
    });
  },

  // 点击关闭弹窗
  closeModalEvent:function(e){
    this.setData({
      isShowShopCar: false
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '肯德基(上丰路店)'  //修改title
    });
    var self = this;
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          pixelRatio: res.pixelRatio,
          windowHeight: res.windowHeight-48,
          scrollwindowHeight: res.windowHeight-100,
          windowWidth: res.windowWidth,
          modalHeight: res.windowHeight,
          scrollpLwindowHeight: res.windowHeight-50
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