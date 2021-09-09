class List {
    constructor(){
        this.data = []
}
    add(nome){
        this.data.push(nome);
        console.log(this.data)
    }
}


class ToList extends List {
    //construtor
    constructor() {
        super();
        this.usuario = 'Lucas'
    }

    getUsuario(){
        console.log(this.usuario)
    }

    static soma(a,b){
        
        return a+b;
    }
       
}

/*
const tolist = new ToList()

document.getElementById('novotodo').onclick = function () {
    tolist.add('Joao');
    tolist.getUsuario();
}*/

const nome = {primeiro_mome: "lucas"};
//console.log(ToList.soma(1,2));
//var nome = "lucas"; //pode modificar
//const nome = "lucas";
nome.primeiro_mome="joao";
console.log(nome);

function teste(x){
    let y=4
    if(x>2){
    y=6
    console.log(x,y)
    }
}

console.log(teste(10))