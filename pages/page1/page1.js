Page({
  
  data: {
    items: [
      { name: 'piano', value: '钢琴' },
      { name: 'pure', value: '纯音乐'},
      { name: 'nature', value: '白噪音' },
  
    ]
  },
  
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }
})
