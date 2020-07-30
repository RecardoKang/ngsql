require(['tab'], function (Tab) {
    $(function () {
        let index = 1;
        let checked = 1;
        // $('.menus3 li')
        $('.menus3 li').each(function () {
            $(this).mouseenter(function () {
                index = $(this).index();
                $('.menus3 .bg').css('left', (index - 1) * 150 + 'px');
                $('.menus3 li').css('color', '#000');
                $(this).css('color', '#fff');
            }).mousedown(function () {
                $('.menus3 li').removeClass("checked");
                $(this).addClass("checked");
                $('.tab2').removeClass('show').eq(index - 1).addClass('show');
                checked = index;
            });
        }).eq(index).addClass("checked");
        $('.menus3>ul').mouseleave(function () {
            $('.menus3 .bg').css('left', (checked - 1) * 150 + 'px');
            $('.menus3 li').css('color', '#000');
            $(this.children[checked]).css('color', '#fff');
        });
    });
})