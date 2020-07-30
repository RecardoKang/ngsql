require(['radios'], function (Radio) {
    $(function () {
        new Radio({
            el: '#radio',
            items: [
                {
                    value: '1',
                    label: 'man'
                },
                {
                    value: '2',
                    label: 'woman'
                }
            ]
        })
    })
})