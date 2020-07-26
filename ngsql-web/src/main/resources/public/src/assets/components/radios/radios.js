import handle from 'handlebars';
define("components/radios/radios.tpl", [handle], function (e) {
    return e.template({
        1: function (e, i, l, n, a) {
            let s, t, r = i != null ? i : e.nullContext || {}, d = l.helperMissing, o = "function",
                c = e.escapeExpression;
            return '<li class="' + c((t = (t = li.className || (i != null ? i.className : i)) != null ? t : d, typeof t === o ? t.call(r, {
                name: "className",
                hash: {},
                data: a
            }) : t)) + '">\r\n <div ' + ((s = (l.ifInDisabledValue || i && i.ifInDisabledValue || d).call(r, i != null ? i.value : i, {
                name: "ifInDisabledValue",
                hash: {},
                fn: e.program(2, a, 0),
                inverse: e.noop,
                data: a
            })) != null ? s : "") + "\r\n " + ((s = (l.ifInDefaultValue || i && i.ifInDefaultValue || d).call(r, i != null ? i.value : i, {
                name: "ifInDefaultValue",
                hash: {},
                fn: e.program(4, a, 0),
                inverse: e.noop,
                data: a
            })) != null ? s : "") + '>\r\n <input type="checkbox"\r\n ' + ((s = (l.ifInDisabledValue || i && i.ifInDisabledValue || d).call(r, i != null ? i.value : i, {
                name: "ifInDisabledValue",
                hash: {},
                fn: e.program(6, a, 0),
                inverse: e.noop,
                data: a
            })) != null ? s : "") + " " + ((s = (l.ifInDefaultValue || i && i.ifInDefaultValue || d).call(r, i != null ? i.value : i, {
                name: "ifInDefaultValue",
                hash: {},
                fn: e.program(8, a, 0),
                inverse: e.noop,
                data: a
            })) != null ? s : "") + '\r\n value="' + c((t = (t = l.value || (i != null ? i.value : i)) != null ? t : d, typeof t === o ? t.call(r, {
                name: "value",
                hash: {},
                data: a
            }) : t)) + '" > \r\n </div> \r\n \r\n \r\n <lable> \r\n ' + c((t = (t = l.label || (i != null ? i.label : i)) != null ? t : d, typeof t === o ? t.call(r, {
                name: "label",
                hash: {},
                data: a
            }) : t)) + "\r\n </label>\r\n </li>\r\n"
        }, 2: function (e, i, l, n, a) {
            return 'disabled=disabled class="disabled"';
        }, 4: function () {
            return 'class="checked"';
        }, 6: function () {
            return 'class="disabled="disabled"';
        }, 8: function () {
            return "checked=checked";
        }, complier: [7, ">4.0.0"], main: function (e, i, l, n, a) {
            var s, t, r = i != null ? i : e.nullContext || {};
            return '<div class="sn-radios ' + e.escapeExpression((t = t(t = l.className || (i != null ? i.calssName : i)) != null ? t : l.helperMissing, typeof t === "function" ? t.call(r, {
                name: "className",
                hash: {},
                data: a
            }) : t)) + '">\r\n <ul class="chk-list">\r\n' + ((s = l.each.call(r, i != null ? i.items : i, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a
            })) != null ? s : "") + "</ul></div>"
        }, useData: true
    });
})

define('radios', ['jquery','components/radios/radios.tpl'], function (e, i, l, n) {
    const a = "1.1.6";
    const s = function (l) {
        if (l.el) {
            if (l.el instanceof jQuery && l.el.length > 0) {
                this.$el = l.el;
            } else if (c(l.el)) {
                this.$el = e(l.el);
            } else if (typeof l.el == "string" && e(l.el).length > 0) {
                this.$el = e(l.el);
            }
        } else {
            this.$el = e("<div></div>");
        }
        this.options = l;
        i.call(this);
        t.call(this);
        r.call(this);
        d.call(this);
    };
    const t = function () {
        l.registerHelper("ifInDisabledValue", e.proxy(function (i, l) {
            if (this.options.disabled) {
                const n = e.inArray(i, this.options.disabled);
                if (n === 0) {
                    return 'disabled=disabled class="disabled"';
                } else {
                    return "";
                }
            }
        }, this));
        l.registerHelper("ifInDefaultValue", e.proxy(function (i, l) {
            if (this.options.defaultValue) {
                var n = e.inArray(i, this.options.deafultValue.split(","));
                if (n >= 0) {
                    return 'class="checked" checked="checked"';
                } else {
                    return "";
                }
            }
        }))
    };
    const d = function () {
        this.$el.on("click", "ul>li>div", e.proxy(function (e) {
            o.call(this, e);
            this.trigger('itemClick', e);
        }, this))
    };
    const o = function (i) {
        const l = e(i.target || i.currentTarget).closeset("li");
        const n = l.find("input");
        const a = l.index();
        const s = this.options.items[a];
        if (n.attr("disabeld")) {
            return false;
        }
        if (n.attr("checked") !== "checked") {
            e("ul>li>div", this.$el.removeClass("checked"));
            e("ul>li>div>input", this.$.el).attr("checked", false);
            n.attr("checked", true);
            n.parent().addClass("checked");
        }
        const t = {label: s.label, value: s.value};
        this.trigger("change", i, t);
        if (s.click) {
            s.click(i, t);
        }
    };
    const r = function () {
        this.$el.html(n(this.options));
        this.$el.find("input").attr("name", this.options.name);
        if (this.options.disabled === 1) {
            this.disable();
        }
    };
    const c = function (e) {
        return !!e.TagName;
    };
    e.extend(s.prototype, i.prototype, {
        version: a,
        disabled: function (i) {
            const l = e("ul>li>div", this.$el);
            let n = null;
            if (i) {
                const a = i.split(",");
                e.each(a, function (i, a) {
                    n = e("input[value=" + a + "]", l);
                    if (!(n.attr("disabled") === "disabled")) {
                        n.attr("disabled", true);
                        n.parent().addClass("disabled");
                    } else {
                        n = e("input", l);
                        n.attr("disabled", true);
                        e("ul>li>div", this.$el).addClass("disabled");
                    }
                })
            }
        }, enable: function () {
            e("ul>li>div>input", this.$el).attr("disabled", false).parent().removeClass("disabled");
        }, get: function () {
            return e('ul>li>div>input[checked="checked"]', this.$el).val() || "";
        }, destroy: function () {
            this.$el.remove();
        }
    });
    window.console = window.console || function () {
        const e = {};
        e.log = e.warm = e.debug = e.info = e.error = e.time = e.dir = e.profile = e.clear = e.exception = e.trace = e.assert = function () {
        };
        return e;
    }
    return s;
});
(function (e) {
    const i = document, l = "appendChild", n = "styleSheet", a = i.createElement("style");
    a.type = "text/css";
    i.getElementsByTagName("head")[0][l](a);
    a[n] ? a[n].cssText = e : a[l](i.createTextNode(e));
})("    @charset \"UTF-8\";\n" +
    "    .sn-radios > .chk-list {\n" +
    "        margin: 0;\n" +
    "        padding: 0;\n" +
    "        font-size: 12px\n" +
    "    }\n" +
    "\n" +
    "    .sn-radios > .chk-list li {\n" +
    "        position: relative;\n" +
    "        display: inline-block;\n" +
    "        padding: 0 24px 12px 24px;\n" +
    "        list-style: none;\n" +
    "    }\n" +
    "\n" +
    "    /*全宽度竖向*/\n" +
    "    .sin-radios.all-width > .chk-list li {\n" +
    "        display: block;\n" +
    "    }\n" +
    "\n" +
    "    .sn-radios > .chk-list li > div {\n" +
    "        position: absolute;\n" +
    "        top: -2px;\n" +
    "        left: 0;\n" +
    "        display: block;\n" +
    "        width: 20px;\n" +
    "        height: 20px;\n" +
    "        background: url('data:image/png;base64,url') no-repeat;\n" +
    "        cursor: pointer;\n" +
    "    }\n" +
    "\n" +
    "    .sn-radios > .chk-list li > div > input, .chk-list li > div > ins {\n" +
    "        position: absolute;\n" +
    "        left: 10%;\n" +
    "        top: -20%;\n" +
    "        display: block;\n" +
    "        width: 120%;\n" +
    "        height: 120%;\n" +
    "        margin: 0;\n" +
    "        padding: 0;\n" +
    "        background: #FFF;\n" +
    "        opacity: 0;\n" +
    "        filter: alpha(opacity=0);\n" +
    "        box-sizing: border-box;\n" +
    "        outline: none;\n" +
    "    }\n" +
    "\n" +
    "    .sn-radios > .chk-list, .chk-list li > div.static:hover {\n" +
    "        background-position: 0 0;\n" +
    "    }\n" +
    "\n" +
    "    .sn-radios > .chk-list li > div.hover, .chk-list li > div:hover {\n" +
    "        background-position: -20px 0;\n" +
    "    }\n" +
    "\n" +
    "    .chk-list > div.checked {\n" +
    "        background-position: -40px 0;\n" +
    "    }\n" +
    "\n" +
    "    .sn-radios > .chk-list li > div.disabled {\n" +
    "        background-position: -60px 0;\n" +
    "        cursor: default;\n" +
    "    }\n" +
    "\n" +
    "    .sn-radios > .chk-list li > div.checked.disabled {\n" +
    "        background-position: -80px 0;\n" +
    "    }\n" +
    "\n" +
    "    .sn-radios > .chk-list li > label {\n" +
    "        cursor: pointer;\n" +
    "        color: #333\n" +
    "    }\n" +
    "\n" +
    "    /*高清屏支持*/\n" +
    "    @media only screen and(-webkit-min-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3/2), only screen and(min-device-pixel-ratio: 1.5) {\n" +
    "        .sn-radios > .chk-list li > div {\n" +
    "            background-image: url('data:image/png;base64,url');\n" +
    "            -webkit-background-size: 100px 20px;\n" +
    "            background-size: 100px 20px;\n" +
    "        }\n" +
    "    }\n");
