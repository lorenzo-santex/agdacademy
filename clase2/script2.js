var persona = {
    nombre: "Lorenzo",
    apellido: "Sauchelli",
    edad: 39,
    saludar: function () {
        return `${this.nombre} te saluda`;
    },
    despedir: function (nombre) {
        return `${this.nombre} se despide de ${nombre}`
    },
    arrow: () => this.parent
}
var persona2 = {
    nombre: "Carlos",
    apellido: "Osvaldo",
    edad: 59,
    saludar: function () {
        return `${this.nombre} te saluda`;
    },
    despedir: function (despedido) {
        return `${this.nombre} se despide de ${despedido}`
    },
    arrow1: () => {
        return "arrow 1";
    },
    arrow2: () => "arrow 2"
}
console.log('------');
console.log(persona);
console.log(persona.nombre)
console.log(persona.saludar());

console.log(persona2.despedir("Mafalda"));
console.log(persona2.arrow1());
console.log(persona2.arrow2());


var f = function () {
    console.log(1);
}

var multiplicar = (a, b) => a*b;

console.log(multiplicar(3,10));



console.log("");
console.log("");
console.log("");

var frutas = ["manzana","naranja", "banana", "frutilla", "pomelo"];

console.log(frutas.length);


for( var i = 0; i < frutas.length; i++ ) {
    console.log(frutas[i]);
}
console.log("");

frutas.push('arandano');


for(const element of frutas) {
    console.log(element);
}


console.log("");
console.log("");
console.log("");


var usuarios = [
    { nombre: "Carlos", edad: 50 },
    { nombre: "Pablo", edad: 30 },
    { nombre: "Amira", edad: 22 },
    { nombre: "Marta", edad: 40 },
    { nombre: "Tatiana", edad: 27 },
];

var nombresFor = []
for(const usuario of usuarios) {
    nombresFor.push(usuario.nombre);
}
console.log(nombresFor);

var nombres = usuarios.map((usuario) => {
    return usuario.nombre;
});
console.log(nombres);

console.log(usuarios.filter(function(usuario) {
    return usuario.edad < 40;
}));

console.log(usuarios.reduce(function (acumulador, usuario) {
    return acumulador + usuario.edad
}, 0));