class Poupanca extends Conta{

    update(taxa){
        this._saldo = this._saldo + taxa *2;
    }
}