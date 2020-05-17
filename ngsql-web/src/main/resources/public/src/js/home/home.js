uiduck.setOptions({
    templateId: "table",
    url: { url: "http://data.live.126.net/livechannel/sub/3.json", type: "POST", key: "sublives" },
    loading: { icon: "uiduck-loading-5" },
    page: true,
    pageOptions: { limit: 5, limits: ['5', '10', '15', '20', '25'] },
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
function getRow(e) {
    alert(JSON.stringify(uiduck.getRow(e)))
}
function changeTheme(e) {
    $("#ud-top").css('display', 'none');
    var arr = ["uiDuck-table", "uiDuck-dark", "uiDuck-led", "uiDuck-pink", "uiDuck-coffee", "uiDuck-blue", "uiDuck-purple", "uiDuck-white"];
    var theme = arr[Math.floor((Math.random() * arr.length))];
    uiduck.setOptions({
        templateId: "table",
        url: { url: "http://data.live.126.net/livechannel/sub/3.json", type: "POST", key: "sublives" },
        style: { tbClass: theme },
        rightTool: { templateId: "barDemo", title: "操作", width: "100px" },
        loading: { icon: "uiduck-loading-6" },
        page: true,
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
            },
            {
                key: "icon",
                title: "图标",
                type: "image",
                width: "30px",
                height: "30px"
            }, {
                key: "ename",
                title: "名称"
            }, {
                key: "tid",
                title: "TID"
            }, {
                key: "tname",
                title: "节目名称"
            }]
    });
}
function changeLoading(e) {
    $("#ud-top").css('display', 'none');
    var arr = ["uiduck-loading-1", "uiduck-loading-2", "uiduck-loading-3", "uiduck-loading-4", "uiduck-loading-5", "uiduck-loading-6", "uiduck-loading-7", "uiduck-loading-8", "uiduck-loading-9", "uiduck-loading-10", "uiduck-loading-11"];
    var loading = arr[Math.floor((Math.random() * arr.length))];
    uiduck.setOptions({
        templateId: "table",
        url: { url: "http://data.live.126.net/livechannel/sub/3.json", type: "POST", key: "sublives" },
        style: { tbClass: "uiDuck-table" },
        loading: { icon: loading, time: 1000 },
        page: true,
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
                key: "ename",
                title: "名称"
            }, {
                key: "icon",
                title: "图标",
                type: "image",
                width: "30px",
                height: "30px"
            }, {
                key: "tid",
                title: "TID"
            }, {
                key: "tname",
                title: "节目名称"
            }]
    });
}
function changeShade(e) {
    $("#ud-top").css('display', 'none');
    uiduck.setOptions({
        templateId: "table",
        url: { url: "http://data.live.126.net/livechannel/sub/3.json", type: "POST", key: "sublives" },
        style: { tbClass: "uiDuck-table" },
        loading: { icon: "uiduck-loading-6", shade: 0.3, shadeColor: "black", time: 1000 },
        page: true,
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
                key: "ename",
                title: "名称"
            }, {
                key: "icon",
                title: "图标",
                type: "image",
                width: "30px",
                height: "30px"
            }, {
                key: "tid",
                title: "TID"
            }, {
                key: "tname",
                title: "节目名称"
            }]
    });
}
function changeLanguage(e) {
    $("#ud-top").css('display', 'none');
    var arr = ["Chinese", "English", "Japanese", "French", "Korean", "Spanish"];
    var tag = arr[Math.floor((Math.random() * arr.length))];
    uiduck.setOptions({
        templateId: "table",
        url: { url: "http://data.live.126.net/livechannel/sub/3.json", type: "POST", key: "sublives" },
        style: { tbClass: "uiDuck-table" },
        language: { tag: tag },
        loading: { icon: "uiduck-loading-6", time: 1000 },
        page: true,
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
            }, {
                key: "tid",
                title: "TID"
            }, {
                key: "tname",
                title: "节目名称"
            }]
    });
}
function changeBlur(e) {
    $("#ud-top").css('display', 'none');
    uiduck.setOptions({
        templateId: "table",
        url: { url: "http://data.live.126.net/livechannel/sub/3.json", type: "POST", key: "sublives" },
        style: { tbClass: "uiDuck-table" },
        loading: { icon: "uiduck-loading-6", blur: 4, time: 1000 },
        page: true,
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
            }, {
                key: "tid",
                title: "TID"
            }, {
                key: "tname",
                title: "节目名称"
            }]
    });
}
function simplePage(e) {
    $("#ud-top").css('display', 'none');
    uiduck.setOptions({
        templateId: "table",
        url: { url: "http://data.live.126.net/livechannel/sub/3.json", type: "POST", key: "sublives" },
        loading: { icon: "uiduck-loading-6", time: 1000 },
        page: true,
        pageOptions: { layout: ["total",  "prev", "next", "last"] },
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
                key: "ename",
                title: "名称"
            }, {
                key: "icon",
                title: "图标",
                type: "image",
                width: "30px",
                height: "30px"
            }, {
                key: "tid",
                title: "TID"
            }, {
                key: "tname",
                title: "节目名称"
            }]
    });
}
function fullPage(e) {
    $("#ud-top").css('display', 'none');
    uiduck.setOptions({
        templateId: "table",
        url: { url: "http://data.live.126.net/livechannel/sub/3.json", type: "POST", key: "sublives" },
        style: { tbClass: "uiDuck-table" },
        loading: { icon: "uiduck-loading-6", time: 1000 },
        page: true,
        pageOptions: { limit: 5, limits: ['5', '10', '15', '20', '25'], layout: ["total", "home", "prev", "next", "last", "set", "jump"], dataType: "front" },
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
                key: "ename",
                title: "名称"
            }, {
                key: "icon",
                title: "图标",
                type: "image",
                width: "30px",
                height: "30px"
            }, {
                key: "tid",
                title: "TID"
            }, {
                key: "tname",
                title: "节目名称"
            }]
    });
}

function netData(e) {
    $("#ud-top").css('display', 'none');
    uiduck.setOptions({
        templateId: "table",
        url: { url: "http://data.live.126.net/livechannel/sub/3.json", type: "POST", key: "sublives" },
        style: { tbClass: "uiDuck-table" },
        rightTool: { templateId: "barDemo", title: "操作", width: "100px" },
        loading: { icon: "uiduck-loading-6", time: 1000 },
        page: true,
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
                key: "ename",
                title: "名称"
            }, {
                key: "icon",
                title: "图标",
                type: "image",
                width: "30px",
                height: "30px"
            }, {
                key: "tid",
                title: "TID"
            }, {
                key: "tname",
                title: "节目名称"
            }]
    });
}

function localData(e) {
    $("#ud-top").css('display', 'none');
    uiduck.setOptions({
        templateId: "table",
        style: { tbClass: "uiDuck-table" },
        topBar: { templateId: "search", kwLight: true },
        rightTool: { templateId: "barDemo", title: "操作", width: "100px" },
        loading: { icon: "uiduck-loading-6", time: 1000 },
        page: true,
        fieldOptions: [
            {
                index: true,
                title: "序号"
            },
            {
                key: "icon",
                title: "头像",
                type: "image",
                width: "50px",
                height: "50px"
            }, {
                key: "name",
                title: "作者名称"
            }, {
                key: "emil",
                title: "邮箱"
            }, {
                key: "wechat",
                title: "微信"
            }, {
                key: "age",
                title: "年龄"
            }, {
                key: "sex",
                title: "年龄",
                type: "map",
                computed: {
                    "0": "女",
                    "1": "男"
                }
            }, {
                key: "school",
                title: "学校",
                type: "map",
                computed: {
                    "0": "家里跳",
                    "1": "家里躺",
                    "2": "家里蹲"
                }
            }, {
                key: "city",
                title: "城市",
                type: "map",
                computed: {
                    "0": "杭州",
                    "1": "北京",
                    "2": "上海",
                    "3": "青岛"
                }
            }, {
                key: "like",
                title: "爱好",
                type: "map",
                computed: {
                    "0": "骑车",
                    "1": "游泳"
                }
            }]
    });
    var data = [{
        "icon": "/src/assets/components/uiduck/assets/head.jpg",
        "name": "nciezz",
        "emil": "hzdz163@163.com",
        "wechat": "wenxuejn",
        "age": "24",
        "sex": 1,
        "school": 2,
        "city": 3,
        "like": 1
    }, {
        "icon": "/src/assets/components/uiduck/assets/head.jpg",
        "name": "nciezz",
        "emil": "hzdz163@163.com",
        "wechat": "wenxuejn",
        "age": "24",
        "sex": 1,
        "school": 1,
        "city": 3,
        "like": 1
    }, {
        "icon": "/src/assets/components/uiduck/assets/head.jpg",
        "name": "nciezz",
        "emil": "hzdz163@163.com",
        "wechat": "wenxuejn",
        "age": "24",
        "sex": 1,
        "school": 2,
        "city": 3,
        "like": 1
    }, {
        "icon": "/src/assets/components/uiduck/assets/head.jpg",
        "name": "nciezz",
        "emil": "hzdz163@163.com",
        "wechat": "wenxuejn",
        "age": "24",
        "sex": 1,
        "school": 2,
        "city": 3,
        "like": 1
    }, {
        "icon": "/src/assets/components/uiduck/assets/head.jpg",
        "name": "nciezz",
        "emil": "hzdz163@163.com",
        "wechat": "wenxuejn",
        "age": "24",
        "sex": 1,
        "school": 0,
        "city": 3,
        "like": 1
    }, {
        "icon": "/src/assets/components/uiduck/assets/head.jpg",
        "name": "nciezz",
        "emil": "hzdz163@163.com",
        "wechat": "wenxuejn",
        "age": "24",
        "sex": 1,
        "school": 2,
        "city": 3,
        "like": 1
    }]
    uiduck.setData(data, false);
}
function highlight() {
    $("#ud-top").css('display', 'block');
    setData();
}
function autoNext() {
    $("#ud-top").css('display', 'none');
    uiduck.setOptions({
        templateId: "table",
        url: { url: "http://data.live.126.net/livechannel/sub/3.json", type: "POST", key: "sublives" },
        style: { tbClass: "uiDuck-table" },
        autoNext: { time: 4000 },
        loading: { icon: "uiduck-loading-6", blur: 1, time: 1000 },
        page: true,
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
                key: "ename",
                title: "名称"
            }, {
                key: "icon",
                title: "图标",
                type: "image",
                width: "30px",
                height: "30px"
            }, {
                key: "tid",
                title: "TID"
            }, {
                key: "tname",
                title: "节目名称"
            }]
    });
}
function setData() {
    uiduck.setOptions({
        templateId: "table",
        style: { size: "mini", stripe: false, highlight: true, tbClass: "uiDuck-table" },
        topBar: { templateId: "search", kwLight: true },
        rightTool: { templateId: "barDemo", title: "操作", width: "100px" },
        loading: { icon: "uiduck-loading-6", time: 1000 },
        page: true,
        fieldOptions: [
            {
                index: true,
                title: "序号"
            },
            {
                key: "icon",
                title: "头像",
                type: "image",
                width: "50px",
                height: "50px"
            }, {
                key: "name",
                title: "作者名称"
            }, {
                key: "emil",
                title: "邮箱"
            }, {
                key: "wechat",
                title: "微信"
            }, {
                key: "age",
                title: "年龄"
            }, {
                key: "sex",
                title: "年龄",
                type: "map",
                computed: {
                    "0": "女",
                    "1": "男"
                }
            }, {
                key: "school",
                title: "学校",
                type: "map",
                computed: {
                    "0": "家里跳",
                    "1": "家里躺",
                    "2": "家里蹲"
                }
            }, {
                key: "city",
                title: "城市",
                type: "map",
                computed: {
                    "0": "杭州",
                    "1": "北京",
                    "2": "上海",
                    "3": "青岛"
                }
            }, {
                key: "like",
                title: "爱好",
                type: "map",
                computed: {
                    "0": "骑车",
                    "1": "游泳"
                }
            }]
    });
    var data = [{
        "icon": "/src/assets/components/uiduck/assets/head.jpg",
        "name": "nciezz",
        "emil": "hzdz163@163.com",
        "wechat": "wenxuejn",
        "age": "24",
        "sex": 1,
        "school": 2,
        "city": 3,
        "like": 1
    }, {
        "icon": "/src/assets/components/uiduck/assets/head.jpg",
        "name": "nciezz",
        "emil": "hzdz163@163.com",
        "wechat": "wenxuejn",
        "age": "24",
        "sex": 1,
        "school": 1,
        "city": 3,
        "like": 1
    }, {
        "icon": "/src/assets/components/uiduck/assets/head.jpg",
        "name": "nciezz",
        "emil": "hzdz163@163.com",
        "wechat": "wenxuejn",
        "age": "24",
        "sex": 1,
        "school": 2,
        "city": 3,
        "like": 1
    }, {
        "icon": "/src/assets/components/uiduck/assets/head.jpg",
        "name": "nciezz",
        "emil": "hzdz163@163.com",
        "wechat": "wenxuejn",
        "age": "24",
        "sex": 1,
        "school": 2,
        "city": 3,
        "like": 1
    }, {
        "icon": "/src/assets/components/uiduck/assets/head.jpg",
        "name": "nciezz",
        "emil": "hzdz163@163.com",
        "wechat": "wenxuejn",
        "age": "24",
        "sex": 1,
        "school": 0,
        "city": 3,
        "like": 1
    }, {
        "icon": "/src/assets/components/uiduck/assets/head.jpg",
        "name": "nciezz",
        "emil": "hzdz163@163.com",
        "wechat": "wenxuejn",
        "age": "24",
        "sex": 1,
        "school": 2,
        "city": 3,
        "like": 1
    }]
    uiduck.setData(data, false);
}
function newVersion() {
    window.location.href = "https://github.com/nicez2/uiduck";
}
function viewDocument() {
    window.location.href = "/src/assets/components/uiduck/document.html";
}