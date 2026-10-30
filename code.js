console.log('tot ok');

const apiUrl = 'https://onepieceapi.com/api/characters?limit=10';

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

        llistaPersonatges.appendChild(personatgeDiv)
    }
}

async function fetchPersonatges() {
    const response = await fetch(`${apiUrl}/characters?limit=10`);
    const data = await response.json();
    return data;
}


