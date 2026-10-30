console.log('tot ok');

const apiUrl = 'https://localhost:3000/api/onepiece/characters';

window.onload = async () => {
    let personatges = await fetchPersonatges();
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
        for (bounty of bounties) {
            if (personatge.bounties.is_active = true){
                recompensa.innerText = personatge.bounties.amount
                personatgeDiv.appendChild(recompensa);


                const botoRecompensa = document.createElement('button')
            }
        }

        llistaPersonatges.appendChild(personatgeDiv)
    }
}

async function fetchPersonatges() {
    const response = await fetch(`${apiUrl}?limit=10`);
    const data = await response.json();
    return data;
}

async function fetchBusqueda(busqueda) {
    const response = await fetch(`${apiUrl}/characters?q=${busqueda}`);
    const data = await response.json();
    
    for (personatge of data) {

    }
}

