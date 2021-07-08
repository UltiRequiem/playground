import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function PokemonInfo({ name = "pikachu" }) {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(
    () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(pikachu => {
          console.log(pikachu);
          setPokemonInfo(pikachu);
        });
    },
    [name]
  );

  return (
    pokemonInfo && (
      <span>
        La pokeId es #{pokemonInfo.id} y su nombre es {pokemonInfo.name}
      </span>
    )
  );
}

ReactDOM.render(<PokemonInfo />, document.getElementById("app"));
