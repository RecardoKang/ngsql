/**
 * 组件公共方法
 */
define("components", ['jquery'], function (j) {
    return j.extend(this.prototype, {
        insertStyle: function (s) {
            return (function (e) {
                    const i = document, l = "appendChild", n = "styleSheet", a = i.createElement("style");
                    a.type = "text/css";
                    i.getElementsByTagName("head")[0][l](a);
                    a[n] ? a[n].cssText = e : a[l](i.createTextNode(e));
                }
            )(s);
        }
    })
});