const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

const persona2 = {
    nombre: "Juan",
    edad: 30,
    direccion: {
        calle: "Avenida Siempreviva",
        numero: 123,
        ciudad: "Madrid"
    },
    amigos: ["Pedro", "Marta", "Luis"]
}

function Persona(nombre, edad, calle, numero, ciudad, amigos) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = {
        calle,
        numero,
        ciudad
    }
    this.amigos = amigos;

    this.saludar = function () {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona3 = new Persona("Pedro", 29, "Calle Primera", 2020, "Roma", ["Juan", "Marta"]);

console.log(persona2);
console.log(persona3);
persona3.saludar();


class Persona2 {
    constructor(nombre, edad, calle, numero, ciudad, amigos) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = {
            calle,
            numero,
            ciudad
        }
        this.amigos = amigos;
    }
    
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad}!`);
    }
}

const persona4 = new Persona2("Marta", 32, "Calle Primera", 2021, "Roma", ["Juan", "Pedro"]);

console.log(persona4);
persona4.saludar();
console.log(persona4.direccion);

const persona5 = new Persona2("Carla", 25, "Humberto Sanchez", 1900, "Buenos Aires", ["Pedro"]);
persona5.saludar();
console.log(persona5.direccion);



let x = 10;
let y = 20;
let objeto = {x, y};
let objeto2 = {x: x, y: y};
console.log(objeto);
console.log(objeto2);


class Estudiante extends Persona2 {
    constructor(nombre, edad, calle, numero, ciudad, amigos, carrera) {
        super(nombre, edad, calle, numero, ciudad, amigos);
        this.carrera = carrera;
    }
    estudiar () {
        console.log(`Estoy estudiando ${this.carrera}`);
    }
}

const estudiante1 = new Estudiante("Patricio", 26, "Humberto Sanchez", 1900, "Buenos Aires", ["Pedro"], "Medicina");

console.log(estudiante1);

estudiante1.saludar();
estudiante1.estudiar();


//////////////////////////////////////


