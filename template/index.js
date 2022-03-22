
let render = document.getElementById('pokedex');

fetch('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10')
  .then(response => response.json())
  .then(data => {
    let pokemons = data.results;

    console.log(pokemons)

    for(let i = 0; i < pokemons.length; i++) {
      let img = document.createElement('img');
      let splitUrl = pokemons[i].url.split('/');
      let id = splitUrl[splitUrl.length - 2];

      console.log(id);
      img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      let p = document.createElement('p');
      p.innerText = pokemons[i].name;

      render.appendChild(img)
      render.appendChild(p);
    }
  });




/*GET MOREINFOS (NON OPTIMUM => contact API owner to see if it would be possible to get direct endpoint for ultiple pokemons)

const pokedex = document.querySelector('#pokedex');

//Fetch pokemon in Pokeapi
    //GET a pokemon
fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10/`) //?results=10 is supposed to give 10 results
    //Pokeapi > Endpoint
    .then((resp)=> resp.json())
    //Inject pokemon in #pokedex HTML element
    .then(function (data) {
        data.results.forEach(pokemon => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const cardTitle = document.createElement('h3');
            fetch(pokemon.url)
                .then((resp)=>resp.json())
                .then(function (pokeData){
                img.src = pokeData.sprites.front_shiny;
                div.appendChild(img);
                cardTitle.innerText = pokeData.name;
                div.appendChild(cardTitle);
                div.id = pokeData.id;
                div.classList.add('pokemon','card');
                pokedex.appendChild(div);
                })
        })        
    })

    .catch(function(error){
        console.log(error);
    });
*/





//JSON.parse(response)

/*
fetch('https://pokeapi.co/api/v2/pokemon/?limit=10/')
    .then(response => response.json())
    .then(data =>{
        let pokemons = data.results;

        for(let i =0; i<pokemon.length; i++){
            let img = document.createElement('img');
            let p = document.createElement('p');
            p.innerText = pokemons[i].name;

            pokedex.appendChild(p);
        }
    })


*/