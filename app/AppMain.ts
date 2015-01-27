import EntityService = require("classes/EntityService");

class AppMain {
    public run() {
        var entityService = new EntityService();
        var message = entityService.getMessage();
        alert(message.getText());
        //Apply bindings
    }
}

export = AppMain;