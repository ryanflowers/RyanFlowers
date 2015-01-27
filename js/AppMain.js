define(["require", "exports", "classes/EntityService"], function(require, exports, EntityService) {
    var AppMain = (function () {
        function AppMain() {
        }
        AppMain.prototype.run = function () {
            var entityService = new EntityService();
            var message = entityService.getMessage();
            alert(message.getText());
        };
        return AppMain;
    })();

    
    return AppMain;
});
