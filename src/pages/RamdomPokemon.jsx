import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import DisplayPokemonDetails from '../component/DisplayPokemonDetails';

function RandomPokemon() {
  const [pokemon, setPokemon] = useState(null); 

  useEffect(() => {
    fetch('https://pokebuildapi.fr/api/v1/random/team')
      .then(res => res.json())
      .then(data => {
        setPokemon(data[0]); 
      })
  }, []);

  return (
    <div>
      <Header />

      <p>Détail du Pokémon :</p>

      {pokemon ? (
        <DisplayPokemonDetails pokemon={pokemon} />
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default RandomPokemon;
