// pages/comment/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starList:[
      { 
        star: [true, true, true, true, true],
        score:'5.0'
      },
      {
        star: [true, true, true, true, true],
        score: '5.0'
      },
      {
        star: [true, true, true, true, true],
        score: '5.0'
      }
      ],
    remark:''
  },

  // 发表评价事件
  goToCommentEvent:function(){
    if(this.data.remark.length==0){
      wx.showToast({
        title: "请输入评价内容",
        duration: 1000,
        icon: 'loading',
        mask: true
      });
      return;
    }else{
      wx.showToast({
        title: "提交成功",
        duration: 1000,
        icon: 'success',
        mask: true
      });
    }
  },

  // 点击星星事件
  clickStarEvent:function(e){
    var index = e.currentTarget.dataset.index;
    var arrayIndex = e.currentTarget.dataset.array;
    var newFlagArr = [];
    var scoreNum = 0.0;
    for(var i=0;i<5;i++){
      if (i <= index){
        newFlagArr.push(true);
        ++scoreNum;
      }else{
        newFlagArr.push(false);
      }
    }
    var newArr = this.data.starList.concat([]);
    newArr.splice(arrayIndex, 1, { star: newFlagArr, score: scoreNum+'.0'});
    this.setData({
      starList: newArr,
    });

  },

  // textarea输入事件
  inputChangeEvent:function(e){
    var value = e.detail.value;
    this.setData({
      remark:value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '发表评价'  //修改title
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