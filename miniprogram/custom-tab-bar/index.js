// miniprogram/tab-bar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#2673e7",
    list: [{
      pagePath: "/views/index/index",
      iconPath: "/images/order.png",
      selectedIconPath: "/images/order-selected.png",
      text: "记账"
    },
    {
      pagePath: "/views/user/index",
      iconPath: "/images/user.png",
      selectedIconPath: "/images/user-selected.png",
      text: "我的"
    }
  ]
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

  },

  switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
  }
})