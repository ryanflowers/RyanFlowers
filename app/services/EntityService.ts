import IHeader = require("../interfaces/IHeader");

class EntityService {
    private database: Firebase; //TODO: use a provider for this containing singleton for all injected in.

    constructor () {
        this.database = new Firebase('https://ryanflowersindex.firebaseio.com');
    }

    public onIndexHeader(handler: (header: IHeader) => void): void {
        var index = <any>this.database.child('index');
        index.on('value', function (index: any) {
            handler(<IHeader>index.val().header);
        });
    }
}

export = EntityService;