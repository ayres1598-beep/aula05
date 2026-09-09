interface Computador{ 
     ligar(): void; 
    reiniciar(): void; 
    desligar(): void; 
    carregandoSistema(): void;
}
 
class Gamer implements Computador {

ligar(): void; {
    console.log("o computador gamer esta ligando");
}

reiniciar(): void; {
    console.log("o computador gamer esta reiniciando");
}

desligar (): void; {
    console.log("o computador gamer esta desligando");
}

carregandoSistema(): void;{
    console.log("o computador gamer esta carregando o sistema");

}
}
