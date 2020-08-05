/*
* 用于存放公共静态数据
* @author kangjun
 */
define('common', ['jquery'], function (j) {
    return j.extend(this.prototype, {
        //有结束标签的html标签
        htmlTag: ['a', 'div', 'dt', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'html', 'i', 'iframe', 'input', 'label',
            'li', 'p', 'script', 'style', 'table', 'tbody', 'td', 'textarea', 'th', 'thead'],
        //没有结束标签的html标签
        htmlTag2: ['input', 'br', 'hr', 'img', 'option', 'meta', 'link']
    });
});