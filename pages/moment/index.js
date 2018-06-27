var t, e, a = require("../../utils/stringUtil.js");

Page({
    data: {
        detailStr: {
            tip: "canvas绘制,你值得拥有",
            content: "组件库极客组件库",
            contentOther: "canvas，canvas，canvas",
            bpbMini: "组件库演示小程序",
            clickToMini: "(开始学习)"
        },
        avatar4: "https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132",
        avatar: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2136187651,870864669&fm=27&gp=0.jpg",
        bgImage1: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2155967225,3553147031&fm=27&gp=0.jpg",
        nickname: "Geek",
        canvasHeight: 0,
        imageWidth: 0,
        imageHeight: 0,
        targetSharePath: null,
        QRPath: "../../image/geek-qr.jpg",
        avatarPath: null,
        realShow: !1
    },
    onLoad: function(a) {
        var n = this;
        wx.getSystemInfo({
            success: function(a) {
                t = a.windowWidth, e = 1.78 * a.windowWidth, n.setData({
                    canvasHeight: e,
                    imageWidth: .7 * t,
                    imageHeight: .7 * e
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    shareMemontListener: function() {
        this.shareMoments();
    },
    shareMoments: function() {
        var t = this;
        t.data.targetSharePath ? t.setData({
            realShow: !1
        }) : (t.showLoading(), t.downloadAvatar());
    },
    showErrorModel: function(t) {
        this.hideLoading(), t || (t = "网络错误"), wx.showModal({
            title: "提示",
            content: t
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
        var n = this, i = wx.createCanvasContext("myCanvas", this);
        i.setFillStyle("#FFFFFF"), i.fillRect(0, 0, t, e), i.drawImage("../../image/share-bg.png", 0, 0, t, .5 * e), 
        i.arc(t / 2, .184 * t + .117 * e, .184 * t + 4, 0, 2 * Math.PI), i.setFillStyle("#FFFFFF"), 
        i.fill(), i.save(), i.beginPath(), i.arc(t / 2, .184 * t + .117 * e, .184 * t, 0, 2 * Math.PI), 
        i.setStrokeStyle("#FFFFFF"), i.stroke(), i.clip();
        var o = .368 * t;
        i.drawImage(n.data.avatarPath, .316 * t, .117 * e, o, o), i.restore(), i.setFillStyle("#333333"), 
        i.setFontSize(18), i.setTextAlign("center"), i.fillText(n.data.detailStr.content, t / 2, .615 * e), 
        i.setFillStyle("#333333"), i.setFontSize(18), i.setTextAlign("center"), i.fillText(n.data.detailStr.contentOther, t / 2, .65 * e), 
        i.drawImage(n.data.QRPath, .3295 * t, .69 * e, .341 * t, .341 * t), console.log("font------------\x3e" + wx.canIUse("canvasContext.font")), 
        i.setFillStyle("#747474"), i.setFontSize(14), i.setTextAlign("center"), i.fillText(n.data.detailStr.clickToMini, t / 2, (.935 + .02) * e), 
        n.setFontStyle(i, "bold"), i.setFillStyle("#FFFFFF"), i.setFontSize(20), i.setTextAlign("center"), 
        i.fillText(a.substringStr(n.data.nickname), t / 2, .39 * e), i.setFillStyle("#FF555C"), 
        i.setFontSize(24), i.setTextAlign("center"), i.fillText(n.data.detailStr.tip, t / 2, .545 * e), 
        i.setFillStyle("#747474"), i.setFontSize(16), i.setTextAlign("center"), i.fillText(n.data.detailStr.bpbMini, t / 2, .93 * e), 
        i.draw(!1, function() {
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
                    realShow: !1
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
                                        e.authSetting["scope.writePhotosAlbum"] ? t.saveImageToPhotosAlbum() : console.log("用户未同意获取用户信息权限--------\x3esuccess");
                                    },
                                    fail: function() {
                                        console.log("用户未同意获取用户信息权限--------\x3efail");
                                    }
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
            realShow: !1
        });
    }
});