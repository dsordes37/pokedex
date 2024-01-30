const pokeList=document.querySelector('#pokemonList')


function pokemonToPokelist(pokemon){
    return `
        <li class="pokemon">
            <span>#001</span>
            <h2>${pokemon.name}</h2>
            <div>
                <ol class="type">
                    <li>grass</li>
                    <li>poison</li>
                </ol>
                <img class="pokeImg" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="imagem de ${pokemon.name}">
            </div>
        </li>
        `;
}

pokeApi.getPokemons().then((pokemons)=>{
    pokemons.map((element)=>pokeList.innerHTML+=pokemonToPokelist(element));
})
