Page({
    data: {
        showFront: !0
    },
    onLoad: function(t) {},
    animationListener: function() {
        this.setData({
            showFront: !this.data.showFront
        });
    }
});