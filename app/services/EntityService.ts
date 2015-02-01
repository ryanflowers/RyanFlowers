import Message = require("../viewModels/MessageViewModel");

class EntityService {
    private _message: Message;

    constructor () {
        this._message = new Message('test');
    }

    public getMessage(): Message {
        return this._message;
    }
}

export = EntityService;