define('testRadio', [], function (config) {
    const config_default = {
        el: '',
        color: '#ff0000'
    };
    return function () {
        const con = $.extend(config_default, config);
        if (!!config_default.el) {
            $(con.el).html('<span style="color: ' + config_default.color + '">test</span>>')
        }
    }
})