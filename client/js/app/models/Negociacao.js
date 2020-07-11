class Negociacao {

    constructor (){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }


    get data(){
        return this._data;
    }

    get quantidade(){
        return this.quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }


    
}