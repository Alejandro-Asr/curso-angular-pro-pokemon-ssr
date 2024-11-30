const TOTAL_POKENMONS = 151;
const TOTAL_PAGES = 5;

(async () => {
  // const fs = require('fs');
  // const pokemonsIds = Array.from({ length: TOTAL_POKENMONS }, (_, i) => i + 1);
  // const pokemonsPagesIds = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);
  // let content = pokemonsIds.map((id) => `/pokemon/${id}`);
  // pokemonsPagesIds.map((id) => {
  //   content.push(`/pokemon/page/${id}`);
  // });

  // let fileContent = content.map((id) => id).join('\n');
  // fs.writeFileSync('routes.txt', fileContent);
  // console.log('routes.txt generado con exito');

  const fs = require('fs');
  const pokemonsIds = Array.from({ length: TOTAL_POKENMONS }, (_, i) => i + 1);
  let fileContent = pokemonsIds.map((id) => `/pokemons/${id}`).join('\n');

  for(let index=1; index<=TOTAL_PAGES; index++){
    fileContent += `\n/pokemon/page/${index}`;
  }

  const pokemonNameList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKENMONS}`)
  .then((res) => res.json())

  fileContent += '\n';
  fileContent += pokemonNameList.results.map((pokemon) => `/pokemon/${pokemon.name}`).join('\n');

  fs.writeFileSync('routes.txt', fileContent);
  console.log('routes.txt generado con exito');
})();
