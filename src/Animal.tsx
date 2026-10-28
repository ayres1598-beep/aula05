interface Animal {
    dormir(): void;
    caminhar(): void;
    correr(): void;
}

class Cachorro implements Animal {

    dormir(): void {
        console.log("o cachorro esta dormindo");
    }

    caminhar(): void {
        console.log("o cachorro esta caminhando");
    }

    correr(): void {
        console.log("o cachorro esta correndo");
    }

    emitirSom(): void {
        console.log("Au Au!");
    }
}
