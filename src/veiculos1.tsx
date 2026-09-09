export class veiculos implements veiculos{ 

let nome: string = "ferrari"; 

ligar (): void; {
    console.log("o carro esta ligando");
}

desligar(): void; {
    console.log("o carro esta desligado") ;
}

manobrar(): void; { 
    console.log("o carro esta manobrando");
}

engatar(): void;{ 
    console.log("o carro esta engatando");
}

acelerar(): void;{ 
    console.log("o carro esta acelerando");
}

Ferrari(): void; { 
    console.log("o carro esta freando");
}
}  