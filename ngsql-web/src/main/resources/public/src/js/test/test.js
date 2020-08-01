require(['tab','checkbox'], function (Tab,Checkbox) {
    $(function () {

        // const move = function ($el) {
        //     $('div.tab-menu>ul.tab-menu-ul li', $el).each(function () {
        //         $(this).mouseenter(function () {
        //             const index = $(this).index();
        //             m.call($el, 'blue', index);
        //             $('ul.tab-menu-ul li.over', $el).removeClass('over');
        //             const tab = $('.tab-menu-ul li', $el).eq(index).addClass('over');
        //             const bg = $('.tab-menu-bg li.tab-title-bg-white', $el);
        //             if (tab.hasClass('checked')) {
        //                 bg.addClass('over');
        //             } else {
        //                 bg.removeClass('over');
        //             }
        //         }).mousedown(function () {
        //             w.call(this, $el);
        //         });
        //     });
        //     $('div.tab-menu>ul.tab-menu-ul', $el).mouseleave(function () {
        //         $('div.tab-menu>ul li.over', $el).removeClass('over');
        //         const index = $('.tab-menu-ul li.checked', $el).index();
        //         m.call($el, 'blue', index);
        //     });
        // }
        // const m = function (b, i) {
        //     const bg = $('.tab-menu-bg li.tab-title-bg-' + b, this);
        //     if (this.hasClass('horizontal')) {
        //         bg.css('left', (i) * 150 + 'px');
        //     } else if (this.hasClass('vertical')) {
        //         bg.css('top', (i) * 42 + 'px');
        //     }
        // };
        // const w = function (e) {
        //     $('ul.tab-menu-ul li.over', e).removeClass('over');
        //     const index = $(this).index();
        //     $('.tab-menu-ul li.checked', e).removeClass("checked");
        //     $(this).addClass("checked");
        //     $('div.tab-content>div', e).removeClass('show').eq(index).addClass('show');
        //     m.call(e, 'white', index);
        //     m.call(e, 'blue', index);
        // }
        //
        // const $el = $('#testTab>.horizontal');
        // const $el2 = $('#testTab2>.vertical');
        // move.call(this, $el);
        // move.call(this, $el2);

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
                        }, {
                            title: 'tab4',
                            render: function () {
                                return "<div>\n" +
                                    "                <img src=\"../../assets/img/link/home.ico\"/>\n" +
                                    "            </div>";
                            }
                        }
                    ]
                });
                tab.on('change', function () {
                    console.log("切换了页签");
                });
        const tab2 = new Tab({
            el: '#testTab2',
            startPage: '2',
            direction:'vertical',
            items: [
                {
                    title: '',
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
                        const a = $('<a href="javascript:">跳转到第四页</a>');
                        a.on('click', function () {
                            tab2.switchTab("3");
                        })
                        return a;
                    }
                }, {
                    title: 'tab4',
                    render: function () {
                        return "<div>\n" +
                            "                <img src=\"../../assets/img/link/home.ico\"/>\n" +
                            "            </div>";
                    }
                }
            ]
        });
    });
})