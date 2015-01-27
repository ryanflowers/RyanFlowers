class Message {
    private _text:string;

    constructor (text: string = "Hello") {
        this._text = text;
    }

    public getText(): string{
        return this._text;
    }
}

export = Message;