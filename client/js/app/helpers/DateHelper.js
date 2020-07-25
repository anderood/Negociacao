class DateHelper{

    constructor(){
        throw new Error('A classe nao pode ser instanciada');
    }
    
    static dataParaTexto(data){
        
        return `${data.getDate()}, ${data.getMonth()}, ${data.getFullYear()}`;
    }
    static textoParaData(texto){
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))throw new Error('Deve estar no Formato aaa-mm-dd');
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

}

