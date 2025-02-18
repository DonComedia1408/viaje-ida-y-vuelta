class BilleteEmbarque {
    constructor(nombre, desde, hacia, claseEjecutiva, horaSalida, horaLlegada) {
        this.nombre = nombre;
        this.desde = desde;
        this.hacia = hacia;
        this.claseEjecutiva = claseEjecutiva;
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
    }

    upgrade() {
        if (this.claseEjecutiva) {
            console.log("¡Tu billete ya es de clase ejecutiva!");
        } else {
            this.claseEjecutiva = true;
            console.log("¡Has actualizado tu billete a clase ejecutiva!");
        }
    }

    tiempoDeVuelo() {
        let tiempo = this.horaLlegada - this.horaSalida;
        if (tiempo < 0) {
            tiempo += 24;
        }
        console.log(`El tiempo total de vuelo es de ${tiempo} horas.`);
    }
}

const billeteIda = new BilleteEmbarque("Alex Radoi", "Madrid", "Bucarest", true, 10, 14);
const billeteVuelta = new BilleteEmbarque("Alex Radoi", "Bucarest", "Madrid", false, 22, 2);

billeteIda.upgrade();
billeteIda.tiempoDeVuelo();

billeteVuelta.upgrade();
billeteVuelta.tiempoDeVuelo();