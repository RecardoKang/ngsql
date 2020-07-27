<div>{{title}}
    <div class="checkboxStyle">
        <div class="Block PaddingL">
            {{#each items}}
            <input type="{{type}}" name="{{this.key}}" id="model{{this.key}}" />
            <label for="model{{this.key}}">{{this.value}}</label>
            {{/each}}
        </div>
    </div>
</div>