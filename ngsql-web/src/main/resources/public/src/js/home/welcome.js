/*
* @desc:主页面功能
* @author:天下一番
* @creatTime:2020-5-12
 */
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
});