// pages/cultule/cultule.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverList: [{
      title: "小规模记账",
      src: "../../images/icon/account.png",
      branch_1: "合法纳税 降低成本",
      branch_2: "财税预警 简易自查"
    }, {
      title: "一般纳税人记账",
        src: "../../images/icon/jizhang.png",
      branch_1: "掌握行业动态",
        branch_2: "减税免税 实时把控"
    }, {
        title: "一般纳税人申请",
        src: "../../images/icon/shenqing.png",
        branch_1: "资深团队 全程代理",
        branch_2: "高通过率 安全无忧"
      }, {
        title: "会计到家",
        src: "../../images/icon/kuaiji.png",
        branch_1: "企业专属 财税管家",
        branch_2: "一年帮你赚6万"
      }, {
        title: "进出退税",
        src: "../../images/icon/jinchukou.png",
        branch_1: "简单下单 降低成本",
        branch_2: "快速退税 全新体验"
      }, {
        title: "审计报告",
        src: "../../images/icon/shenji.png",
        branch_1: "专业分析 全程跟进",
        branch_2: "出具公司审计报告"
      }, {
        title: "公司注册",
        src: "../../images/icon/gongsi.png",
        branch_1: "足不出户 轻松办理",
        branch_2: "服务进度 实时掌控"
      }, {
        title: "公司变更",
        src: "../../images/icon/qiye.png",
        branch_1: "精简流程 简单快速",
        branch_2: "专人对接 高效详细"
      }, {
        title: "商标申请",
        src: "../../images/icon/shangbiao.png",
        branch_1: "当天报送材料",
        branch_2: "风险评估 高通过率"
      }, {
        title: "财税咨询",
        src: "../../images/icon/caishui.png",
        branch_1: "专业解答财税疑问",
        branch_2: "上户调查 全程指导"
      }, {
        title: "财税筹划",
        src: "../../images/icon/chouhua.png",
        branch_1: "项目确定 方案设计",
        branch_2: "方案实施 跟踪服务"
      }, {
        title: "许可证办理",
        src: "../../images/icon/xukezheng.png",
        branch_1: "专业分析 全程跟进",
        branch_2: "出具公司审计报告"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
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
    return {
      title: '速程服务',
      path: '/pages/cultule/cultule',
      imageUrl: "/pages/cultule/cultule",
      success: (res) => {
        console.log("转发成功", res);
      },
      fail: (res) => {
        console.log("转发失败", res);
      }
    }
  }
})