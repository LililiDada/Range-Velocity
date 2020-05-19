Page({


  data: {

  },

  onLoad: function(options) {

  },
  navigate() {
    wx.getLocation({ //获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
      success: function(res) {
        wx.openLocation({ //​使用微信内置地图查看位置。
          latitude: 23.1607655242, //要去的纬度-地址
          longitude: 113.2666718960, //要去的经度-地址
          name: "广州市白云区三元里松柏东街13号鸿丰商贸楼B栋305B",
          address: '广州市白云区三元里松柏东街13号鸿丰商贸楼B栋305B'
        })
      }
    })

  },
  navigateTO() {
    wx.getLocation({ //获取当前经纬度
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度，官方提示bug: iOS 6.3.30 type 参数不生效，只会返回 wgs84 类型的坐标信息  
      success: function(res) {
        wx.openLocation({ //​使用微信内置地图查看位置。
          latitude: 23.0961644786, //要去的纬度-地址
          longitude: 113.1070750952, //要去的经度-地址
          name: "佛山市南海区大沥镇广佛新干线旁钟边工业区1号广网大楼三层314",
          address: '佛山市南海区大沥镇广佛新干线旁钟边工业区1号广网大楼三层314'
        })
      }
    })
  },
  call() {
    wx.makePhoneCall({
      phoneNumber: '18928803680'
    })
  },
  calliphone() {
    wx.makePhoneCall({
      phoneNumber: '18928848309'
    })
  },
  callphone() {
    wx.makePhoneCall({
      phoneNumber: '18928803685'
    })
  },
  calltelephone(){
    wx.makePhoneCall({
      phoneNumber: '13822140164'
    })
  },
  onReady: function() {

  },

  onShow: function() {

  },


  onShareAppMessage: function() {
    return {
      title: '速程服务',
      path: '/pages/contact/contact',
      imageUrl: "/pages/contact/contact",
      success: (res) => {
        console.log("转发成功", res);
      },
      fail: (res) => {
        console.log("转发失败", res);
      }
    }
  }
})