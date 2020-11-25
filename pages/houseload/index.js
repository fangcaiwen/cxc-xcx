// pages/houseload/index.js
import LoadHelper from "../../utils/loadHelper.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    capitalValue:'410000'*1,
    ratioValue:'5.39'/100,
    monthValue:'30'*12,
    startDate:'2018-04-27',
    list:[],
    list2:[]
  },

  // 本金输入
  listenCaptialInput:function(e){
    this.data.capitalValue = e.detail.value;
  },

  // 利率输入
  listenRatioValueInput:function(e){
    this.data.ratioValue = e.detail.value/100;
  },

  // 贷款年限
  listenMonthValueInput:function(e){
    this.data.monthValue = e.detail.value*12;
  },

  // 起息日
  listenStartDateInput:function(e){
    this.data.startDate = e.detail.value;
  },

  // 计算本金利息
  captialBtnEvent:function(){
    if(this.data.capitalValue==""||this.data.ratioValue==""||this.data.monthValue==""||this.data.startDate==""){
      wx.showToast({
        title: "请填写完整",
        duration: 1000,
        mask: true,
        icon:'none'
      });
      return;
    }

    const {capitalValue,monthValue,ratioValue,startDate} = this.data;

    let mLoadHelper = new LoadHelper(capitalValue,monthValue,ratioValue,startDate);
    // 月供
    let monthPay = mLoadHelper.getMonthPay();

    let totalList = [];

    for(let i=1;i<=monthValue;i++){
      // 每期数据
      let itemData = {};
      itemData.index=`第${i}期`;
      itemData.captialData = mLoadHelper.payTotalCapital(i).toFixed(2);
      itemData.ratioData = mLoadHelper.payTotalRation(i).toFixed(2);
      itemData.reCaptialMoney = mLoadHelper.needPayCaptial(i).toFixed(2);
      totalList.push(itemData);  
    }

    this.setData({
      list:totalList,
      list2:[]
    });

    wx.showToast({
      title: `月供为:${monthPay.toFixed(2)}`,
      duration: 3000,
      mask: true,
    });
  },


  // 计算月供明细
  monthPayBtnEvent:function(){
    if(this.data.capitalValue==""||this.data.ratioValue==""||this.data.monthValue==""||this.data.startDate==""){
      wx.showToast({
        title: "请填写完整",
        duration: 1000,
        mask: true,
        icon:'none'
      });
      return;
    }

    const {capitalValue,monthValue,ratioValue,startDate} = this.data;

    let mLoadHelper = new LoadHelper(capitalValue,monthValue,ratioValue,startDate);
    // 月供
    let monthPay = mLoadHelper.getMonthPay();

    let totalList = [];

    for(let i=1;i<=monthValue;i++){
      // 每期数据
      let itemData = {};
      itemData.index=`第${i}期`;
      itemData.captialData = mLoadHelper.getPayNMonthMoney(i).toFixed(2);
      itemData.ratioData = mLoadHelper.getPayNMonthRation(i).toFixed(2);
      if(i==1){
        itemData.reCaptialMoney = (itemData.captialData*1+itemData.ratioData*1).toFixed(2);
      }else{
        itemData.reCaptialMoney = monthPay.toFixed(2);
      }
      
      totalList.push(itemData);  
    }

    this.setData({
      list2:totalList,
      list:[]
    });

    wx.showToast({
      title: `月供为:${monthPay.toFixed(2)}`,
      duration: 3000,
      mask: true,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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