interface Veiculo{
  ligar():void; 
  desligar(): void;
  manobrar(): void;
  engatar(): void;
  acelerar(): void;
  frear(): void; 
}
 
class Ferrari implements Veiculo {

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