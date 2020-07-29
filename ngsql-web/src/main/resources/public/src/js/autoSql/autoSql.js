require(['checkbox'], function (Checkbox) {
    $(function () {
        const checkbox = new Checkbox({
            el: '#testCheckbox',//绑定的容器;必填
            title: '操作类型',//标题;可选
            type: 'radio',//类型,默认为radio,另可选填checkbox;可选
            defaultValue: '',//初始化时默认选中的选项,多个值用逗号分隔;可选
            disabled: '',//初始化时需要禁用的选项,填对应选项的value值，多个值用逗号分隔;可选
            items: [//内容,list<map>
                {
                    className: '',//class;可选
                    label: 'insert',//展示的选项;必填
                    value: '1'//选项对应的key,不可重复;必填
                }, {
                    label: 'update',
                    value: '2'
                }, {
                    label: 'delete',
                    value: '3'
                }, {
                    label: 'create',
                    value: '4'
                }, {
                    label: 'alter',
                    value: '5'
                }
            ]
        });
    })
})