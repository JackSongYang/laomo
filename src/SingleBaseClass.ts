class SingleBaseClass extends egret.DisplayObjectContainer {
    public constructor () {
        super();
    }
    private static _instance = null;
    public static getInstance() : SingleBaseClass{
        if (this._instance == null){
            this._instance = new SingleBaseClass();
        }
        return this._instance;
    }
}