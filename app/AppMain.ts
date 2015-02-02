import EntityService = require("services/EntityService");
import IndexViewModel = require("viewModels/IndexViewModel");

class AppMain {
    public run() {
        var entityService = new EntityService();
        var indexViewModel = new IndexViewModel({ title: 'static'});
        entityService.onIndexHeader((header): void => {
            indexViewModel.Header = header;
        });


        //Apply bindings
        ko.applyBindings(indexViewModel);
    }
}

export = AppMain;

