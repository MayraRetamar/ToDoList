//Ejercicio 2
//• Iniciar proyecto NPM
//• Implementar las siguientes clases con las 
//variables y métodos que crea necesarios:• AutoCiudad
//• AutoDeportivo
//• Camioneta
//• Abstraer elementos en común entre dichas 
//clases → pasarlos a una clase abstracta, y 
//que las tres clases extiendan de ella



abstract class Rodado { 
    protected velocidadActual : number;
    protected lucesEncendidas : boolean;
    protected frenado : boolean;
    private estaPrendido : boolean;
    private tanqueLleno : number;

    public constructor() { 
        this.velocidadActual = 0;
        this.lucesEncendidas = true;
        this.frenado = false;
        this.estaPrendido = true;
        this.tanqueLleno = 0;
    }

    abstract acelerar() : void;
    abstract prenderApagarLuces() : void;
    abstract frenar() : void;

    public prender() : void { 
        this.estaPrendido = true;

    }

    public apagar() : void { 
        this.estaPrendido = false;
    }

    public cargarCombustible() : void { 
        this.tanqueLleno = 0;
    }
}

class AutoCiudad extends Rodado { 
    public acelerar(): void {
        this.velocidadActual += 40;
    }

    public prenderApagarLuces(): void {
        this.lucesEncendidas = false;
    }

    public frenar(): void {
        this.frenado = true;
    }
        
    }

    class AutoDeportivo extends Rodado { 
        public acelerar(): void {
            this.velocidadActual += 100;
        }

        public prenderApagarLuces(): void {
            this.lucesEncendidas = true;
        }

        public frenar(): void {
            this.frenado = false;
        }

    }

    class Camioneta extends Rodado { 
        public acelerar(): void {
            this.velocidadActual = 65;
        }

        public prenderApagarLuces(): void {
            this.lucesEncendidas = true;
        }

        public frenar(): void {
            this.frenado = false;
        }
    }

    let nuevoAuto : AutoCiudad = new AutoCiudad;

    console.log(nuevoAuto);
    nuevoAuto.acelerar();
    nuevoAuto.apagar();
    nuevoAuto.frenar();
    console.log(nuevoAuto);