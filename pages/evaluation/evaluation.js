// pages/evaluation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    

    tabArr: {
      curHdIndex: 0,
      curBdIndex: 0
    },

    age_array:[
      { id: 0, name: '--请选择--' },
      { id: 1, name: '25以下' },
      { id: 2, name: '25-30' },
      { id: 3, name: '30-35' },
      { id: 4, name: '35-40' },
      { id: 5, name: '40以上' },
    ],
    insureYear_array:[
      { id: 0, name: '--请选择--' },
      { id: 1, name: '一年以下' },
      { id: 2, name: '1-2年' },
      { id: 3, name: '3-4年' },
      { id: 4, name: '五年以上' },
    ],
    educationLevel_array: [
      { id: 0, name: '--请选择--' },
      { id: 1, name: '高中、中专及以下' },
      { id: 2, name: '非全日制大专' },
      { id: 3, name: '全日制大专' },
      { id: 4, name: '非全日制本科' },
      { id: 5, name: '全日制本科及以上' },
    ],
    enterEducationLevel: [
      { id: 0, name: '--请选择--' },
      { id: 1, name: '本科' },
      { id: 2, name: '专科' },
      { id: 3, name: '硕士及以上' },
    ],
    age_index: 0 ,
    insureYear_index:0,
    educationLevel_index: 0,
    enterEducationLevel: 0,
    //tab 切换
    currentTab: 0,
  },
  /** 
       * 滑动切换tab 
       */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },  
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },


  //tab 切换
  tab: function(e) {
    var dataId = e.currentTarget.id;
    var obj = {};
    obj.curHdIndex = dataId;
    obj.curBdIndex = dataId;
    this.setData({
      tabArr: obj
    })
  },

  //拨打电话
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '13631787532',
    })
  },

  bindPickerChange_age:function (e) {
    
    this.setData({ //给变量赋值
      age_index: e.detail.value, //每次选择了下拉列表内容的同时修改下标然后修改内容，显示的内容和显示的内容一致
    })
    
  },
  bindPickerChange_insureYear: function (e) {

    this.setData({ //给变量赋值
      insureYear_index: e.detail.value, //每次选择了下拉列表内容的同时修改下标然后修改内容，显示的内容和显示的内容一致
    })

  },
  bindPickerChange_educationLevel: function (e) {

    this.setData({ //给变量赋值
      educationLevel_index: e.detail.value, //每次选择了下拉列表内容的同时修改下标然后修改内容，显示的内容和显示的内容一致
    })

  },

  bindPickerChange_enterEducationLevel: function (e) {

    this.setData({ //给变量赋值
      enterEducationLevel_index: e.detail.value, //每次选择了下拉列表内容的同时修改下标然后修改内容，显示的内容和显示的内容一致
    })

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