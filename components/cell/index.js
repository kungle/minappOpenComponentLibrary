Component({
    properties: {
        cellList: {
            type: Array,
            value: []
        }
    },
    data: {},
    methods: {
        cellTap: function(t) {
            console.log(t);
            var e = {
                cell: t.currentTarget.dataset.path
            }, a = {};
            this.triggerEvent("navigate", e, a);
        }
    }
});