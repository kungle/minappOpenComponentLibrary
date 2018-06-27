Page({
    data: {
        groupList: [ {
            pageTitle: "绘制",
            cellList: [ {
                name: "canvas 绘制演示",
                path: "../moment/index"
            } ]
        }, {
            pageTitle: "封装",
            cellList: [ {
                name: "canvas 封装演示",
                path: "../component-share/index"
            } ]
        } ]
    },
    onLoad: function(a) {},
    onShow: function() {},
    navigateListener: function(a) {
        wx.navigateTo({
            url: a.detail.cell.path
        });
    }
});