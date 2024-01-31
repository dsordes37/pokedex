class Pokemon{
    id;
    name;
    types;
    img
}


function createPokeModel(pokemonDeta){
    const modPokemon=new Pokemon
    modPokemon.id=pokemonDeta.id
    modPokemon.name=pokemonDeta.name
    modPokemon.types=pokemonDeta.types.map((element)=>element.type.name)
    modPokemon.img=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDeta.id}.png`

    return modPokemon

}
    
