define(function () {
    const t = function () {
        this._listeners = {};
    };
    return t.prototype = {
        on: function (t, e) {
            "undefined" === typeof this._listeners[t] && (this._listeners[t] = []), this._listeners[t].push(e);
        }, trigger: function (t, e, i) {
            if ("string" === typeof t && (t = {type: t}), t.target || (t.target = this), !t.type) throw new Error("Event object missing 'type' property.");
        }, removeListener: function (t, e) {
            if (this._listeners[t] instanceof Array) for (var i = this._listeners[t], s = 0, n = i.length; s < n; s++) if (i[s] === e) {
                i.splice(s, 1);
                break;
            }
        }
    }, t
});