define("components", ['jquery'], function (j) {
    return j.extend(this.prototype, {
        author: 'kangjun',
        insertStyle: function (s) {
            return (function (e) {
                const i = document, l = "appendChild", n = "styleSheet", a = i.createElement("style");
                i.getElementsByTagName("head")[0][l](a);
                a[n] ? a[n].cssText = e : a[l](i.createTextNode(e))
            })(s)
        },
        getEl: function (l) {
            const c = function (e) {
                return !!e.tagName;
            };
            if (l.el) {
                if (l.el instanceof jQuery && l.el.length > 0) {
                    this.$el = l.el
                } else if (c(l.el)) {
                    this.$el = j(l.el)
                } else if (typeof l.el == "string" && j(l.el).length > 0) {
                    this.$el = j(l.el)
                }
            } else {
                this.$el = j("<div></div>")
            }
            let id = l.el;
            id = id.replace(new RegExp("\\.", "g"), "_");
            id = id.replace(new RegExp("#", "g"), "_");
            id = id.replace(new RegExp("\\[", "g"), "_");
            id = id.replace(new RegExp("]", "g"), "_");
            id = id.replace(new RegExp("\\(", "g"), "_");
            id = id.replace(new RegExp("\\)", "g"), "_");
            l.id = id;
            if (l.type !== "checkbox") {
                l.type = "radio"
            }
            this.options = l;
            return this;
        }
    })
});