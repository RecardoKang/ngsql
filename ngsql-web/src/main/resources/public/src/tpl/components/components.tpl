<style>
    .components-detail > h1::before {
        content: '';
        padding-left: 10px;
        border-left: 3px solid #008ee6;
    }

    h1 small {
        font-size: 65%;
    }

    a.components-author:before {
        width: 16px;
        height: 16px;
        background-image: url(../../assets/img/common/author.png);
    }

    a.components-author {
        font-size: 15px;
    }
</style>
<div class="components-detail">
    <h1>
        {{{componentsName}}}
        <small id="version">({{{version}}})</small>
        <span>
            <a title="作者" class="components-author" href="javascript:">{{{author}}}</a>
        </span>

    </h1>
    <div>
        <h2>示例</h2>
        {{{componentsExample}}}
    </div>
    <h1>
        介绍
    </h1>
    <p>
        {{{componentsDetail}}}
    </p>
    <h1>
        初始化配置
    </h1>
    <h1>
        方法
    </h1>
    <h1>
        事件
    </h1>
    <h1>
        更新日志
    </h1>
</div>