const pokeApi={

    async getPokemons(offset=0, limit=10){
        const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


        /*
        fetch(url).then((reponse)=>{
            console.log(reponse)
        })


        ESSA SERIA A VERSÃO MAIS LONGA DA REQUISIÇÃO
        PORÉM, COM ARROW FUNCTIONS É POSSÍVEL REDUZI-LA
        COMO MOSTRADO ABAIXO
        */
 

        //o FETCH faz a requesição dos dados para a url e o .JSON transforma o resultado em json
        //o RESULTS converte o JSONBODY pra uma lista de objetos, que usaremos para extrair as informações
        
        return fetch(url).then((response)=> response.json())
        .then((jsonBody)=> jsonBody.results)
        .catch((erro)=> console.error(erro))
    }
};