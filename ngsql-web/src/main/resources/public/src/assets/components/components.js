define("components", ['jquery', 'common'], function (j, c) {
    return j.extend(this.prototype, {
        author: 'kangjun', insertStyle: function (s) {
            return (function (e) {
                const i = document, l = "appendChild", n = "styleSheet", a = i.createElement("style");
                i.getElementsByTagName("head")[0][l](a);
                a[n] ? a[n].cssText = e : a[l](i.createTextNode(e))
            })(s)
        }, getEl: function (l) {
            const c = function (e) {
                return !!e.tagName
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
            let id = !!l.el ? l.el : "";
            id = id.replace(new RegExp("\\.|#|\\[|]\\(|\\)", "g"), "") + "-id" + Math.floor(Math.random() * 1000000 + 1);
            l.id = id;
            if (l.type !== "checkbox") {
                l.type = "radio"
            }
            this.options = l;
            return this
        }, temp: {
            version: '1.0.0',
            author: 'kangjun',
            fun: [{
                name: 'version',
                code: '<span class="key">var</span> version <span class="key">=</span> checkbox.version;<span class="note">//获取版本号</span>'
            }]
        }, code: function (s) {
            if (typeof s === "string" && s.length > 0) {
                const tag = c.htmlTag.join("|");
                return s
                    .replace(new RegExp('(.*?)(<|</)([' + tag + ']+)(.*?[^>]*)(>|>/).*?', 'g'),
                        function ($, $1, $2, $3, $4, $5) {
                            return $1 + '<span class="key">' + ($2 === '<' ? '&lt;' : '&lt;/') +
                                '</span><span class="tag">' + $3 + '</span>' + $4 + '<span class="key">' +
                                ($5 === '>' ? '&gt;' : '/&gt;') + '</span>';
                        }
                    )
                    .replace(new RegExp('(.*?)(\'+.*?[^\']\'+)(.*?)', 'g'),
                        '$1<span class="str">$2</span>$3'
                    )
                    .replace(new RegExp('(var|let|const|return|new|function|:|!)', 'g'), '<span class="key">$1</span\>')
                    .replace(new RegExp('(render|click|log|console)', 'g'), '<span class="fun">$1</span\>')
                    .replace(new RegExp('(//(.*))', 'g'), '<span class="note">$1</span\>')
                    .replace(new RegExp('(.*?)(&nbsp;)([1-9]*)(.*?)', 'g'),
                        function ($, $1, $2, $3, $4) {
                            let space = '';
                            if (!isNaN($3)) {
                                let i = 1;
                                for (; i < $3; i++) {
                                    space += '&nbsp;';
                                }
                            }
                            return $1 + $2 + space + ($4);
                        }
                    )
                    .replace(new RegExp('\n', 'g'), "<br>")
                    ;
            }
        }
    })
});