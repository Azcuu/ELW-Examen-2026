console.log('tot ok');

const apiUrl = 'https://onepieceapi.com/api/characters?limit=10';

window.onload = async () => {
    const personatges = await fetchPersonatges();
}

async function fetchPersonatges(page) {
    let page = page + '0';
    const response = await fetch(`${apiUrl}/characters?${page}limit=10`);
    const data = await response.json();
    return data;
}


