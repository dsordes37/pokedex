const pokeList=document.querySelector('#pokemonList')



function pokemonToPokelist(pokemon){
    return `<a href='pokepaige/?id=${pokemon.id}'>
                <li class="pokemon ${pokemon.types[0]}">
                    <span>#${pokemon.id.toString().padStart(3, 0)}</span>
                    <h2>${pokemon.name}</h2>
                    <div>
                        <ol class="type">
                            ${pokemon.types.map((element)=>`<li>${element}</li>`).join('')}
                        </ol>
                        <img class="pokeImg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="imagem de ${pokemon.name}">
                    </div>
                </li>
            </a>`;
}

pokeApi.getPokemons(140, 20).then((pokemons)=>{
    pokemons.map((element)=>pokeList.innerHTML+=pokemonToPokelist(element));
})
