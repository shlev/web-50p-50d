const containerEl = document.getElementById('container');
const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

getPokemons(50, 150);

async function getPokemons(firstIndex, quantity) {
  for (let idx = firstIndex; idx < quantity; idx++) {
    let res = await fetch(API_URL + idx);
    let data = await res.json();
    addPokemon(data);
  }
}

function addPokemon(pokemon) {
  const pokemonEl = document.createElement('div');
  pokemonEl.className = 'pokemon';
  pokemonEl.innerHTML = `
    <div class='img'>
      <img src='${Object.values(pokemon.sprites)[0]}' />
    </div>
    <div class='id'>#${pokemon.id}</div>
    <div class='name'>${pokemon.name}</div>
    <div class='type'>Type: ${getType(pokemon.types)}</div>
  `;

  containerEl.appendChild(pokemonEl);
}

function getType(types) {
  const typeObj = types[0];
  return typeObj.type.name;
}
