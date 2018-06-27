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
        showShareModel: {
            type: Boolean,
            value: !1,
            observer: "_propertyChange"
        }
    },
    data: {
        detailStr: {
            tip: "canvas绘制,你值得拥有",
            content: "极客组件库极客组件库",
            contentOther: "canvas，canvas，canvas",
            bpbMini: "极客组件库演示小程序",
            clickToMini: "(长按进入学习)"
        },
        canvasHeight: 0,
        imageWidth: 0,
        imageHeight: 0,
        targetSharePath: null,
        QRPath: "../../image/geek-qr.jpg",
        avatarPath: null,
        realShow: !1
    },
    ready: function() {
        var a = this;
        wx.getSystemInfo({
            success: function(n) {
                t = n.windowWidth, e = 1.78 * n.windowWidth, a.setData({
                    canvasHeight: e,
                    imageWidth: .7 * t,
                    imageHeight: .7 * e
                });
            }
        });
    },
    methods: {
        _propertyChange: function(t, e) {
            console.log("_propertyChange----------\x3e" + t), t && (this.data.targetSharePath ? this.setData({
                realShow: !0
            }) : this.shareMoments());
        },
        shareMoments: function() {
            var t = this;
            t.data.targetSharePath ? t.setData({
                showShareModel: !0
            }) : (t.showLoading(), t.downloadAvatar());
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
                    t.showErrorModel();
                }
            });
        },
        drawImage: function() {
            var n = this, o = wx.createCanvasContext("myCanvas", this);
            o.setFillStyle("#FFFFFF"), o.fillRect(0, 0, t, e), o.drawImage("../../image/share-bg.png", 0, 0, t, .5 * e), 
            o.arc(t / 2, .184 * t + .117 * e, .184 * t + 4, 0, 2 * Math.PI), o.setFillStyle("#FFFFFF"), 
            o.fill(), o.save(), o.beginPath(), o.arc(t / 2, .184 * t + .117 * e, .184 * t, 0, 2 * Math.PI), 
            o.setStrokeStyle("#FFFFFF"), o.stroke(), o.clip();
            var i = .368 * t;
            o.drawImage(n.data.avatarPath, .316 * t, .117 * e, i, i), o.restore(), o.setFillStyle("#333333"), 
            o.setFontSize(18), o.setTextAlign("center"), o.fillText(n.data.detailStr.content, t / 2, .615 * e), 
            o.setFillStyle("#333333"), o.setFontSize(18), o.setTextAlign("center"), o.fillText(n.data.detailStr.contentOther, t / 2, .65 * e), 
            o.drawImage(n.data.QRPath, .3295 * t, .69 * e, .341 * t, .341 * t), console.log("font------------\x3e" + wx.canIUse("canvasContext.font")), 
            o.setFillStyle("#747474"), o.setFontSize(14), o.setTextAlign("center"), o.fillText(n.data.detailStr.clickToMini, t / 2, (.935 + .02) * e), 
            n.setFontStyle(o, "bold"), o.setFillStyle("#FFFFFF"), o.setFontSize(20), o.setTextAlign("center"), 
            o.fillText(a.substringStr(n.data.nickname), t / 2, .39 * e), o.setFillStyle("#FF555C"), 
            o.setFontSize(24), o.setTextAlign("center"), o.fillText(n.data.detailStr.tip, t / 2, .545 * e), 
            o.setFillStyle("#747474"), o.setFontSize(16), o.setTextAlign("center"), o.fillText(n.data.detailStr.bpbMini, t / 2, .93 * e), 
            o.draw(!1, function() {
                console.log("callback---------------\x3e"), n.saveCanvasImage();
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