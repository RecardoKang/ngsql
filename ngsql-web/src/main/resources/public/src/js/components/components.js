require(['tab', 'checkbox', 'handlebars', 'text!tpl/components/components.tpl'], function (Tab, Checkbox, hdb, tpl) {
    $(function () {
        const template = hdb.compile(tpl);
        const tab = new Tab({
            el: '#content',
            direction: 'vertical',
            items: [
                {
                    title: 'checkbox',
                    render: function () {
                        return template(Checkbox.prototype.illustration);
                    }
                }, {
                    title: 'tab',
                    render: function () {
                        return template(Tab.prototype.illustration);
                    }
                }
            ]
        });
    });
});