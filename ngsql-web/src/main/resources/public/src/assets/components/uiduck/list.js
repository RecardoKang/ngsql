;(function webpackUniversalModuleDefinition(root, factory) {
    // Webpack通用模块定义
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["Mock"] = factory();
    else
        root["Mock"] = factory();
})(this, function factory() {
    return (function (modules) {
        var installedModules = {};
        // 公用加载函数
        // 模块注册后绑定module、__webpack_require__
        function __webpack_require__(moduleId) {

            if(installedModules[moduleId])
                return installedModules[moduleId].exports;

            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            // 携带当前库、加载函数
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;

            return module.exports;
        }

        return __webpack_require__('init'); // 初始化构建
    })({
        // 初始化插件、对外抛出
        init: function (module, exports, __webpack_require__) {
            var utils = __webpack_require__('utils');
            var Mock = {
                _toString: utils.toString,
            }
            module.exports = Mock
        }
        , utils: function (module, exports, __webpack_require__) {
            module.exports = {
                toString: __webpack_require__('handle')
            }
        }
        , handle: function (module, exports, __webpack_require__) {
            module.exports = function (target) {
                return target.toString()
            }
        }
    })
});

console.log(Mock._toString(["1", "2", "3"]));