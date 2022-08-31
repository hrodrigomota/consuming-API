let mainTitle = document.querySelector('#mainTitle')
mainTitle.onclick = function() {
    location.reload()
}

let button = document.querySelector('#button')
let option = document.querySelectorAll('.option')
let returnAPI = document.querySelector('#return')

button.onclick = function runAPI () {
    if(option[0].selected) {
        alert('Nenhuma API foi selecionada.')
        location.reload()
    }
    if(option[1].selected) {
        returnAPI.classList.add('return')
        url = `https://api.chucknorris.io/jokes/random`
        fetch(url)
            .then(response => response.json())
            .then(data => returnAPI.innerHTML = `
            <div class="cardChuckNorris">
            <h2>I'm Chuck Norris!</h2>
            <img src="./images/chuck-norris.png" alt"Chuck Norris" id="chuckNorris">
            ${data.value}
            </div>
            `)
            .catch(error => console.error(error))
    }
    if(option[2].selected) {
        returnAPI.classList.add('return')
        let id = Math.floor(Math.random() * (649 - 1 + 1)) + 1
        url = `https://pokeapi.co/api/v2/pokemon/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => returnAPI.innerHTML = `
                <div class="cardPokemon">
                    <h2>I'm ${data.name}!</h2>
                    <img src="${data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}" alt="Pokemon Animation"> 
                    Number: ${data.id} - ${data.name}
                    <div>
                    <span><strong>Height:</strong> ${data.height}ft</span> | <span><strong>Weight:</strong> ${data.weight}lb</span>
                    </div>
                    <img src="./images/pokemon.png" alt"Pokémon" id="pokemon">
                </div>
                `)
            .catch(error => console.error(error))
    }
}