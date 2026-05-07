// 1. pa ver si es un numero o texto
function chequear(valor: number | string) {
    if (typeof valor === "number") {
        return valor * 2;
    } else {
        return valor.toUpperCase();
    }
}
console.log(chequear(10));
console.log(chequear("hola"));

// 2. sumar los numeros de una lista
function sumar(lista: number[]) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total = total + lista[i];
    }
    return total;
}
console.log(sumar([1, 2, 3]));

// 3. los datos de una persona y que salude
interface Persona {
    nombre: string;
    edad: number;
    saludo: () => string;
}

let p1: Persona = {
    nombre: "juan",
    edad: 20,
    saludo: function() {
        return "hablalo, soy " + this.nombre;
    }
};
console.log(p1.saludo());

// 4. pa mirar que cosas valen mas de lo esperado
interface Producto {
    nom: string;
    pre: number;
}

let cosas: Producto[] = [
    { nom: "mouse", pre: 20 },
    { nom: "teclado", pre: 80 }
];

for (let i = 0; i < cosas.length; i++) {
    if (cosas[i].pre > 50) {
        console.log("esto esta cariñoso: " + cosas[i].nom);
    }
}

// 5. revisar si  paga bien
interface Empleado {
    nombre: string;
    sueldo: number;
}

function verSueldo(e: Empleado) {
    if (e.sueldo >= 2000) {
        return e.nombre + " tiene buena plata";
    } else {
        return e.nombre + " gana muy poquito";
    }
}
console.log(verSueldo({ nombre: "ana", sueldo: 3000 }));

// 6. lo de la cuenta del banco
class Cuenta {
    private plata: number;

    constructor(monto: number) {
        this.plata = monto;
    }

    meter(n: number) {
        this.plata += n;
        console.log("metio plata, ahora tiene: " + this.plata);
    }

    sacar(n: number) {
        if (n <= this.plata) {
            this.plata -= n;
            console.log("saco la plata, le queda: " + this.plata);
        } else {
            console.log("pailas, no hay un peso");
        }
    }
}

let c = new Cuenta(100);
c.meter(50);
c.sacar(20);

// 7. la lista de los que trabajan
interface Empresa {
    lista: Empleado[];
}

function mostrar(emp: Empresa) {
    for (let i = 0; i < emp.lista.length; i++) {
        console.log("el que camella es: " + emp.lista[i].nombre);
    }
}

let miEmpresa: Empresa = {
    lista: [{ nombre: "luis", sueldo: 1000 }]
};
mostrar(miEmpresa);

// 8. pa sacar el ultimo dato 
function ultimo<T>(a: T[]): T {
    return a[a.length - 1];
}
console.log(ultimo([1, 2, 3]));

// 9. pa ver si el estudiante paso o perdio
class Estudiante {
    nom: string;
    nota: number;

    constructor(n: string, cal: number) {
        this.nom = n;
        this.nota = cal;
    }

    paso() {
        if (this.nota >= 3) {
            return this.nom + " corono la materia";
        } else {
            return this.nom + " le toca repetir";
        }
    }
}

let es = new Estudiante("pedro", 4);
console.log(es.paso());

// 10. una respuesta de cualquier tipo
interface Respuesta<T> {
    data: T;
    cod: number;
}

let res: Respuesta<string> = { data: "todo melo", cod: 200 };
console.log(res);