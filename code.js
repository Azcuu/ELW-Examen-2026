console.log('tot ok');

const apiUrl = 'https://bn9ct5dd-3000.uks1.devtunnels.ms/?limit=10';

let personatges = [];

window.onload = async () => {
    personatges = await fetchPersonatges();
    const llistaPersonatges = document.getElementById('llistaPersonatges');

    for (const personatge of personatges){
        const personatgeDiv = document.createElement('div')

        const nom = document.createElement('h4');
        nom.innerText = personatge.name.en
        personatgeDiv.appendChild(nom);

        const imatge = document.createElement('img');
        imatge.src = personatge.image_url;
        personatgeDiv.appendChild(imatge);

        const recompensa = document.createElement('h2')
        recompensa.innerText = personatge.

        llistaPersonatges.appendChild(personatgeDiv)
    }
}

async function fetchPersonatges() {
    const response = await fetch(`${apiUrl}/characters?limit=10`);
    const data = await response.json();
    return data;
}

async function buscarPersonatges(busqueda) {

    
}

async function fetchBusqueda(busqueda) {
    const response = await fetch(`${apiUrl}/characters?q=${busqueda}`);
    const data = await response.json();
    return data;
}

