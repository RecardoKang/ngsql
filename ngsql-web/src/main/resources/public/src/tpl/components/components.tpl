<style>
    .components-detail {
        padding: 20px;
    }

    .components-detail > h1::before {
        content: '';
        padding-left: 10px;
        border-left: 3px solid #008ee6;
    }

    h1 {
        padding: 20px 0;
        border-bottom: 1px solid grey;
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

    .initialism {
        display: block;
        background-color: aliceblue;
        padding: 15px;
    }

    .copy-code {
        float: right;
    }

    .initialism > code {
        display: inline-block;
    }
</style>
<div class="components-detail">
    <h1>
        {{{name}}}
        <small id="version">({{{version}}})</small>
        <span>
            <a title="作者" class="components-author" href="javascript:">{{{author}}}</a>
        </span>

    </h1>
    <div>
        <h2>示例</h2>
        {{#if example}}
        <p>{{{example}}}</p>
        {{else}}
        <p>暂无数据</p>
        {{/if}}
    </div>
    <h1>
        介绍
    </h1>
    {{#if detail}}
    <p>{{{detail}}}</p>
    {{else}}
    <p>暂无数据</p>
    {{/if}}
    <h1>
        初始化配置
    </h1>
    <div class="initialism">
        <button class="copy-code">复制</button>
        <code class="code-hide github">
            {{#if code}}
            {{{code}}}
            {{else}}
            暂无数据
            {{/if}}
        </code>
    </div>
    <h1>
        方法
    </h1>
    {{#each fun}}
    <h3>{{name}}</h3>
    <div class="initialism">
        <code class="github">{{{code}}}</code>
    </div>
    {{else}}
    <span>暂无数据</span>
    {{/each}}
    <h1>
        事件
    </h1>
    {{#each event}}
    <h3>{{name}}</h3>
    <div class="initialism">
        <code class="github">{{{code}}}</code>
    </div>
    {{else}}
    <span>暂无数据</span>
    {{/each}}
    <h1>
        更新日志
    </h1>
</div>