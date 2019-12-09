Page({

  data:{
    mood:"",
    positive:"",
    negative:"",
  },


getMood: function(e)
{
  
    var text=e.detail.value
    this.setData({
      mood:text
    })
    console.log(this.data.mood)
    },



jump: function () {
    
    wx.navigateTo({
      url: '../aa/aa',
      success: function (res) {

      },
      fail: function (res) {

      },
      complete: function (res) {

      },
    })
  },



get: function (e) {
    var that = this;
    var mood=this.data.mood;
    var access_token = that.data.access_token;
  
  
    
    wx.request({
      url: 'https://aip.baidubce.com/rpc/2.0/nlp/v1/sentiment_classify_custom?access_token=' + access_token,
      method: 'POST',
      data: {
        text: mood,
      },
      header: {
        'Content-Type': 'application/json',
        
      },
      success: function (res) {
        console.log(res.data) //可以看到返回的json格式数据
        var pos = res.data.items[0].positive_prob
        var neg = res.data.items[0].negative_prob
        that.setData({
          postive:pos,
          negative:neg
        })
      }
    })
    
    },
upload: function () {
    var that = this;
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=I6MNb7sw7C7bSeImDQtj6SSP&client_secret=rMhvCFx3x5YBW7stx8rm0QMwprt28OFA&',
      method: 'post',
      success: function (res) {
        console.log(res.data.access_token) //可以看到返回的json格式数据
        that.setData({ access_token: res.data.access_token })
      }
    })
  },



  
  
})
