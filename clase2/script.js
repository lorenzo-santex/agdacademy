console.log(2);


var foo = "Hola";

console.log(`La palabra clave es ${foo}`);

function sumar(a, b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number')  {
        return "No es un número"
    }
    return a + b;
}


var a = 1;
var b = 100;
var c = b++; // var c = b; b = b+1;
var d = ++a; // a = a +1; var d = a;



console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);

//a = 2, b = 101, c = 100, d = 2

console.log(`El resultado de la suma de la variable a y la variable b es ${sumar(a,b)}`);

console.log(`Multiplicar 3 por 2 ${3*2}`);

console.log(`Dividir 8 por 2 ${8/2}`);


console.log(`Resto (modulo) de 9 por 2 ${9%2}`);


var z;
console.log(!!z);


foo = 100;
bar = 100;

if (foo > bar ) {
    console.log("Foo es mayor");
} else {
    console.log('Foo no es mayor');
}

function tirarDado() {
    return Math.round(Math.random() * 5 ) + 1;
}

var miDado = tirarDado();
miDado = 6;
var tuDado = tirarDado();

if (miDado > tuDado ) {
    console.log(`Gana el atacante ${miDado} a ${tuDado}`);
} else {
    console.log(`Gana la defensa ${miDado} a ${tuDado}`);
}

switch (miDado) {
    case 1:
        console.log("Pierdo sin importar la defensa");
        break;
    case 6:
        console.log("Gano a menos que a la defensa le toque 6");
        break;
    default:
        console.log("Veamos si gano o no.");
}

var max = 10;
for( var i = 0; i < max; i++ ) {
    console.log(i);
}

i = 1;
while( i < max ) {
    console.log(i);
    i++;
}