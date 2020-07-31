require(['tab', 'checkbox'], function (Tab, Checkbox) {
    $(function () {
        const tab = new Tab({
            el: '#testTab',
            startPage: '2',
            items: [
                {
                    title: 'tab1',
                    className: 'tab',
                    render: function () {
                        return new Checkbox({
                            title: '性别',//标题;可选
                            type: 'radio',//类型,默认为radio,另可选填checkbox;可选
                            disabled: '1',//初始化时需要禁用的选项,填对应选项的value值，多个值用逗号分隔;可选
                            items: [//内容,list<map>
                                {
                                    className: '',//class;可选
                                    label: '男',//展示的选项;必填
                                    value: '1'//选项对应的key,不可重复;必填
                                }, {
                                    label: '女',
                                    value: '2'
                                }, {
                                    label: '未知',
                                    value: '3'
                                }
                            ]
                        }).$el;
                    }
                },
                {
                    title: 'tab2',
                    className: 'tab2',
                    render: function () {
                        return "tab2";
                    },
                    click: function () {
                        console.log("点击了tab2");
                    }
                }, {
                    title: 'tab3',
                    render: function () {
                        const a = $('<a href="javascript:">跳转到第二页</a>');
                        a.on('click', function () {
                            tab.switchTab("1");
                        })
                        return a;
                    }
                }
            ]
        });
        tab.on('change', function () {
            console.log("切换了页签");
        })
    });
})