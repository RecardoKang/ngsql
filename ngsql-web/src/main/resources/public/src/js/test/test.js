require(['tab'], function (Tab) {
    $(function () {
        $('.tab-menus li').each(function () {
            $(this).mouseenter(function () {
                const index = $(this).index();
                move.call($('.tab-menus .bg-blue'), index);
            }).mousedown(function () {
                const index = $(this).index();
                $('.tab-menus li.checked').removeClass("checked");
                $(this).addClass("checked");
                $('.tab2').removeClass('show').eq(index).addClass('show');
                move.call($('.tab-menus .bg-white'), index);
            });
        });
        $('.tab-menus>ul').mouseleave(function () {
            const index = $('.tab-menus li.checked').index();
            move.call($('.tab-menus .bg-blue'), index);
        });

        function move(index) {
            this.css('left', (index) * 150 + 'px');
        }
    });
})