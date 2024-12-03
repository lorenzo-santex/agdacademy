function dividir ( a, b ) {
    if (0 === b) {
        throw new Error("No se puede dividir por 0");
    }
    return a / b;
}

function tratarDividir (a,b) {
    let division;
    let algo = 0;
    try {
        division = dividir(a,b);
        console.log(division);
        algo = 1;
    } catch( error ) {
        console.error("Hubo un error");
        console.error(error);
        division = null;
    } finally {
        console.log(`Algo: ${algo}`);
        console.log(`Intento de division ${a}/${b}`);
    }
    return division;
}

console.log(tratarDividir(2,0));
console.log(tratarDividir(2,2));
tratarDividir(10,3);
tratarDividir(10,0);

