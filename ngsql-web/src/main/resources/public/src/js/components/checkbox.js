/**
 *
 * @author kangjun
 * @desc checkbox组件使用示例及说明
 * @version 1.1.3
 *
 */
require(['checkbox'], function (Checkbox) {
    $(function () {
        const checkbox = new Checkbox({
            el: '#testRadio',//绑定的容器;必填
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
                    label: '无',
                    value: '3'
                }
            ]
        });
        checkbox.on("change", function (data) {
            console.log(data);
        });
        $(".radio>.getVersion").on('click', function () {
            console.log(checkbox.version);
        });
        $(".radio>.testDisabled").on('click', function () {
            checkbox.disabled();
        });
        $(".radio>.testDisabled1").on('click', function () {
            checkbox.disabled('1');
        });
        $(".radio>.testEnable").on('click', function () {
            checkbox.enable();
        });
        $(".radio>.testGet").on('click', function () {
            console.log(checkbox.get());
        });
        $(".radio>.testEnable1").on('click', function () {
            checkbox.enable('1');
        });
        $(".radio>.testDestroy").on('click', function () {
            checkbox.destroy();
        });
        $(".radio>.testCheck").on('click', function () {
            checkbox.check();
        });
        $(".radio>.testCheck1").on('click', function () {
            checkbox.check('1');
        });
        $(".radio>.testUncheck").on('click', function () {
            checkbox.uncheck();
        });
        $(".radio>.testUncheck1").on('click', function () {
            checkbox.uncheck('1');
        });
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
        checkbox2.on("change", function (data) {
            console.log(data);
        });
        $(".checkbox>.getVersion").on('click', function () {
            console.log(checkbox2.version);
        });
        $(".checkbox>.testDisabled").on('click', function () {
            checkbox2.disabled();
        });
        $(".checkbox>.testDisabled1").on('click', function () {
            checkbox2.disabled('1');
        });
        $(".checkbox>.testEnable").on('click', function () {
            checkbox2.enable();
        });
        $(".checkbox>.testGet").on('click', function () {
            console.log(checkbox2.get());
        });
        $(".checkbox>.testEnable1").on('click', function () {
            checkbox2.enable('1');
        });
        $(".checkbox>.testDestroy").on('click', function () {
            checkbox2.destroy();
        });
        $(".checkbox>.testCheck").on('click', function () {
            checkbox2.check();
        });
        $(".checkbox>.testCheck1").on('click', function () {
            checkbox2.check('1');
        });
        $(".checkbox>.testUncheck").on('click', function () {
            checkbox2.uncheck();
        });
        $(".checkbox>.testUncheck1").on('click', function () {
            checkbox2.uncheck('1');
        });
    })
})