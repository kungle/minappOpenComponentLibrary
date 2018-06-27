getApp();

var t, e, a = require("../../utils/stringUtil.js");

Component({
    properties: {
        avatar: {
            type: String,
            value: null
        },
        nickname: {
            type: String,
            value: null
        },
        awardMoney: {
            type: String,
            value: 0
        },
        positionStatus: {
            type: String,
            value: "fixed"
        },
        showShareModel: {
            type: Boolean,
            value: !1,
            observer: "_propertyChange"
        }
    },
    data: {
        detailStr: {
            invite: "学海无涯苦作舟",
            nickInvite: "蹦萨卡拉卡",
            bpbMini: "极客组件库演示小程序",
            clickToMini: "(啦啦啦啦啦啦啦)",
            awardContent: "我在北方的寒夜里四季如春"
        },
        awardStr: "你在南方的艳阳里",
        targetSharePath: null,
        QRPath: "../../image/geek-qr.jpg",
        avatarPath: null,
        canvasHeight: 0,
        imageWidth: 0,
        imageHeight: 0,
        realShow: !1
    },
    ready: function() {
        var a = this;
        wx.getSystemInfo({
            success: function(i) {
                t = i.windowWidth, e = 1.78 * i.windowWidth, a.setData({
                    canvasHeight: e,
                    imageWidth: .7 * t,
                    imageHeight: .7 * e
                });
            }
        });
    },
    methods: {
        _propertyChange: function(t, e) {
            t && this.shareMoments();
        },
        shareMoments: function() {
            var t = this;
            t.showLoading(), t.downloadAvatar();
        },
        showErrorModel: function(t) {
            this.hideLoading(), t || (t = "网络错误"), wx.showModal({
                title: "提示",
                content: t
            }), this.setData({
                showShareModel: !1
            });
        },
        showLoading: function() {
            wx.showLoading({
                title: "极客加载中..."
            });
        },
        hideLoading: function() {
            wx.hideLoading();
        },
        downloadAvatar: function() {
            var t = this;
            wx.downloadFile({
                url: t.data.avatar,
                success: function(e) {
                    t.setData({
                        avatarPath: e.tempFilePath
                    }), t.drawImage();
                },
                fail: function() {
                    t.showErrorModel("网络错误");
                }
            });
        },
        drawImage: function() {
            var i = this, n = wx.createCanvasContext("myCanvas", this);
            n.setFillStyle("#FFFFFF"), n.fillRect(0, 0, t, e), n.drawImage("../../image/share-award-bg.png", 0, 0, t, .6506 * e), 
            n.arc(t / 2, .1065 * t + .45 * e, .1065 * t + 2, 0, 2 * Math.PI), n.setFillStyle("#ffdb12"), 
            n.fill(), n.save(), n.beginPath(), n.arc(t / 2, .1065 * t + .45 * e, .1065 * t, 0, 2 * Math.PI), 
            n.setStrokeStyle("#ffdb12"), n.stroke(), n.clip();
            var s = .213 * t;
            if (n.drawImage(i.data.avatarPath, .3935 * t, .45 * e, s, s), n.restore(), n.setFillStyle("#747474"), 
            n.setFontSize(14), n.setTextAlign("center"), n.fillText(i.data.detailStr.clickToMini, t / 2, .97 * e), 
            i.setFontStyle(n, "bold"), n.setFillStyle("#333333"), n.setFontSize(16), n.setTextAlign("left"), 
            wx.canIUse("canvasContext.measureText")) {
                var o = n.measureText(a.substringStr(i.data.nickname));
                n.setFillStyle("#FF555C"), n.fillText(a.substringStr(i.data.nickname), .187 * t, .27 * e), 
                n.setFillStyle("#333333"), n.fillText(i.data.detailStr.nickInvite, .187 * t + o.width + 10, .27 * e);
            } else n.fillText(i.data.detailStr.invite, .187 * t, .27 * e);
            n.setFillStyle("#FFFFFF"), n.setFontSize(20), n.setTextAlign("center"), n.fillText(a.substringStr(i.data.nickname), .5 * t, .615 * e), 
            n.setFillStyle("#666666"), n.setFontSize(14), n.setTextAlign("left"), n.fillText(i.data.awardStr, .187 * t, .338 * e), 
            n.setFillStyle("#FF555C"), n.setFontSize(36), n.setTextAlign("left"), n.fillText(i.data.awardMoney, .51 * t, .34 * e), 
            n.setFillStyle("#666666"), n.setFontSize(16), n.setTextAlign("left"), n.fillText(i.data.detailStr.awardContent, .187 * t, .38 * e), 
            n.drawImage(i.data.QRPath, .3295 * t, .69 * e, .341 * t, .341 * t), n.setFillStyle("#333333"), 
            n.setFontSize(16), n.setTextAlign("center"), n.fillText(i.data.detailStr.bpbMini, t / 2, (.92 + .02) * e), 
            n.draw(!1, function() {
                i.saveCanvasImage();
            });
        },
        setFontStyle: function(t, e) {
            wx.canIUse("canvasContext.font") && (t.font = "normal " + e + " 14px sans-serif");
        },
        saveCanvasImage: function() {
            var t = this;
            wx.canvasToTempFilePath({
                canvasId: "myCanvas",
                success: function(e) {
                    console.log(e.tempFilePath), t.setData({
                        targetSharePath: e.tempFilePath,
                        realShow: !0
                    });
                    var a = {}, i = {};
                    t.triggerEvent("hideDialog", a, i);
                },
                complete: function() {
                    t.hideLoading();
                }
            }, this);
        },
        saveImageTap: function() {
            this.requestAlbumScope();
        },
        requestAlbumScope: function() {
            var t = this;
            wx.getSetting({
                success: function(e) {
                    e.authSetting["scope.writePhotosAlbum"] ? t.saveImageToPhotosAlbum() : wx.authorize({
                        scope: "scope.writePhotosAlbum",
                        success: function(e) {
                            t.saveImageToPhotosAlbum();
                        },
                        fail: function() {
                            wx.showModal({
                                title: "提示",
                                content: "你需要授权才能保存图片到相册",
                                success: function(e) {
                                    e.confirm && wx.openSetting({
                                        success: function(e) {
                                            e.authSetting["scope.writePhotosAlbum"] && t.saveImageToPhotosAlbum();
                                        },
                                        fail: function() {}
                                    });
                                }
                            });
                        }
                    });
                }
            });
        },
        saveImageToPhotosAlbum: function() {
            var t = this;
            wx.saveImageToPhotosAlbum({
                filePath: t.data.targetSharePath,
                success: function() {
                    wx.showModal({
                        title: "",
                        content: "✌️图片保存成功，\n快去分享到朋友圈吧",
                        showCancel: !1
                    }), t.hideDialog();
                }
            });
        },
        closeModel: function() {
            this.hideDialog();
        },
        hideDialog: function() {
            this.setData({
                realShow: !1,
                showShareModel: !1
            });
        }
    }
});