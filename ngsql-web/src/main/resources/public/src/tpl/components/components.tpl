<style>
    .components-detail > h1::before {
        content: '';
        padding-left: 10px;
        border-left: 3px solid #008ee6;
    }
</style>
<div class="components-detail">
    <h1>
        {{componentsName}}
        <small id="version">{{version}}</small>
        <span>
            <a>{{author}}</a>
        </span>
    </h1>
</div>