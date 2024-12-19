function llenarDatosProvincias(provincias) {
    const listaProvincias = document.getElementById('listaProvincias');
    const selectProvincias = document.getElementById('selectProvincias');

    provincias.map((provincia) => {
        console.log(provincia);
        const nuevoLi = document.createElement('li');
        nuevoLi.innerText = provincia.name;
        listaProvincias.appendChild(nuevoLi);

        const nuevoOption = document.createElement('option');
        nuevoOption.value = provincia.code;
        nuevoOption.innerText = provincia.name;
        selectProvincias.append(nuevoOption);
    });
}


async function getProvincias() {
    try {
        const provinciasURL = 'http://localhost:3000/provincias/';
        let respuesta = await fetch(provinciasURL, { method: 'GET'});
        if ( !respuesta.ok ) {
            throw new Error(`Error: ${respuesta.status}`)
        }
        const provincias = await respuesta.json();
        console.log(provincias);
        llenarDatosProvincias(provincias);
    } catch ( error) {
        document.getElementById('selectProvincias').remove();
        console.error(`No se pudo cargar el listado de provincias ${error}`);
    }
}
getProvincias();