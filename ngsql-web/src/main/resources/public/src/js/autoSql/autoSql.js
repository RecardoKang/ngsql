require(['checkbox'], function (Checkbox) {
    $(function () {
        // new Radio({
        //     el: '#testRadio',
        //     defaultValue: '1',
        //     items: [
        //         {
        //             label: '男',
        //             value: '1'
        //         }, {
        //             label: '女',
        //             value: '2'
        //         }
        //     ]
        // });
        const checkbox = new Checkbox({
            el: '#testCheckbox',//绑定的容器;必填
            title: '性别',//标题;可选
            type: 'radio',//类型,默认为radio,另可选填checkbox;可选
            defaultValue: '1',//初始化时默认选中的选项,多个值用逗号分隔;可选
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
                    label: '无',
                    value: '3'
                }
            ]
        });
        checkbox.on("change", function (e, data) {
            console.log(e);
            console.log(data);
        });
        checkbox.on('itemClick',function (e,data) {
            console.log(e);
            console.log(data);
        })
        const checkbox2 = new Checkbox({
            el: '#testCheckbox2',//绑定的容器;必填
            title: '国家',//标题;可选
            type: 'checkbox',//类型,默认为radio,另可选填checkbox;可选
            defaultValue: '1',//初始化时默认选中的选项,多个值用逗号分隔;可选
            disabled: '1',//初始化时需要禁用的选项,填对应选项的value值，多个值用逗号分隔;可选
            items: [//内容,list<map>
                {
                    className: 'china',//class;可选
                    label: '中国',//展示的选项;必填
                    value: '1'//选项对应的key,不可重复;必填
                }, {
                    label: '日本',
                    value: '2'
                }, {
                    label: '韩国',
                    value: '3'
                }
            ]
        });
        $(".getVersion").on('click', function () {
            console.log(checkbox.version);
        });
        $(".testDisabled").on('click', function () {
            checkbox.disabled();
        });
        $(".testDisabled1").on('click', function () {
            checkbox.disabled('1');
        });
        $(".testEnable").on('click', function () {
            checkbox.enable();
        });
        $(".testGet").on('click', function () {
            console.log(checkbox.get());
        });
        $(".testEnable1").on('click', function () {
            checkbox.enable('1');
        });
        $(".testDestroy").on('click', function () {
            checkbox.destroy();
        });
        $(".testCheck").on('click', function () {
            checkbox.check();
        });
        $(".testCheck1").on('click', function () {
            checkbox.check('1');
        });
        $(".testUncheck").on('click', function () {
            checkbox.uncheck();
        });
        $(".testUncheck1").on('click', function () {
            checkbox.uncheck('1');
        });
    })
})