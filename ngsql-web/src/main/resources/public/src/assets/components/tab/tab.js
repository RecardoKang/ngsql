define('components/tab/tab.tpl', ['handlebars'], function (h) {
    return h.template({
        1: function (e, i, l, n, a) {
            let t, r = i != null ? i : e.nullContext || {}, d = l.helperMissing, o = "function",
                c = e.escapeExpression,
                title = c((t = (t = l.title || (i != null ? i.title : i)) != null ? t : d, typeof t === o ? t.call(r, {
                    name: "title",
                    hash: {},
                    data: a
                }) : t));
            return '<li title="' + title + '"><span>' + title + '</span></li>';
        },
        2: function (e, i, l, n, a) {
            let t, r = i != null ? i : e.nullContext || {}, d = l.helperMissing, o = "function",
                c = e.escapeExpression;
            return '<div class="' + c((t = (t = l.className || (i != null ? i.className : i)) != null ? t : d, typeof t === o ? t.call(r, {
                name: "className",
                hash: {},
                data: a
            }) : t)) + '"></div>';
        },
        compiler: [7, ">4.0.0"],
        main: function (e, i, l, n, a) {
            let s, r = i != null ? i : e.nullContext || {};
            return '<div class="tab-menus ' + i.direction + '"><div class="tab-menu">\n' +
                '        <ul class="tab-menu-bg">\n' +
                '            <li class="tab-title-bg-blue"></li>\n' +
                '            <li class="tab-title-bg-white"></li>\n' +
                '        </ul>\n' +
                '        <ul class="tab-menu-ul">' + (
                    (
                        s = l.each.call(r, i.items,
                            {
                                name: "each",
                                hash: {},
                                fn: e.program(1, a, 0),
                                inverse: e.noop,
                                data: a
                            }
                        )
                    ) != null ? s : ""
                ) + '</ul></div><div class="tab-content">' + (
                    (
                        s = l.each.call(r, i.items,
                            {
                                name: "each",
                                hash: {},
                                fn: e.program(2, a, 0),
                                inverse: e.noop,
                                data: a
                            }
                        )
                    ) != null ? s : ""
                ) + '</div></div>';
        },
        useData: true
    });
})
define('tab', ['jquery', 'eventTarget', 'handlebars', 'components/tab/tab.tpl', 'components'], function (j, e, h, t, c) {
        "use static";
        const VERSION = "0.3.3";
        let r = function (h) {
            j.extend(this.prototype, c.getEl.call(this, h), n.call(this));
            e.call(this);
            l.call(this);
            f.call(this);
        }
        j.extend(r.prototype, e.prototype, {
            version: VERSION,
            author: 'kangjun',
            switchTab: function (t) {
                const $el = this.$el;
                let index = 0;
                if (!!j('.tab-menus>div.tab-content>div.' + t, $el).length > 0) {
                    index = j('.tab-menus>div.tab-content>div.' + t, $el).index() - 1;
                } else if (typeof t === "number" || (typeof t === "string" && /^\d+$/.test(t)) && !isNaN(Number(t))) {
                    index = Number(t);
                    if (index > this.orginTab.length) {
                        return false;
                    }
                } else {
                    return false;
                }
                if (!!this.orginTab[index]) {
                    w.call(j('ul.tab-menu-ul>li', $el).eq(index), $el);
                } else {
                    i.call(this, index);
                }
            }
        });
        const n = function () {
            if (!!!this.options.direction || this.options.direction !== 'vertical') {
                this.options.direction = "horizontal";
            }
            this.orginTab = [];
        }
        const l = function () {
            this.$el.html(t(this.options));
            const p = s.call(this);
            i.call(this, p);
            j('.tab-menus>div.tab-menu>ul.tab-menu-ul>li:eq(' + p + ')', this.$el).addClass('checked');
        };
        const s = function () {
            const startPage = this.options.startPage;
            let g = 0;
            if (!!startPage) {
                if (typeof startPage === "string" && /^\d+$/.test(startPage)) {
                    g = Number(startPage);
                } else if (typeof startPage === "number") {
                    g = startPage;
                }
            }
            if (isNaN(g) || g >= this.options.items.length) {
                g = 0;
            }
            return g;
        };
        const f = function () {
            const $el = this.$el;
            j('.tab-menus>div.tab-menu>ul.tab-menu-ul li', $el).each(function () {
                j(this).mouseenter(function () {
                    const index = j(this).index();
                    m.call($el, 'blue', index);
                    j('ul.tab-menu-ul li.over', $el).removeClass('over');
                    const tab = j('.tab-menu-ul li', $el).eq(index).addClass('over');
                    const bg = j('.tab-menu-bg li.tab-title-bg-white', $el);
                    if (tab.hasClass('checked')) {
                        bg.addClass('over');
                    } else {
                        bg.removeClass('over');
                    }
                }).mousedown(function () {
                    w.call(this, $el);
                });
            });
            j('.tab-menus>div.tab-menu>ul.tab-menu-ul', $el).mouseleave(function () {
                j('div.tab-menu>ul li.over', $el).removeClass('over');
                const index = j('.tab-menu-ul li.checked', $el).index();
                m.call($el, 'blue', index);
            });

            const that = this;
            j('.tab-menus>div.tab-menu>ul.tab-menu-ul>li:not(.checked)', $el).one('click', function () {
                i.call(that, j(this).index());
            });
            $el.on('click', '.tab-menus>div.tab-menu>ul.tab-menu-ul>li', j.proxy(function (i) {
                const data = that.options.items[j(i.target || i.currentTarget).closest("li").index()];
                this.trigger('change', i, data);
                if (data.click) {
                    data.click(i, data);
                }
            }, this));
        };
        const w = function (e) {
            j('ul.tab-menu-ul li.over', e).removeClass('over');
            const index = j(this).index();
            j('.tab-menu-ul li.checked', e).removeClass("checked");
            j(this).addClass("checked");
            j('.tab-menus>div.tab-content>div', e).removeClass('show').eq(index).addClass('show');
            m.call(e, 'white', index);
            m.call(e, 'blue', index);
        }
        const i = function (d) {
            let r = this.options.items[d].render;
            r = !!r ? r(this.orginTab) : "";
            const c = !!this.options.items[d].className ? this.options.items[d].className : "";
            const $div = j('.tab-menus>div.tab-content>div', this.$el).eq(d).addClass(c);
            if (r instanceof jQuery) {
                $div.append(r);
                this.orginTab[d] = {content: $div};
            } else if (typeof (r) !== 'object') {
                this.orginTab[d] = {content: $div.html(r)};
            } else if (typeof (r) === 'object') {
                this.orginTab[d] = {content: $div.append(r.content)};
            }
            let i = 0;
            j.each(this.orginTab, function (k) {
                if (d + '' !== k) {
                    i++;
                } else {
                    return false;
                }
            });
            j('.tab-menus>div.tab-content>div.show', this.$el).removeClass('show');
            $div.addClass(c).addClass('show');
            m.call(this.$el, 'white', d);
            m.call(this.$el, 'blue', d);
        };
        const m = function (b, i) {
            const bg = j('.tab-menu-bg li.tab-title-bg-' + b, this);
            if (this.children('.tab-menus').hasClass('horizontal')) {
                bg.css('left', (i) * 150 + 'px');
            } else if (this.children('.tab-menus').hasClass('vertical')) {
                bg.css('top', (i) * 42 + 'px');
            }
        };
        return r;
    }
);
require(['components'], function (c) {
    c.insertStyle(
        '        .tab-menus.horizontal > div.tab-menu > ul {\n' +
        '            height: 42px;\n' +
        '            width: 100%;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus.vertical > div.tab-menu > ul.tab-menu-bg {\n' +
        '            height: inherit;\n' +
        '            width: 150px;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus.vertical > div.tab-menu > ul.tab-menu-ul {\n' +
        '            width: 150px;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus.vertical > div.tab-menu {\n' +
        '            height: inherit;\n' +
        '            float: left;\n' +
        '        }\n' +
        '\n' +
        '        /**/\n' +
        '        .tab-menus {\n' +
        '            margin: auto;\n' +
        '            position: absolute;\n' +
        '            width: inherit;\n' +
        '            height: inherit;\n' +
        '            border: 1px solid #009fe9;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus > div.tab-content {\n' +
        '            height: 100%;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus > div.tab-menu > ul {\n' +
        '            float: left;\n' +
        '            margin: 0;\n' +
        '            padding: 0;\n' +
        '            min-width: 150px;\n' +
        '            overflow: hidden;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus > div.tab-menu > ul.tab-menu-bg {\n' +
        '            z-index: -1;\n' +
        '            background-color: #009fe977;\n' +
        '            position: relative;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus > div.tab-menu > ul.tab-menu-ul {\n' +
        '            position: absolute;\n' +

        '        }\n' +
        '\n' +
        '        .tab-menus > div.tab-menu > ul > li {\n' +
        '            list-style: none;\n' +
        '            width: 140px;\n' +
        '            padding: 0 5px;\n' +
        '            float: left;\n' +
        '            height: auto;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus > div.tab-menu > ul.tab-menu-ul > li {\n' +
        '            min-width: 100px;\n' +
        '            white-space: nowrap;\n' +
        '            overflow: hidden;\n' +
        '            text-overflow: ellipsis;\n' +
        '            line-height: 42px;\n' +
        '            text-align: center;\n' +
        '            cursor: pointer;\n' +
        '            color: #000;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus > div.tab-menu > ul.tab-menu-bg > li {\n' +
        '            opacity: 1;\n' +
        '            left: 0;\n' +
        '            height: 42px;\n' +
        '            position: absolute;\n' +
        '            -webkit-transition: all .5s;\n' +
        '            -moz-transition: all .5s;\n' +
        '            -o-transition: all .5s;\n' +
        '            transition: all .5s\n' +
        '        }\n' +
        '\n' +
        '        div.tab-menu > ul.tab-menu-bg > li.tab-title-bg-blue {\n' +
        '            background: #009fe9;\n' +
        '        }\n' +
        '\n' +
        '        div.tab-menu > ul.tab-menu-bg > li.tab-title-bg-white {\n' +
        '            background: #fff;\n' +
        '        }\n' +
        '\n' +
        '        div.tab-menu > ul.tab-menu-bg > li.over {\n' +
        '            opacity: 0;\n' +
        '        }\n' +
        '\n' +
        '        div.tab-menu > ul.tab-menu-ul > li.over {\n' +
        '            color: #fff;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus > div.tab-content > div {\n' +
        '            display: none;\n' +
        '        }\n' +
        '\n' +
        '        .tab-menus > div.tab-content > div.show {\n' +
        '            display: block;\n' +
        '        }\n'
    );
})