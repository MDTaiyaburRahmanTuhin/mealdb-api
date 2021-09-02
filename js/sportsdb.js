const searchText = () => {
    const seraceFilde = document.getElementById('serace-filde');
    const searchText = seraceFilde.value;
    seraceFilde.value = ''
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.teams))
}

const displaySearchResult = (teams) => {

    const searcResult = document.getElementById('search-result');
    searcResult.textContent = ''
    teams.forEach(team => {
        console.log(team);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${team.strTeam}</h5>
                <p class="card-text"></p>
            </div>
        </div>`;
        searcResult.appendChild(div);
    })

}

