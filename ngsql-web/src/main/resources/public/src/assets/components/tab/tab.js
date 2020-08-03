define('components/tab/tab.tpl', ['handlebars'], function (h) {
    return h.template({
        1: function (e, i) {
            const title = (!!i.title ? i.title : "tab");
            return '<li title="' + title + '"><span>' + title + '</span></li>';
        },
        2: function (e, i) {
            return '<div class="' + (!!i.className ? i.className : "") + '"></div>';
        },
        compiler: [7, ">4.0.0"],
        main: function (e, i, l, n, a) {
            let s, r = i != null ? i : e.nullContext || {};
            return '<div class="tab-menus ' + i.direction + '"><div class="tab-menu">\n' +
                '<ul class="tab-menu-bg">\n<li class="tab-title-bg-blue"></li>\n<li class="tab-title-bg-white"></li>\n' +
                '</ul>\n<ul class="tab-menu-ul">' + ((s = l.each.call(r, i.items,
                    {name: "each", hash: {}, fn: e.program(1, a, 0), inverse: e.noop, data: a}
                )) != null ? s : "") + '</ul></div><div class="tab-content">' + ((s = l.each.call(r, i.items,
                    {name: "each", hash: {}, fn: e.program(2, a, 0), inverse: e.noop, data: a}
                )) != null ? s : "") + '</div></div>';
        },
        useData: true
    });
});
define('tab_function', ['jquery', 'eventTarget', 'handlebars', 'components/tab/tab.tpl', 'components'], function (j, e, h, t, c) {
        "use static";
        const li = '.tab-menus>div.tab-menu>ul.tab-menu-ul>li';
        const div = '.tab-menus>div.tab-content>div';
        let r = function (h) {
            j.extend(this.prototype, c.getEl.call(this, h), n.call(this));
            e.call(this);
            l.call(this);
            f.call(this);
        }
        j.extend(r.prototype, e.prototype, {
            switchTab: function (t, p) {
                const n = u.call(this, t, p);
                if (0 <= n < j(li, this.$el).length) i.call(this, n);
            },
            destroyTab: function (t, p) {
                const n = u.call(this, t, p);
                const e = this.$el;
                if (n >= 0) {
                    const q = j(li, e);
                    const c = q.filter('.checked').index();
                    const l = q.length;
                    this.orginTab = o(this.orginTab, n);
                    this.items = o(this.items, n);
                    j(li, e).eq(n).remove();
                    j(div, e).eq(n).remove();
                    if (c === n) if (l === 1) m.call(e, 1, c - 1); else if (n === l - 1) i.call(this, c - 1); else i.call(this, c); else if (n < c) m.call(e, 1, c - 1);
                }
            }
        });
        const u = function (t, p) {
            const n = t + '';
            let index;
            if (p !== 'title' && /^[0-9]*$/.test(n) && t < this.items.length) index = Number(n);
            else {
                let f = -1, g = -1;
                j.each(this.items, function (k, v) {
                    if (p !== 'className' && f === -1 && n === v.title) f = k;
                    if (p !== 'title' && g === -1 && n === v.className) g = k;
                });
                index = f === -1 ? g : f;
            }
            return index;
        }
        const o = function (t, n) {
            let l = [];
            if (n < t.length)
                j.each(t, function (k, v) {
                    if (!!v) if (k < n) l[k] = v; else if (k > n) l[k - 1] = v;
                });
            return l;
        }
        const n = function () {
            if (!!!this.options.direction || this.options.direction !== 'vertical') this.options.direction = "horizontal";
            this.orginTab = [];
            this.items = this.options.items;
        }
        const l = function () {
            this.$el.html(t(this.options));
            const p = s.call(this);
            i.call(this, p);
        };
        const s = function () {
            const startPage = this.options.startPage;
            let g = 0;
            if (!!startPage) if (typeof startPage === "string" && /^\d+$/.test(startPage)) g = Number(startPage); else if (typeof startPage === "number") g = startPage;
            if (isNaN(g) || g >= this.items.length) g = 0;
            return g;
        };
        const f = function () {
            const that = this;
            const e = this.$el;
            j(li, e).each(function () {
                j(this).mouseenter(function () {
                    const index = j(this).index();
                    m.call(e, 0, index);
                    j(li + '.over', e).removeClass('over');
                    const tab = j(li, e).eq(index).addClass('over');
                    const bg = j('.tab-menu-bg li.tab-title-bg-white', e);
                    if (tab.hasClass('checked')) bg.addClass('over'); else bg.removeClass('over');
                }).mousedown(function () {
                    i.call(that, j(this).index());
                });
            });
            j('.tab-menus>div.tab-menu>ul.tab-menu-ul', e).mouseleave(function () {
                j('.tab-menus>div.tab-menu>ul>li.over', e).removeClass('over');
                const index = j(li + '.checked', e).index();
                m.call(e, 0, index);
            });
            e.on('click', li, j.proxy(function (i) {
                const data = that.items[j(i.target || i.currentTarget).closest("li").index()];
                this.trigger('change', i, data);
                if (data.click) data.click(i, data);
            }, this));
        };
        const w = function (e) {
            j(li + '.over', e).removeClass('over');
            const index = j(this).index();
            j(li + '.checked', e).removeClass("checked");
            j(this).addClass("checked");
            j(div, e).removeClass('show').eq(index).addClass('show');
            m.call(e, 1, index);
        }
        const i = function (d) {
            const e = this.$el;
            if (!!this.orginTab[d]) w.call(j(li, e).eq(d), e);
            else if (!!this.items[d]) {
                let r = this.items[d].render ? this.items[d].render(this.orginTab) : '';
                const c = !!this.items[d].className ? this.items[d].className : "";
                const v = j(div, e).eq(d).addClass(c);
                this.orginTab[d] = {content: r instanceof jQuery ? v.append(r) : typeof (r) !== 'object' ? v.html(r) : typeof (r) === 'object' ? v.append(r.content) : ''};
                j(li, e).filter('.checked').removeClass("checked");
                j(li, e).eq(d).addClass("checked");
                j(div + '.show', e).removeClass('show');
                v.addClass('show');
                m.call(e, 1, d);
            }
        };
        const m = function (b, i) {
            const bg = j('ul.tab-menu-bg>li', this), h = this.children('.tab-menus');
            let d;
            if (h.hasClass('horizontal')) d = ['left', 150]; else if (h.hasClass('vertical')) d = ['top', 42]; else return false;
            if (b >= 1) bg.eq(1).css(d[0], (i) * d[1] + 'px');
            if (b <= 1) bg.eq(0).css(d[0], (i) * d[1] + 'px');
        };
        return r;
    }
);
define('tab', ['jquery', 'components', 'tab_function'], function (j, c, t) {
    j.extend(t.prototype, c.temp, {
        componentsName: '选项卡',
        version: '1.2.3',
        author: 'kangjun',
        componentsDetail: '根据配置，在前端页面生成一个横向或纵向的选项卡。',
        componentsCode: c.code('this is a testing line//for test\n')
    });
    return t;
});
require(['components'], function (c) {
    c.insertStyle(
        '.tab-menus.horizontal > div.tab-menu > ul {\n' +
        '    height: 42px;\n' +
        '    width: 100%;\n' +
        '}\n' +
        '.tab-menus.vertical > div.tab-menu > ul.tab-menu-bg {\n' +
        '    height: inherit;\n' +
        '    width: 150px;\n' +
        '}\n' +
        '.tab-menus.vertical > div.tab-menu > ul.tab-menu-ul {\n' +
        '    width: 150px;\n' +
        '}\n' +
        '.tab-menus.vertical > div.tab-menu {\n' +
        '    height: 100%;\n' +
        '    float: left;\n' +
        '}\n' +
        '.tab-menus.vertical > div.tab-content {\n' +
        '    min-width: 150px;\n' +
        '    margin-left: 150px;\n' +
        '}\n' +
        '.tab-menus {\n' +
        '    margin: auto;\n' +
        '    position: absolute;\n' +
        '    width: inherit;\n' +
        '    height: inherit;\n' +
        '    border: 1px solid #009fe9;\n' +
        '}\n' +
        '.tab-menus > div.tab-content {\n' +
        '    height: 100%;\n' +
        '    overflow: auto;\n' +
        '}\n' +
        '.tab-menus > div.tab-menu > ul {\n' +
        '    float: left;\n' +
        '    margin: 0;\n' +
        '    padding: 0;\n' +
        '    min-width: 150px;\n' +
        '    overflow: hidden;\n' +
        '}\n' +
        '.tab-menus > div.tab-menu > ul.tab-menu-bg {\n' +
        '    z-index: -1;\n' +
        '    background-color: #009fe977;\n' +
        '    position: relative;\n' +
        '}\n' +
        '.tab-menus > div.tab-menu > ul.tab-menu-ul {\n' +
        '    position: absolute;\n' +
        '}\n' +
        '.tab-menus > div.tab-menu > ul > li {\n' +
        '    list-style: none;\n' +
        '    width: 140px;\n' +
        '    padding: 0 5px;\n' +
        '    float: left;\n' +
        '    height: auto;\n' +
        '}\n' +
        '.tab-menus > div.tab-menu > ul.tab-menu-ul > li {\n' +
        '    min-width: 100px;\n' +
        '    white-space: nowrap;\n' +
        '    overflow: hidden;\n' +
        '    text-overflow: ellipsis;\n' +
        '    line-height: 42px;\n' +
        '    text-align: center;\n' +
        '    cursor: pointer;\n' +
        '    color: #000;\n' +
        '}\n' +
        '.tab-menus > div.tab-menu > ul.tab-menu-bg > li {\n' +
        '    opacity: 1;\n' +
        '    left: 0;\n' +
        '    height: 42px;\n' +
        '    position: absolute;\n' +
        '    -webkit-transition: all .5s;\n' +
        '    -moz-transition: all .5s;\n' +
        '    -o-transition: all .5s;\n' +
        '    transition: all .5s\n' +
        '}\n' +
        'div.tab-menu > ul.tab-menu-bg > li.tab-title-bg-blue {\n' +
        '    background: #009fe9;\n' +
        '}\n' +
        '\n' +
        'div.tab-menu > ul.tab-menu-bg > li.tab-title-bg-white {\n' +
        '    background: #fff;\n' +
        '}\n' +
        'div.tab-menu > ul.tab-menu-bg > li.over {\n' +
        '    opacity: 0;\n' +
        '}\n' +
        'div.tab-menu > ul.tab-menu-ul > li.over {\n' +
        '    color: #fff;\n' +
        '}\n' +
        '.tab-menus > div.tab-content > div {\n' +
        '    display: none;\n' +
        '}\n' +
        '.tab-menus > div.tab-content > div.show {\n' +
        '    display: block;\n' +
        '}\n'
    );
})