getApp();

var t, e, a = require("../../utils/stringUtil.js");

Component({
    properties: {
        avatar: {
            type: String,
            value: null
        },
        incomeMoney: {
            type: Number,
            value: 0
        },
        nickname: {
            type: String,
            value: ""
        },
        joinNumber: {
            type: Number,
            value: 0
        },
        joinAvatarList: {
            type: Array,
            value: []
        },
        adImageUrl: {
            type: String,
            value: null
        },
        adName: {
            type: String,
            value: ""
        },
        adTime: {
            type: String,
            value: ""
        },
        showShareModel: {
            type: Boolean,
            value: !1,
            observer: "_propertyChange"
        }
    },
    data: {
        detailStr: {
            invite: "在疯狂打call",
            bpbMini: "极客组件库演示小程序",
            clickToMini: "(啦啦啦啦啦)",
            incomeTitle: "饿呃呃呃：",
            timeTitle: "好久不见：",
            joinTitle: "哈哈哈"
        },
        targetSharePath: null,
        QRPath: "../../image/geek-qr.jpg",
        avatarPath: null,
        adPath: null,
        joinPathList: [],
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
            t && (this.data.targetSharePath ? this.setData({
                realShow: !0
            }) : this.shareMoments());
        },
        shareMoments: function() {
            var t = this;
            t.showLoading(), t.downloadAvatar();
        },
        downloadAvatar: function() {
            var t = this;
            wx.downloadFile({
                url: t.data.avatar,
                success: function(e) {
                    t.setData({
                        avatarPath: e.tempFilePath
                    }), t.downloadAdImage();
                },
                fail: function() {
                    t.showErrorModel();
                }
            });
        },
        downloadAdImage: function() {
            var t = this, e = t.data.adImageUrl;
            -1 != e.indexOf("http:") && (e = e.replace("http:", "https:")), t.setData({
                adImageUrl: e
            }), wx.downloadFile({
                url: t.data.adImageUrl,
                success: function(e) {
                    t.setData({
                        adPath: e.tempFilePath
                    }), t.data.joinAvatarList && 0 != t.data.joinAvatarList.length ? t.downloadJoinAvatarList() : t.drawCanvas();
                },
                fail: function() {
                    t.showErrorModel();
                }
            });
        },
        downloadJoinAvatarList: function() {
            var t = this;
            t.data.joinAvatarList.length > 7 && t.setData({
                joinAvatarList: t.data.joinAvatarList.slice(0, 7)
            });
            var e = 0, a = [], i = !0, n = !1, l = void 0;
            try {
                for (var o, s = t.data.joinAvatarList[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
                    var r = o.value;
                    -1 != r.indexOf("http:") && (r = r.replace("http:", "https:")), wx.downloadFile({
                        url: r,
                        success: function(t) {
                            a.push(t.tempFilePath);
                        },
                        complete: function() {
                            ++e == t.data.joinAvatarList.length && (t.setData({
                                joinPathList: a
                            }), t.drawCanvas());
                        }
                    });
                }
            } catch (t) {
                n = !0, l = t;
            } finally {
                try {
                    !i && s.return && s.return();
                } finally {
                    if (n) throw l;
                }
            }
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
        drawCanvas: function() {
            var i = this, n = wx.createCanvasContext("myCanvas", this);
            n.setFillStyle("#FFFFFF"), n.fillRect(0, 0, t, e), n.drawImage(i.data.adPath, 0, .06 * e, t, .315 * e), 
            n.save(), n.beginPath(), n.arc(.0533 * t + .085 * t * .5, .0425 * t + .006 * e, .0425 * t, 0, 2 * Math.PI), 
            n.setStrokeStyle("#FFFFFF"), n.stroke(), n.clip();
            var l = .085 * t;
            if (n.drawImage(i.data.avatarPath, .0533 * t, .006 * e, l, l), n.restore(), n.setFillStyle("#747474"), 
            n.setFontSize(14), n.setTextAlign("center"), n.fillText(i.data.detailStr.clickToMini, t / 2, .97 * e), 
            n.setFillStyle("#666666"), n.setFontSize(16), n.setTextAlign("left"), n.fillText(i.data.detailStr.incomeTitle, .06 * t, .5 * e), 
            n.setFillStyle("#666666"), n.setFontSize(16), n.setTextAlign("left"), n.fillText(i.data.detailStr.timeTitle, .06 * t, .54 * e), 
            n.setFillStyle("#666666"), n.setFontSize(16), n.setTextAlign("left"), n.fillText(i.data.adTime, .28 * t, .54 * e), 
            n.setFillStyle("#666666"), n.setFontSize(16), n.setTextAlign("left"), n.fillText(i.data.detailStr.joinTitle, .06 * t, .62 * e), 
            n.setFillStyle("#666666"), n.setFontSize(12), n.setTextAlign("left"), n.fillText(i.data.joinNumber + "人", .08 * t, .645 * e), 
            n.setFillStyle("#666666"), n.setFontSize(16), n.setTextAlign("left"), wx.canIUse("canvasContext.measureText")) {
                var o = n.measureText(a.substringStr(i.data.nickname));
                n.fillText(i.data.detailStr.invite, .165 * t + o.width + 10, .04 * e);
            } else n.fillText(i.data.detailStr.invite, .7 * t, .04 * e);
            i.setFontStyle(n, "bold", "16px"), n.setFillStyle("#333333"), n.setFontSize(20), 
            n.setTextAlign("left"), n.fillText(i.data.adName, .06 * t, .42 * e), n.setStrokeStyle("#DDDDDD"), 
            n.setLineDash([ 10, 20 ], 5), n.moveTo(.06 * t, .451 * e), n.lineTo(.94 * t, .451 * e), 
            n.stroke(), n.setFillStyle("#FF555C"), n.setFontSize(16), n.setTextAlign("left"), 
            n.fillText(a.substringStr(i.data.nickname), .165 * t, .04 * e), n.setFillStyle("#FF555C"), 
            n.setFontSize(24), n.setTextAlign("left"), n.fillText(0 == i.data.incomeMoney ? "300+" : i.data.incomeMoney + "元", .28 * t, .502 * e), 
            n.setFillStyle("#F7F7F7"), n.fillRect(0, .661 * e, t, .015 * e), n.setStrokeStyle("#DDDDDD"), 
            n.setLineDash([ 10, 5 ], 5), n.moveTo(.06 * t, .571 * e), n.lineTo(.94 * t, .571 * e), 
            n.stroke(), n.drawImage(i.data.QRPath, .3295 * t, .69 * e, .341 * t, .341 * t), 
            n.setFillStyle("#333333"), n.setFontSize(16), n.setTextAlign("center"), n.fillText(i.data.detailStr.bpbMini, t / 2, (.92 + .02) * e);
            for (var s in i.data.joinPathList) {
                var r = i.data.joinPathList[s], d = .04 * t, h = .25 * t + .08 * t * s + .013 * t * s, c = .602 * e;
                n.drawImage(r, h, c, 2 * d, 2 * d);
            }
            n.draw(!1, function(t) {
                console.log(t), i.saveCanvasImage();
            });
        },
        setFontStyle: function(t, e, a) {
            wx.canIUse("canvasContext.font") && (t.font = "normal " + e + " " + a + " sans-serif");
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
                showShareModel: !1,
                realShow: !1
            });
        }
    }
});