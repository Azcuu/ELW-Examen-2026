console.log('tot ok');

const apiUrl = 'http://localhost:3000/api/onepiece/characters';

window.onload = async () => {
    let personatges = await fetchPersonatges(0);
    const llistaPersonatges = document.getElementById('llistaPersonatges');

    for (const personatge of personatges) {
        const personatgeDiv = document.createElement('div')

        const nom = document.createElement('h4');
        nom.innerText = personatge.name.en
        personatgeDiv.appendChild(nom);

        const imatge = document.createElement('img');
        imatge.src = personatge.image_url;
        personatgeDiv.appendChild(imatge);

        const recompensa = document.createElement('h2')

        if (personatge.bounties = []) {
            recompensa.innerText = 'No te recompensa';
        } else {
            for (const bounty of personatge.bounties) {
                if (bounty.is_active == true) {
                    recompensa.innerText = bounty.amount;

                    const bountyButton = document.createElement('button');
                    bountyButton.innerText = 'Capturar';
                    personatgeDiv.appendChild(bountyButton);

                    bountyButton.onclick = async () => {
                        await afegirRecompensa()
                        bountyButton.innerText = 'Capturat!!!';
                    }
                }
            }
        }
        personatgeDiv.appendChild(recompensa);

        llistaPersonatges.appendChild(personatgeDiv)
    }
}

async function fetchPersonatges(page) {
    const response = await fetch(`${apiUrl}?page=${page}&limit=10`);
    const data = await response.json();
    return data;
}

async function fetchBusqueda(busqueda) {
    const response = await fetch(`${apiUrl}?q=${busqueda}`);
    const data = await response.json();
    const llistaBusqueda = document.getElementById('llistaBusqueda');
    llistaBusqueda.innerHTML = '';
    llistaBusqueda.innerText = '';

    for (const personatge of data) {

        const personatgeDiv = document.createElement('div')

        const nom = document.createElement('h4');
        nom.innerText = personatge.name.en
        personatgeDiv.appendChild(nom);

        const imatge = document.createElement('img');
        imatge.src = personatge.image_url;
        personatgeDiv.appendChild(imatge);

        const recompensa = document.createElement('h2')

        if (personatge.bounties = []) {
            recompensa.innerText = '';
        } else {
            for (const bounty of personatge.bounties) {
                if (bounty.is_active = true) {
                    recompensa.innerText = 'Recompensa de: ' + bounty.amount;
                }
            }
        }
        personatgeDiv.appendChild(recompensa);

        llistaBusqueda.appendChild(personatgeDiv)
    }

    if (llistaBusqueda.innerHTML = '') {
        llistaBusqueda.innerText = 'Personatge no trobat.'
    }
}


const numeroRecompenses = document.getElementById('numeroRecompenses');

async function afegirRecompensa(recompensa) {
    numeroRecompenses.innerText = numeroRecompenses.innerText + recompensa;
    return true;
}

async function eliminarRecompensa(recompensa) {
    numeroRecompenses.innerText = numeroRecompenses.innerText + recompensa;
    return true;
}

let pagina = 0;

async function fetchLlistaAnterior() {
    if (pagina == 0) {
        alert("No hi ha menys pagines.")
    } else {
         let personatges = await fetchPersonatges(pagina - 1);
        pagina = pagina - 1;
        const llistaPersonatges = document.getElementById('llistaPersonatges');

        for (const personatge of personatges) {
            const personatgeDiv = document.createElement('div')

            const nom = document.createElement('h4');
            nom.innerText = personatge.name.en
            personatgeDiv.appendChild(nom);

            const imatge = document.createElement('img');
            imatge.src = personatge.image_url;
            personatgeDiv.appendChild(imatge);

            const recompensa = document.createElement('h2')

            if (personatge.bounties = []) {
                recompensa.innerText = 'No te recompensa';
            } else {
                for (const bounty of personatge.bounties) {
                    if (bounty.is_active == true) {
                        recompensa.innerText = bounty.amount;

                        const bountyButton = document.createElement('button');
                        bountyButton.innerText = 'Capturar';
                        personatgeDiv.appendChild(bountyButton);

                        bountyButton.onclick = async () => {
                            await afegirRecompensa()
                            bountyButton.innerText = 'Capturat!!!';
                        }
                    }
                }
            }
            personatgeDiv.appendChild(recompensa);

            llistaPersonatges.appendChild(personatgeDiv)
        }
    }
}

async function fetchLlistaSeguent() {
    if (pagina == 70) {
        alert("Maxim arribat.")
    } else {

        let personatges = await fetchPersonatges(pagina + 1);
        pagina = pagina + 1;
        const llistaPersonatges = document.getElementById('llistaPersonatges');

        for (const personatge of personatges) {
            const personatgeDiv = document.createElement('div')

            const nom = document.createElement('h4');
            nom.innerText = personatge.name.en
            personatgeDiv.appendChild(nom);

            const imatge = document.createElement('img');
            imatge.src = personatge.image_url;
            personatgeDiv.appendChild(imatge);

            const recompensa = document.createElement('h2')

            if (personatge.bounties = []) {
                recompensa.innerText = 'No te recompensa';
            } else {
                for (const bounty of personatge.bounties) {
                    if (bounty.is_active == true) {
                        recompensa.innerText = bounty.amount;

                        const bountyButton = document.createElement('button');
                        bountyButton.innerText = 'Capturar';
                        personatgeDiv.appendChild(bountyButton);

                        bountyButton.onclick = async () => {
                            await afegirRecompensa()
                            bountyButton.innerText = 'Capturat!!!';
                        }
                    }
                }
            }
            personatgeDiv.appendChild(recompensa);

            llistaPersonatges.appendChild(personatgeDiv)
        }
    }
}


