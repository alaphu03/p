var url = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0";

function renderCharacters(pokemons){
    for (var i=0 ; i < pokemons; i++){
        pokemon = responseData.results[i].name;
        var pokemonIndex = i+1;
        console.log(pokemon);
        var pokemonimg = "https://img.pokemondb.net/artwork/"+responseData.results[i].name+".jpg";
        console.log(pokemonimg)
        var pokemonHTML=`
        <div>
            <h3>${pokemonIndex}</h3>
            <img src = ${pokemonimg}>
            <h2>${pokemon}</h2>
        </div>
        `
        console.log(pokemonHTML);
        var content = document.getElementById("content")
        content.insertAdjacentHTML("beforeend", pokemonHTML);
        };
};
function fetchPokemons() {
    sendGetRequest(url, function(responseData){
        var pokemons= responseData.results;
        renderCharacters(pokemons);
    })
}

function setUpEvents() {
    var btnSearch = document.getElementById("btn_search");
    btnSearch.addEventListener("click", function(e){
    var searchBar = document.getElementById("search_bar");
    var searchString = searchBar.value;
    var fullURL=`${url}?${key}&nameStartsWith=${searchString}`;
    sendGetRequest(fullURL, function(responseData){
        var characters = responseData.results;
        renderCharacters(characters)
    })
});      
}
fetchPokemons() ;

// function renderpokemon(pokemon) {
//     var content = document.getElementById("content")
//     content.textContent=""
//     for (var i = 0; i <pokemon.length; i++){
//         var character = pokemon[i];
//         var imgSrc = character.thumbnail.path +"." + character.thumbnail.extension ;
//         var name = character.name;
//         var comicsAvailable = character.comics.available; 
//         var characterHTML=`
//         <div>
//             <img src="${imgSrc}" />
//             <h2>${name}</h2>
//             <h3>Comics${comicsAvailable}</h3>
//         </div>
//         `;
//         content.insertAdjacentHTML("beforeend", characterHTML);
//     }
// }
// function fetchpokemon(){
//     var key = marvelKey(privateKey, publicKey);
//     var fullURL = `${url}?${key}`;
//     sendGetRequest(fullURL, function (responseData) {
//         var pokemon = responseData.data.results;
//         renderpokemon(pokemon)
//     });
// }
// function setUpEvents() {
//     var btnSearch = document.getElementById("btn_search");
//     btnSearch.addEventListener("click", function(e){
//     var searchBar = document.getElementById("search_bar");
//     var searchString = searchBar.value;
//     var key = marvelKey(privateKey, publicKey);
//     var fullURL=`${url}?${key}&nameStartsWith=${searchString}`;
//     sendGetRequest(fullURL, function(responseData){
//         var pokemon = responseData.data.results;
//         renderpokemon(pokemon)
//     })
// });      
// }
// fetchpokemon();
// setUpEvents();