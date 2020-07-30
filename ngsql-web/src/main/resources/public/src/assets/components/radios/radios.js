define("components/radios/radios.tpl", ['handlebars'], function (e) {
    return e.template({
        1: function (e, i, l, n, a) {
            let s, t, r = i != null ? i : e.nullContext || {}, d = l.helperMissing, o = "function",
                c = e.escapeExpression;
            return '<li class="' + c((t = (t = l.className || (i != null ? i.className : i)) != null ? t : d, typeof t === o ? t.call(r, {
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
            })) != null ? s : "") + '>\r\n <input type="checkbox" ' + ((s = (l.ifInDisabledValue || i && i.ifInDisabledValue || d).call(r, i != null ? i.value : i, {
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
            }) : t)) + '" > \r\n </div> \r\n \r\n \r\n <lable>' + c((t = (t = l.label || (i != null ? i.label : i)) != null ? t : d, typeof t === o ? t.call(r, {
                name: "label",
                hash: {},
                data: a
            }) : t)) + "</label>\r\n </li>\r\n"
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
            return '<div class="sn-radios ' + e.escapeExpression(
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
            ) + '">\r\n <ul class="chk-list">\r\n' + (
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
    });
})

define('radios', ['jquery', 'eventTarget', 'handlebars', 'components/radios/radios.tpl'], function (e, i, l, n) {
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
        this.$el.on("click", "ul>li>div", e.proxy(function (e) {
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
            e("ul>li>div", this.$el).removeClass("checked");
            e("ul>li>div>input", this.$el).attr("checked", false);
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
                        l.addClass("disabled");
                    }
                })
            }
        },
        enable: function () {
            e("ul>li>div>input", this.$el).attr("disabled", false).parent().removeClass("disabled");
        },
        get: function () {
            return e('ul>li>div>input[checked="checked"]', this.$el).val() || "";
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
require(['components'], function (c) {
    c.insertStyle("    @charset \"UTF-8\";\n" +
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
        "        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAUCAYAAAB7wJiVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABF1JREFUeNrsWc1rE0EUn2YlCZpso40oVsUGrdEqXkTxIIgUUagUv+6C9dCDh3jUgx/oSWgvevLrD/ADRQtFinhSC0KVfqStMVo1RbGN6SZqErNZ32+7wjbZ3c5mJebQgcdO33vz63u/2Z2ZN6lTFIUttNpprgUKaqstMjO8iY5vpkcHyQGSJk0dJ+klubFtU/OInX9Ud3nIEk85u+W/4lG+B+lxnmQLiVtT50iGoad8H9nEq4i/utIli4AQTNciQehc3rDUJfqWMI97Nr5cPs+kzA/2bfp7sSDL10kVIeBf8xCn4gUXC52ndwZdbev9rLnBo9rGp3PscSzNuvqnilM/Z/GIyKriUb4+ejynfLdSvswkX0b5gsDdlG9yHjxH/M2ZEA2sp97va12zaiUTXMYrmlwssk+TX9hMOvMUbwCB5i3I6zkcFltvtTWyeo9giDeTk9mJxwl2b1RS8YjEquBpkzFB+S7jzPc7/bmW8s1YTIYj/kpHdANs3epVpmBosMGHfPfibbB4YboPbRRb7x5Za0oeGmx3yIeIrjbeC0yGjXyX4muyis8xf/hCIK9HxlqGxmIF+pQU3gZfjMHYvzh/hV0abAl2jRRmsvx48F3eFS1gLA8eLVHK4bsTinhlWBX0oePBo5jbKXalgnwVjDXAK+Mvm80qsVhMGRgYUAV96Kz4009jR3BZQLCaWaOZpnVS0Dav0tZxanuDIHr48eAb2dnAhTdG+8WO2+/Y/VGJSbmiKuhDBxsH3jnKl1WQrzrWKD49f0Q8i0ajLJVKMVmWVUEfOtjM+NNHs1/0+Wwf07BpYayBaX97s2gbD5s0D96ZZ19ZKiuXOUEHGwdei4N8W4zi0+MlEgl1Esr2D9LBZsaffkJCXo/bdoDaCSJkYAqFgx7beBtnT0zz4vW9z5hiPIlnePDcDvI1GjiHv3Q6bYohSZIpf44LQ+2Ulv9XhVFerm08LV/lH+MZnrLi2Zz9uPO/f+MxYWCKj07lbOPFU3kuvNYm8+VmX8jHg5d3kK/RwDn8+f1+82VPFE35009Ir5TJ2A4QhQ5WEANT78NxyTZeTyzNhXd5zwoW8JYffaGDjQNv2EG+UaP49HiNjY1MEMrjgw42M/70E3JzKpmSUbTwNvhS1Ymd64aB+ebVV0kZpx/uZMm3u3+aCy9Me8PL4yHUGszvdqmCPnRhrXKfB+8i5csqyBfdC0bx6fnzer0sHA6zQCCgTgIEfehgM+Wv5Cx97f2nBPe5HL4YU3om19UO11AbFDmw4ANfjKkWHsU+WEG+gxZ4jvkr3dQjVM73ffg8afnmwAYfrfSPWLxUEaoN+o7e+6heZ5g12I6Rz/3Zq45q4u2iHJI28sXnscsqPqf8Vf1y8eAGv3oUxb8dT+bYo7fOLhed4tX05WIJMIqfk1rREtJOFh+0DQjXx0M2r8st8Yi4/4pH+bZr1++bS67fsYFfoHwf2MSriL+6hV8Ma6st/GJYY+2PAAMAjm6PyQU7CxQAAAAASUVORK5CYII=') no-repeat;\n" +
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
        "    .sn-radios > .chk-list li > div.checked {\n" +
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
        "            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAUCAYAAAB7wJiVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABF1JREFUeNrsWc1rE0EUn2YlCZpso40oVsUGrdEqXkTxIIgUUagUv+6C9dCDh3jUgx/oSWgvevLrD/ADRQtFinhSC0KVfqStMVo1RbGN6SZqErNZ32+7wjbZ3c5mJebQgcdO33vz63u/2Z2ZN6lTFIUttNpprgUKaqstMjO8iY5vpkcHyQGSJk0dJ+klubFtU/OInX9Ud3nIEk85u+W/4lG+B+lxnmQLiVtT50iGoad8H9nEq4i/utIli4AQTNciQehc3rDUJfqWMI97Nr5cPs+kzA/2bfp7sSDL10kVIeBf8xCn4gUXC52ndwZdbev9rLnBo9rGp3PscSzNuvqnilM/Z/GIyKriUb4+ejynfLdSvswkX0b5gsDdlG9yHjxH/M2ZEA2sp97va12zaiUTXMYrmlwssk+TX9hMOvMUbwCB5i3I6zkcFltvtTWyeo9giDeTk9mJxwl2b1RS8YjEquBpkzFB+S7jzPc7/bmW8s1YTIYj/kpHdANs3epVpmBosMGHfPfibbB4YboPbRRb7x5Za0oeGmx3yIeIrjbeC0yGjXyX4muyis8xf/hCIK9HxlqGxmIF+pQU3gZfjMHYvzh/hV0abAl2jRRmsvx48F3eFS1gLA8eLVHK4bsTinhlWBX0oePBo5jbKXalgnwVjDXAK+Mvm80qsVhMGRgYUAV96Kz4009jR3BZQLCaWaOZpnVS0Dav0tZxanuDIHr48eAb2dnAhTdG+8WO2+/Y/VGJSbmiKuhDBxsH3jnKl1WQrzrWKD49f0Q8i0ajLJVKMVmWVUEfOtjM+NNHs1/0+Wwf07BpYayBaX97s2gbD5s0D96ZZ19ZKiuXOUEHGwdei4N8W4zi0+MlEgl1Esr2D9LBZsaffkJCXo/bdoDaCSJkYAqFgx7beBtnT0zz4vW9z5hiPIlnePDcDvI1GjiHv3Q6bYohSZIpf44LQ+2Ulv9XhVFerm08LV/lH+MZnrLi2Zz9uPO/f+MxYWCKj07lbOPFU3kuvNYm8+VmX8jHg5d3kK/RwDn8+f1+82VPFE35009Ir5TJ2A4QhQ5WEANT78NxyTZeTyzNhXd5zwoW8JYffaGDjQNv2EG+UaP49HiNjY1MEMrjgw42M/70E3JzKpmSUbTwNvhS1Ymd64aB+ebVV0kZpx/uZMm3u3+aCy9Me8PL4yHUGszvdqmCPnRhrXKfB+8i5csqyBfdC0bx6fnzer0sHA6zQCCgTgIEfehgM+Wv5Cx97f2nBPe5HL4YU3om19UO11AbFDmw4ANfjKkWHsU+WEG+gxZ4jvkr3dQjVM73ffg8afnmwAYfrfSPWLxUEaoN+o7e+6heZ5g12I6Rz/3Zq45q4u2iHJI28sXnscsqPqf8Vf1y8eAGv3oUxb8dT+bYo7fOLhed4tX05WIJMIqfk1rREtJOFh+0DQjXx0M2r8st8Yi4/4pH+bZr1++bS67fsYFfoHwf2MSriL+6hV8Ma6st/GJYY+2PAAMAjm6PyQU7CxQAAAAASUVORK5CYII=');\n" +
        "            -webkit-background-size: 100px 20px;\n" +
        "            background-size: 100px 20px;\n" +
        "        }\n" +
        "    }\n");
});
