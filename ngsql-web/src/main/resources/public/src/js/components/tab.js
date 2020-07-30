require(['jquery'], function () {
    $(function () {
        $('.menus3 li').each(function () {
            $(this).mouseenter(function () {
                const index = $(this).index();
                move.call($('.menus3 .bg-blue'), index);
            }).mousedown(function () {
                const index = $(this).index();
                $('.menus3 li.checked').removeClass("checked");
                $(this).addClass("checked");
                $('.tab2').removeClass('show').eq(index).addClass('show');
                move.call($('.menus3 .bg-white'), index);
            });
        });
        $('.menus3>ul').mouseleave(function () {
            const index = $('.menus3 li.checked').index();
            move.call($('.menus3 .bg-blue'), index);
        });

        function move(index) {
            this.css('left', (index) * 150 + 'px');
        }
    });
})