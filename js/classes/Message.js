define(["require", "exports"], function(require, exports) {
    var Message = (function () {
        function Message(text) {
            if (typeof text === "undefined") { text = "Hello"; }
            this._text = text;
        }
        Message.prototype.getText = function () {
            return this._text;
        };
        return Message;
    })();

    
    return Message;
});
