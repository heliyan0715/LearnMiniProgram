// pages/home/home.js
//getApp()获取APP()产生的示例对象
//const app=getApp()
//const name = app.globalData.name
//const age = app.globalData.age


//注册一个page页面
//页面也有自己的生命周期
Page({
  //-----3.监听Wxml相关事件----
  handleGetuserInfo(event) {
    console.log(event)
  },
  handleviewClick() {
    console.log('哈哈哈被点击了')
  },
  /**
   * -----2.页面的初始化数据-----
   */
  data: {
    title: "哈哈哈",
    list: []
  },
  /**
   * -----1.生命周期函数--监听页面加载-----
   */
  //写法1:
  // onLoad: function(options) {},
  //写法2:
  onLoad() {
    //  console.log('onLoad')
    //wx.request({
    //url: 'http://123.207.32.32:8000/recommend',
    // success: (res) => {
    //console.log(res)
    //  const data = res.data.data.list;
    // this.setData({
    //   list: data
    // })
    //  }
    //})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },
  //------4.监听其他事件（监听页面的滚动、监听页面上拉触底、监听用户下拉刷新动作）----
  //监听页面的滚动
  onPageScroll() {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉刷新动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})