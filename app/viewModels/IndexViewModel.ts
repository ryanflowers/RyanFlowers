import Message =
class IndexViewModel {
    private _message: Message;

    constructor (title: any) {
        this._message = new Message('test');
    }

    public getMessage(): Message {
        return this._message;
    }
}

export = EntityService;