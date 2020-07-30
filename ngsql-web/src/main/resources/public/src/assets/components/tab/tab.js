define('components/tab/tab.tpl', ['handlebars'], function (h) {
    return h.template({
        main: function () {

        }
    });
})
define('tab', ['jquery', 'eventTarget', 'handlebars', 'components/tab/tab.tpl', 'components'], function (j, e, h, t, c) {
    const version = "0.1.3";
    let r = function () {
        j.extend(this.prototype, c.getEl.call(this, e));
    }
    j.extend(r.prototype, e.prototype, {
        version: version,
        author: 'kangjun',
        get: function () {
            return j('')
        }
    });
    return r;
});
require(['components'], function (c) {
    c.insertStyle("        .tab-menus {\n" +
        "            margin: auto;\n" +
        "            border: 1px solid #009fe9;\n" +
        "        }\n" +
        "\n" +
        "        .tab-menus ul {\n" +
        "            height: 42px;\n" +
        "            width: 100%;\n" +
        "            position: relative;\n" +
        "            float: left;\n" +
        "            margin: 0;\n" +
        "            padding: 0;\n" +
        "            min-width: 150px;\n" +
        "            overflow: hidden;\n" +
        "        }\n" +
        "\n" +
        "        .tab-menus ul.tab-menu-bg {\n" +
        "            z-index: -1;\n" +
        "            background-color: #009fe977;\n" +
        "        }\n" +
        "\n" +
        "        .tab-menus ul.tab-menu-ul {\n" +
        "            top: -42px\n" +
        "        }\n" +
        "\n" +
        "        .tab-menus li {\n" +
        "            list-style: none;\n" +
        "            width: 140px;\n" +
        "            padding: 0 5px;\n" +
        "            float: left;\n" +
        "            height: inherit;\n" +
        "        }\n" +
        "\n" +
        "        .tab-menus .tab-menu-ul > li {\n" +
        "            min-width: 100px;\n" +
        "            white-space: nowrap;\n" +
        "            overflow: hidden;\n" +
        "            text-overflow: ellipsis;\n" +
        "            line-height: 40px;\n" +
        "            text-align: center;\n" +
        "            cursor: pointer;\n" +
        "            color: #000;\n" +
        "        }\n" +
        "\n" +
        "        .tab-menus li.bg {\n" +
        "            position: absolute;\n" +
        "            -webkit-transition: all .5s;\n" +
        "            -moz-transition: all .5s;\n" +
        "            -o-transition: all .5s;\n" +
        "            transition: all .5s\n" +
        "        }\n" +
        "\n" +
        "        .tab-menus .bg-blue {\n" +
        "            background: #009fe9;\n" +
        "        }\n" +
        "\n" +
        "        .tab-menus .bg-white {\n" +
        "            background: #fff;\n" +
        "        }\n" +
        "\n" +
        "        .tab-menus .tab {\n" +
        "            display: none;\n" +
        "        }\n" +
        "\n" +
        "        .tab-menus .tab.show {\n" +
        "            display: block;\n" +
        "        }\n");
})