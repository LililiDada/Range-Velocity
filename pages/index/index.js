//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    businessList: [{
      text: "注册公司",
      src: "../../images/icon/gongsi.png"
    } ,{
      text: "记账代理",
      src: "../../images/icon/jizhang.png"
    }, {
      text: "香港公司",
      src: "../../images/icon/xianggang.png"
    }, {
      text: "进出口权",
      src: "../../images/icon/jinchukou.png"
    }, {
      text: "税筹策划",
        src: "../../images/icon/shuiwu.png"
    }, {
      text: "场地出租",
      src: "../../images/icon/changdi.png"
    }, ]
  },

  onLoad: function() {

  },

  contact: function(e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
  },
  makephone: function(e) {
    wx.makePhoneCall({
      phoneNumber: '18928803680'
    })
  },
  callphone() {
    wx.makePhoneCall({
      phoneNumber: '18928848309'
    })
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
  onShareAppMessage: function() {
    return {
      title: '速程服务',
      path: '/pages/index/index',
      imageUrl: "/pages/index/index",
      success: (res) => {
        console.log("转发成功", res);
      },
      fail: (res) => {
        console.log("转发失败", res);
      }
    }
  }
})