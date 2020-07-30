define('components/tab/tab.tpl', ['handlebars'], function (h) {
    return h.template({
        1: function (e, i, l, n, a) {
            let s, t, r = i != null ? i : e.nullContext || {}, d = l.helperMissing, o = "function",
                c = e.escapeExpression,
                title = c((t = (t = l.title || (i != null ? i.title : i)) != null ? t : d, typeof t === o ? t.call(r, {
                    name: "title",
                    hash: {},
                    data: a
                }) : t));
            return '<li title="' + title + '"><span>' + title + '</span></li>';
        },
        2: function (e, i, l, n, a) {
            let s, t, r = i != null ? i : e.nullContext || {}, d = l.helperMissing, o = "function",
                c = e.escapeExpression;
            return '<div class="' + c((t = (t = l.className || (i != null ? i.className : i)) != null ? t : d, typeof t === o ? t.call(r, {
                name: "className",
                hash: {},
                data: a
            }) : t)) + ((s = (l.ifDefaultTab || i && i.ifDefaultTab || d).call(r, i != null ? i.value : i, {
                name: "ifDefaultTab",
                hash: {},
                fn: e.program(3, a, 0),
                inverse: e.noop,
                data: a
            })) != null ? s : "") + '">' + c((t = (t = l.render || (i != null ? i.render : i)) != null ? t : d, typeof t === o ? t.call(r, {
                name: "render",
                hash: {},
                data: a
            }) : t)) + '</div>';
        },
        3: function () {
            return " show";
        },
        compiler: [7, ">4.0.0"],
        main: function (e, i, l, n, a) {
            let s, r = i != null ? i : e.nullContext || {};
            return '<div class="tab-menus">\n' +
                '        <ul class="tab-menu-bg">\n' +
                '            <li class="tab-title-bg-blue"></li>\n' +
                '            <li class="tab-title-bg-white"></li>\n' +
                '        </ul>\n' +
                '        <ul class="tab-menu-ul">' + (
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
                ) + '</ul>' + (
                    (
                        s = l.each.call(r, i != null ? i.items : i,
                            {
                                name: "each",
                                hash: {},
                                fn: e.program(2, a, 0),
                                inverse: e.noop,
                                data: a
                            }
                        )
                    ) != null ? s : ""
                ) + '</div>';
        }
    });
})
define('tab', ['jquery', 'eventTarget', 'handlebars', 'components/tab/tab.tpl', 'components'], function (j, e, h, t, c) {
    const version = "0.3.3";
    let r = function (h) {
        j.extend(this.prototype, c.getEl.call(this, h));
        e.call(this);
        d.call(this);
        l.call(this);
        f.call(this);
    }
    j.extend(r.prototype, e.prototype, {
        version: version,
        author: 'kangjun'
    });
    const d = function () {
        h.registerHelper("ifDefaultTab", j.proxy(function (i) {
            if (!!this.options.defaultTab) {
                if (i === this.options.defaultTab.split(",")[0]) {
                    return " show";
                } else {
                    return "";
                }
            }
        }, this));
    }
    const l = function () {
        this.$el.html(t(this.options));
        const $el = this.$el;
        if (!!j('.tab-menus>div.show', $el)) {
            j(j('.tab-menus>div', $el)[0]).addClass('show');
        }
        j('.tab-menus li', $el).each(function () {
            j(this).mouseenter(function () {
                const index = j(this).index();
                move.call(j('.tab-menu-bg li.tab-title-bg-blue', $el), index);
            }).mousedown(function () {
                const index = j(this).index();
                j('.tab-menu-ul li.checked', $el).removeClass("checked");
                j(this).addClass("checked");
                j('.tab-menus>div', $el).removeClass('show').eq(index).addClass('show');
                move.call(j('.tab-menu-bg li.tab-title-bg-white', $el), index);
            });
        });
        j('.tab-menus>ul', $el).mouseleave(function () {
            const index = j('.tab-menu-ul li.checked', $el).index();
            move.call(j('.tab-menu-bg li.tab-title-bg-blue', $el), index);
        });

        function move(index) {
            this.css('left', (index) * 150 + 'px');
        }
    }
    const f = function () {
        this.$el.on('click', '.tab-menus>div', e.proxy(function (i) {
            this.trigger('change', e);
        }, this));
    }
    return r;
});
require(['components'], function (c) {
    c.insertStyle('        .tab-menus {\n' +
        '            margin: auto;\n' +
        '            border: 1px solid #009fe9;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus ul {\n' +
        '            height: 42px;\n' +
        '            width: 100%;\n' +
        '            position: relative;\n' +
        '            float: left;\n' +
        '            margin: 0;\n' +
        '            padding: 0;\n' +
        '            min-width: 150px;\n' +
        '            overflow: hidden;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus ul.tab-menu-bg {\n' +
        '            z-index: -1;\n' +
        '            background-color: #009fe977;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus ul.tab-menu-ul {\n' +
        '            top: -42px\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus li {\n' +
        '            list-style: none;\n' +
        '            width: 140px;\n' +
        '            padding: 0 5px;\n' +
        '            float: left;\n' +
        '            height: inherit;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus .tab-menu-ul > li {\n' +
        '            min-width: 100px;\n' +
        '            white-space: nowrap;\n' +
        '            overflow: hidden;\n' +
        '            text-overflow: ellipsis;\n' +
        '            line-height: 40px;\n' +
        '            text-align: center;\n' +
        '            cursor: pointer;\n' +
        '            color: #000;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus>.tab-menu-bg>li {\n' +
        '            left: 0;\n' +
        '            position: absolute;\n' +
        '            -webkit-transition: all .5s;\n' +
        '            -moz-transition: all .5s;\n' +
        '            -o-transition: all .5s;\n' +
        '            transition: all .5s\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus .tab-title-bg-blue {\n' +
        '            background: #009fe9;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus .tab-title-bg-white {\n' +
        '            background: #fff;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus > div {\n' +
        '            display: none;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus div.show {\n' +
        '            display: block;\n' +
        '        }\n');
})