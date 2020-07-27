require([ 'checkbox'], function ( Checkbox) {
    $(function () {
        // new Radio({
        //     el: '#testRadio',
        //     defaultValue: '1',
        //     items: [
        //         {
        //             label: '男',
        //             value: '1'
        //         }, {
        //             label: '女',
        //             value: '2'
        //         }
        //     ]
        // });
        new Checkbox({
            el: '#testCheckbox',
            items: [
                {
                    label: '男',
                    value: '1'
                }, {
                    label: '女',
                    value: '2'
                }
            ]
        })
    })
})