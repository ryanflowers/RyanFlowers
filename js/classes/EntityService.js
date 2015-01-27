define(["require", "exports", "classes/Message"], function(require, exports, Message) {
    var EntityService = (function () {
        function EntityService() {
            this._message = new Message('test');
        }
        EntityService.prototype.getMessage = function () {
            return this._message;
        };
        return EntityService;
    })();

    
    return EntityService;
});
