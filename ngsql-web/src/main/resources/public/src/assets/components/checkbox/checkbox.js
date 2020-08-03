define("lib/checkbox/tpl/checkbox.tpl", ['handlebars'], function (e) {
    return e.template({
        1: function (e, i, l, n, a) {
            let s, t, r = i != null ? i : e.nullContext || {}, d = l.helperMissing, o = "function",
                c = e.escapeExpression;
            return '<li class="' + c((t = (t = l.className || (i != null ? i.className : i)) != null ? t : d, typeof t === o ? t.call(r, {
                name: "className",
                hash: {},
                data: a
            }) : t)) + '">   <input type="' + ((s = (a.root && a.root.type === "checkbox" ? a.root.type : "radio")) === "radio" ? s + '" name="checkbox_com" ' : s + '" ') + ((s = (l.ifInDisabledValue || i && i.ifInDisabledValue || d).call(r, i != null ? i.value : i, {
                name: "ifInDisabledValue",
                hash: {},
                fn: e.program(2, a, 0),
                inverse: e.noop,
                data: a
            })) != null ? s : "") + " " + ((s = (l.ifInDefaultValue || i && i.ifInDefaultValue || d).call(r, i != null ? i.value : i, {
                name: "ifInDefaultValue",
                hash: {},
                fn: e.program(3, a, 0),
                inverse: e.noop,
                data: a
            })) != null ? s : "") + '\r\n value="' + c((t = (t = l.value || (i != null ? i.value : i)) != null ? t : d, typeof t === o ? t.call(r, {
                name: "value",
                hash: {},
                data: a
            }) : t)) + '" id="checkbox' + a.root.id + a.index + c((t = (t = l.value || (i != null ? i.value : i)) != null ? t : d, typeof t === o ? t.call(r, {
                name: "value",
                hash: {},
                data: a
            }) : t)) + '">\r\n<label for="checkbox' + a.root.id + a.index + c((t = (t = l.value || (i != null ? i.value : i)) != null ? t : d, typeof t === o ? t.call(r, {
                name: "value",
                hash: {},
                data: a
            }) : t)) + '">' + c((t = (t = l.label || (i != null ? i.label : i)) != null ? t : d, typeof t === o ? t.call(r, {
                name: "label",
                hash: {},
                data: a
            }) : t)) + "</label>\r\n</li>\r\n"
        }, 2: function () {
            return 'disabled'
        }, 3: function () {
            return 'checked'
        }, compiler: [7, ">4.0.0"], main: function (e, i, l, n, a) {
            let b, s, t, r = i != null ? i : e.nullContext || {};
            return '<div class="checkboxStyle' + e.escapeExpression((t = (t = l.className || (i != null ? i.className : i)) != null ? t : l.helperMissing, typeof t === "function" ? t.call(r, {
                name: "className",
                hash: {},
                data: a
            }) : t)) + '">\r\n <div class="Block-PaddingL">\r\n' + ((b = (i && i.title != null ? i.title : null)) != null ? '<li class="title"><label>' + b + '</label></li>' : "") + ((s = l.each.call(r, i != null ? i.items : i, {
                name: "each",
                hash: {},
                fn: e.program(1, a, 0),
                inverse: e.noop,
                data: a
            })) != null ? s : "") + "</div></div>"
        }, useData: true
    })
})
define("checkbox_function", ['jquery', 'eventTarget', 'handlebars', 'lib/checkbox/tpl/checkbox.tpl', 'components'], function (e, i, l, n, m) {
    "use strict";
    const s = function (l) {
        e.extend(this.prototype, m.getEl.call(this, l));
        i.call(this);
        t.call(this);
        r.call(this);
        d.call(this)
    };
    const t = function () {
        l.registerHelper("ifInDisabledValue", e.proxy(function (i) {
            if (this.options.disabled) {
                const n = e.inArray(i, this.options.disabled);
                if (n === 0) {
                    return 'disabled'
                } else {
                    return ""
                }
            }
        }, this));
        l.registerHelper("ifInDefaultValue", e.proxy(function (i) {
            if (this.options.defaultValue) {
                const n = e.inArray(i, this.options.defaultValue.split(","));
                if (n >= 0) {
                    return 'checked'
                } else {
                    return ""
                }
            }
        }, this))
    };
    const d = function () {
        this.$el.on("change", "div>li", e.proxy(function (e) {
            o.call(this, e)
        }, this))
    };
    const o = function (i) {
        const l = e(i.target || i.currentTarget).closest("li");
        const n = l.find("input");
        const a = l.index() - 1;
        const s = this.options.items[a];
        s.checked = n.prop("checked");
        s.disabled = n.prop("disabled");
        this.trigger("change", s)
    };
    const r = function () {
        this.$el.html(n(this.options));
        this.$el.find("input").attr("name", this.options.name);
        if (this.options.disabled === 1) {
            this.disable()
        }
    };
    e.extend(s.prototype, i.prototype, {
        disabled: function (i) {
            f.call(this, i, "disabled", true)
        }, enable: function (i) {
            f.call(this, i, "disabled", false)
        }, uncheck: function (i) {
            f.call(this, i, "checked", false)
        }, check: function (i) {
            f.call(this, i, "checked", true)
        }, get: function () {
            const d = e('div>li>input:checked', this.$el);
            let l = [];
            e.each(d, function (k, v) {
                l[k] = e(v).val()
            });
            return l.length > 0 ? l.join(",") : ""
        }, destroy: function () {
            this.$el.remove()
        }
    });
    const f = function (i, prop, flag) {
        const l = e("div>li", this.$el);
        const id = this.options.id;
        if (!!i) {
            const a = i.split(",");
            e.each(a, function (i, a) {
                const n = e("#checkbox" + id + a, l);
                n.prop(prop, flag)
            })
        } else {
            e('input', l).prop(prop, flag)
        }
    }
    return s;
});
define('checkbox', ['jquery', 'components', 'checkbox_function'], function (j, c, t) {
    j.extend(t.prototype, c.temp, {
        //这是一段注释
        componentsName: '选择框',
        version: '1.2.4',
        author: '<span style="color: red">kangjun</span>',
        componentsExample:
            new t({title: '单选框', items: [{label: '男', name: 'man'}, {label: "女", name: 'woman'}]}).$el.html() + '<br>' +
            new t({
                title: '复选框', type: 'checkbox',
                items: [{label: '中国', name: 'china'}, {label: "日本", name: 'japan'}, {label: "美国", name: 'american'}]
            }).$el.html(),
        componentsDetail: '根据配置，在页面生成一个单选或多选的复选框。'
    });
    return t;
});
require(['components'], function (c) {
    c.insertStyle("        .checkboxStyle {display:inline-block} .checkboxStyle > .Block-PaddingL { display:inline-block } .checkboxStyle input {\n            display: none\n        }\n\n        .checkboxStyle > .Block-PaddingL > li {\n            list-style-type: none;display: inline-block;\n        }\n\n        .checkboxStyle > .Block-PaddingL > li > label {\n            border: 1px solid #CCC;\n            color: #666;\n            padding: 2px 10px 2px 5px;\n            line-height: 28px;\n            min-width: 80px;\n            text-align: center;\n            float: left;\n            margin: 2px;\n            border-radius: 4px\n        }\n\n        .checkboxStyle > .Block-PaddingL > li input:checked + label {\n            background: url(../../assets/lib/checkbox/img/ico_checkbox_on.svg) no-repeat right bottom;\n            border: 1px solid #00a4ff;\n            background-size: 21px 21px;\n            color: #00a4ff\n        }\n\n        .checkboxStyle > .Block-PaddingL > li input:disabled + label {\n            opacity: 0.5;\n        }\n\n        .checkboxStyle > .Block-PaddingL > li.title > label{\n            border: none;\n            color: black;\n            font-weight: bold;\n            min-width: auto;\n        }\n")
});