const pokeList=document.querySelector('#pokemonList')

function createTypeLi(list){
    let retorno=''
    list.map((element)=>{
        retorno+=`<li>${element.type.name}</li>`
    })

    return retorno
}


function pokemonToPokelist(pokemon){
    return `
        <li class="pokemon ${pokemon.types[0].type.name}">
            <span>#${pokemon.id.toString().padStart(3, 0)}</span>
            <h2>${pokemon.name}</h2>
            <div>
                <ol class="type">
                    ${createTypeLi(pokemon.types)}
                </ol>
                <img class="pokeImg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="imagem de ${pokemon.name}">
            </div>
        </li>`;
}

pokeApi.getPokemons(0, 12).then((pokemons)=>{
    pokemons.map((element)=>pokeList.innerHTML+=pokemonToPokelist(element));
})
