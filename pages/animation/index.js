Page({
    data: {
        groupList: [ {
            pageTitle: "翻转",
            cellList: [ {
                name: "rotateY 翻转动画",
                path: "../rotateY/index"
            } ]
        } ]
    },
    onLoad: function(t) {},
    navigateListener: function(t) {
        console.log(t), wx.navigateTo({
            url: t.detail.cell.path
        });
    }
});