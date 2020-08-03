require(['tab', 'checkbox', 'handlebars', 'text!tpl/components/components.tpl'], function (Tab, Checkbox, hdb, tpl) {
    $(function () {
        const tab = new Tab({
            el: '#content',
            direction: 'vertical',
            items: [
                {
                    title: 'checkbox',
                    className: 'components-detail',
                    render: function () {
                        const template = hdb.compile(tpl);
                        return template(Checkbox.prototype);
                    }
                }, {
                    title: 'tab',
                    render: function () {
                        return 'tab';
                    }
                }
            ]
        });
    });
});