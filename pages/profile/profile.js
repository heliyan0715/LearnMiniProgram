// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"Ms He",
    wellcome:"欢迎您！",
    age:"18",
    students: [
       {name:"张晓楠", age:20, sex:"女"},
      { name: "琉古偶", age: 18, sex:  "女"},
      { name: "马天宇", age: 25, sex:  "男"},
      { name: "李总贤", age: 20, sex: "男"}],
      counter:0
  },
  handaddClick(){
this.setData({
  counter:this.data.counter+1
})
  },
  handsubClick(){
this.setData({
  counter:this.data.counter-1
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