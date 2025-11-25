import React, { useEffect, useState } from 'react'
import DisplayPokemonDetails from '../component/DisplayPokemonDetails';
import Header from '../component/Header';
import { useParams } from 'react-router-dom';

function SearchPokemon() {

  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});


    useEffect(() => {
        fetch('https://pokebuildapi.fr/api/v1/pokemon/' + name)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPokemon(data); 
        });
    }, []);

  return (
    <div>
      <Header />

        <p>Recherche du Pokemon : </p>

          <>
            <DisplayPokemonDetails pokemon={pokemon} />
          </>
    </div>
  )
}

export default SearchPokemon
