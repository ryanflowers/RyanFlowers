import IHeader = require("../interfaces/IHeader");
class IndexViewModel {
    private _header: any;

    public get Header(): any {
        return this._header;
    }

    public set Header(value: any){
        this._header.title(value.title);
    }

    constructor (header: IHeader) {
        this._header = {
            title: ko.observable(header.title)
        };
    }


}

export = IndexViewModel;