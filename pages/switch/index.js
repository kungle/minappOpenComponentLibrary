Page({
    data: {
        sync: {
            checked: !1
        },
        panelStr: "Switch"
    },
    onLoad: function(c) {},
    syncChange: function(c) {
        var e = c.detail;
        this.setData({
            "sync.checked": e.checked
        });
    }
});