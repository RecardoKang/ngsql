/*
* @desc:主页面功能
* @author:天下一番
* @creatTime:2020-5-12
 */
require.config({
    // baseURI: "../../",
    paths: {
        "list": "../../assets/components/list/js/uiduck"
    }
})
require(['list'], function (List) {
    $(function () {
        window.onblur = function (e) {
            document.title = "记得回来哦(*╹▽╹*)";
        };

        window.onfocus = function (e) {
            document.title = "你回来啦(*^▽^*)";
            setTimeout(function () {
                document.title = "自动化脚本";
            }, 2000);
        };

        // $('.login').on('click', function (e) {
        //     alert("功能暂未开放!!!");
        // });

        $('.start').on('click', function (e) {
            $.ajax({
                url: '/welcome/test/ajax',
                data: null,
                type: 'POST',
                success: function (result) {
                    $('textarea').html(result);
                },
                error: function (e) {
                    $('textarea').html(e);
                }
            })
        })

        uiduck.setOptions({
            templateId: "table",
            url: {url: "http://data.live.126.net/livechannel/sub/3.json", type: "POST", key: "sublives"},
            loading: {icon: "uiduck-loading-6"},
            page: true,
            pageOptions: {limit: 5, limits: ['5', '10', '15', '20', '25']},
            fieldOptions: [
                {
                    index: true,
                    title: "序号"
                },
                {
                    key: "cid",
                    title: "ID"
                }, {
                    key: "cname",
                    title: "类型"
                }, {
                    key: "collectionId",
                    title: "测试",
                    type: "map",
                    computed: {
                        "0": "李白",
                        "1": "杜甫",
                        "2": "白居易",
                        "3": "王安石"
                    }
                }, {
                    key: "icon",
                    title: "图标",
                    type: "image",
                    width: "30px",
                    height: "30px"
                }, {
                    key: "ename",
                    title: "名称"
                },
                {
                    key: "tid",
                    title: "TID"
                }, {
                    key: "tname",
                    title: "节目名称"
                }]
        });
    });
});