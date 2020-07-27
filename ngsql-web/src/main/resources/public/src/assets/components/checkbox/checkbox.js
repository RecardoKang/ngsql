define("lib/checkbox/tpl/checkbox.tpl", ['handlebars'], function (e) {
    return e.template(
        {
            1: function (e, i, l, n, a) {
                let s, t, r = i != null ? i : e.nullContext || {}, d = l.helperMissing, o = "function",
                    c = e.escapeExpression;
                return '<li class="' + c((t = (t = l.className || (i != null ? i.className : i)) != null ? t : d, typeof t === o ? t.call(r, {
                    name: "className",
                    hash: {},
                    data: a
                }) : t)) + '">\r\n' + ((s = (l.ifInDisabledValue || i && i.ifInDisabledValue || d).call(r, i != null ? i.value : i, {
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
                })) != null ? s : "") + '<input type="checkbox" ' + ((s = (l.ifInDisabledValue || i && i.ifInDisabledValue || d).call(r, i != null ? i.value : i, {
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
                }) : t)) + '" id="checkbox-' + c((t = (t = l.value || (i != null ? i.value : i)) != null ? t : d, typeof t === o ? t.call(r, {
                    name: "value",
                    hash: {},
                    data: a
                }) : t)) + '"><lable for="checkbox-' + c((t = (t = l.value || (i != null ? i.value : i)) != null ? t : d, typeof t === o ? t.call(r, {
                    name: "value",
                    hash: {},
                    data: a
                }) : t)) + '">' + c((t = (t = l.label || (i != null ? i.label : i)) != null ? t : d, typeof t === o ? t.call(r, {
                    name: "label",
                    hash: {},
                    data: a
                }) : t)) + "</label>\r\n</li>\r\n"
            },
            2: function () {
                return 'disabled=disabled class="disabled"';
            },
            4: function () {
                return 'class="checked"';
            },
            6: function () {
                return 'disabled="disabled"';
            },
            8: function () {
                return "checked=checked";
            },
            compiler: [7, ">4.0.0"],
            main: function (e, i, l, n, a) {
                let s, t, r = i != null ? i : e.nullContext || {};
                return '<div class="checkboxStyle' + e.escapeExpression(
                    (
                        t = (
                            t = l.className || (i != null ? i.className : i)
                        ) != null ? t : l.helperMissing, typeof t === "function" ? t.call(
                            r, {
                                name: "className",
                                hash: {},
                                data: a
                            }
                        ) : t
                    )
                ) + '">\r\n <ul class="Block-PaddingL">\r\n' + (
                    (
                        s = l.each.call(r, i != null ? i.items : i,
                            {
                                name: "each",
                                hash: {},
                                fn: e.program(1, a, 0),
                                inverse: e.noop,
                                data: a
                            }
                        )
                    ) != null ? s : ""
                ) + "</ul></div>";
            },
            useData: true
        }
    )
})

define("checkbox", ['jquery', 'eventTarget', 'handlebars', 'lib/checkbox/tpl/checkbox.tpl'], function (e, i, l, n) {
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
            if (l.data.root.disabled) {
                const n = e.inArray(i, l.data.root.disabled);
                if (n === 0) {
                    return 'disabled=disabled class="disabled"';
                } else {
                    return "";
                }
            }
        }, this));
        l.registerHelper("ifInDefaultValue", e.proxy(function (i, l) {
            if (l.data.root.defaultValue) {
                const n = e.inArray(i, l.data.root.defaultValue.split(","));
                if (n >= 0) {
                    return 'class="checked" checked="checked"';
                } else {
                    return "";
                }
            }
        }))
    };
    const d = function () {
        this.$el.on("click", "ul>li", e.proxy(function (e) {
            o.call(this, e);
            this.trigger('itemClick', e);
        }, this))
    };
    const o = function (i) {
        const l = e(i.target || i.currentTarget).closest("li");
        const n = l.find("input");
        const a = l.index();
        const s = this.options.items[a];
        if (n.attr("disabled")) {
            return false;
        }
        if (n.attr("checked") !== "checked") {
            e("ul>li", this.$el).removeClass("checked");
            e("ul>li>input", this.$el).attr("checked", false);
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
    e.extend(s.prototype, i.prototype, {
        version: a,
        disabled: function (i) {
            const l = e("ul>li", this.$el);
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
                        l.addClass("disabled");
                    }
                })
            }
        },
        enable: function () {
            e("ul>li>input", this.$el).attr("disabled", false).parent().removeClass("disabled");
        },
        get: function () {
            return e('ul>li>input[checked="checked"]', this.$el).val() || "";
        },
        destroy: function () {
            this.$el.remove();
        }
    });
    window.console = window.console || function () {
        const e = {};
        e.log = e.warm = e.debug = e.info = e.error = e.time = e.dir = e.profile = e.clear = e.exception = e.trace = e.assert = function () {
        };
        return e;
    }
    const c = function (e) {
        return !!e.tagName;
    };
    return s;
});
(function (e) {
    const i = document, l = "appendChild", n = "styleSheet", a = i.createElement("style");
    a.type = "text/css";
    i.getElementsByTagName("head")[0][l](a);
    a[n] ? a[n].cssText = e : a[l](i.createTextNode(e));
})(
    "         @charset \"UTF-8\";\n" +
    "        .checkboxStyle input {\n" +
    "            display: none\n" +
    "        }\n" +
    "\n" +
    "        .checkboxStyle > .Block-PaddingL > li {\n" +
    "            list-style-type: none;\n" +
    "        }\n" +
    "\n" +
    "        .checkboxStyle > .Block-PaddingL > li > label {\n" +
    "            border: 1px solid #CCC;\n" +
    "            color: #666;\n" +
    "            padding: 2px 10px 2px 5px;\n" +
    "            line-height: 28px;\n" +
    "            min-width: 80px;\n" +
    "            text-align: center;\n" +
    "            float: left;\n" +
    "            margin: 2px;\n" +
    "            border-radius: 4px\n" +
    "        }\n" +
    "\n" +
    "        .checkboxStyle > .Block-PaddingL > li input:checked + label {\n" +
    "            background: url(/assets/lib/checkbox/img/ico_checkon.svg) no-repeat right bottom;\n" +
    "            border: 1px solid #00a4ff;\n" +
    "            background-size: 21px 21px;\n" +
    "            color: #00a4ff\n" +
    "        }\n" +
    "\n" +
    "        .checkboxStyle > .Block-PaddingL > li input:disabled + label {\n" +
    "            opacity: 0.7;\n" +
    "        }"
)