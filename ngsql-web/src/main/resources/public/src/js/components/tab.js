require(['jquery'], function () {
    $(function () {
        $('.tab-menus li').each(function () {
            $(this).mouseenter(function () {
                const index = $(this).index();
                move.call($('.tab-menu-bg li.tab-title-bg-blue'), index);
            }).mousedown(function () {
                const index = $(this).index();
                $('.tab-menu-ul li.checked').removeClass("checked");
                $(this).addClass("checked");
                $('.tab-menus>.tab-context').removeClass('show').eq(index).addClass('show');
                move.call($('.tab-menu-bg li.tab-title-bg-white'), index);
            });
        });
        $('.tab-menus>ul').mouseleave(function () {
            const index = $('.tab-menu-ul li.checked').index();
            move.call($('.tab-menu-bg li.tab-title-bg-white'), index);
        });

        function move(index) {
            this.css('left', (index) * 150 + 'px');
        }
    });
})