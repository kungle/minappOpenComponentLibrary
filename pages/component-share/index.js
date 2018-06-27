Page({
    data: {
        shareOne: {
            avatar: "",
            nickname: "",
            showShareModel: !1
        },
        shareTwo: {
            avatar: "",
            nickname: "",
            incomeMoney: "",
            joinNumber: "",
            joinAvatarList: "",
            adImageUrl: "",
            adName: "",
            adTime: "",
            showShareModel: !1
        },
        shareThree: {
            avatar: "",
            nickname: "",
            awardMoney: "",
            showShareModel: !1
        }
    },
    onLoad: function(a) {},
    onShow: function() {},
    handleTapOne: function() {
        this.setData({
            shareOne: {
                avatar: "https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132",
                nickname: "极客学苑",
                showShareModel: !0
            }
        });
    },
    handleTapTwo: function() {
        this.setData({
            shareTwo: {
                avatar: "https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132",
                nickname: "stone",
                incomeMoney: "0",
                joinNumber: "0",
                joinAvatarList: [ "https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132", "https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132", "https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132", "https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132", "https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132" ],
                adImageUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2136187651,870864669&fm=27&gp=0.jpg",
                adName: "哈哈哈哈哈哈哈哈哈",
                adTime: "看看你最近改变",
                showShareModel: !0
            }
        });
    },
    handleTapThree: function() {
        this.setData({
            shareThree: {
                avatar: "https://wx.qlogo.cn/mmopen/vi_32/gcs9nfrPIjZSfZvMmVCK81MpPbWqDspNfc2lRLqllfrpYT61RQWNMHXCfzSia7OiapOfXTjYFR6EF7JQZib5MRCdA/132",
                nickname: "路人甲",
                awardMoney: "哈哈",
                showShareModel: !0
            }
        });
    }
});