let offset=0;
let limit=10;
const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

const pokeList=document.querySelector('#pokemonList')

/*
fetch(url).then((reponse)=>{
    console.log(reponse)
})


ESSA SERIA A VERSÃO MAIS LONGA DA REQUISIÇÃO
PORÉM, COM ARROW FUNCTIONS É POSSÍVEL REDUZI-LA
COMO MOSTRADO ABAIXO
*/

//o FETCH faz a requesição dos dados para a url e o .JSON transforma o resultado em json
fetch(url).then((response)=> response.json())
//o RESULTS converte o JSONBODY pra uma lista de objetos, que usaremos para extrair as informações
.then((jsonBody)=> jsonBody.results)
.then((pokemons)=>{
    let num=1
    pokemons.forEach(element => {
        pokeList.innerHTML+=`
        <li class="pokemon">
            <span>#${num.toString().padStart(3, 0)}</span>
            <h2>${element.name}</h2>
            <div>
                <ol class="type">
                    <li>grass</li>
                    <li>poison</li>
                </ol>
                <img class="pokeImg" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="imagem de ${element.name}">
            </div>
        </li>
        `;
        num++
    });
})
.catch((erro)=> console.log(erro))