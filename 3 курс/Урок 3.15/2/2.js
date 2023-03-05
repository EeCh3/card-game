










const search = document.querySelector('.search');
const matchList = document.querySelector('.match-list');

// search city and filter it
const searchCity = async searchText  => {
    const res = await fetch('/cities.json');
    const cities = await res.json();
}

//get matches to current text input 

let matches = cities.filter(city => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return city.label.match(regex)
})

if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = '';
}

outputHtml(matches);

search.addEventListener('input', () => searchCity(search.value))

const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches
        .map(
            match => `
            <div class="card card-body">
            <h4>${match.label}</h4></div>`
        )
        .join('');

        matchList.innerHTML = html;
    }
}

