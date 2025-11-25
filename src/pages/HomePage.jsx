import React from 'react'
import Header from '../component/Header';
import DisplayPokemon from '../component/DisplayPokemon';
import { useEffect } from 'react';
import { useState } from 'react';

function HomePage() {

   const [pokemons, setPokemons] = useState([]);
    
      useEffect(() => {
      fetch('https://pokebuildapi.fr/api/v1/random/team')
      .then(res => res.json())
      .then(data => {
          console.log(data)
          setPokemons(data); 
      });
    }, []);   

  return (
    <>

    <Header />
    <div style={styles.grid}>
      {pokemons.map(pokemon => (
        <div key={pokemon.id} style={card}>
          <DisplayPokemon pokemon={pokemon} />
        </div>
      ))}

    </div>

    </>
  )
}

export default HomePage


const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    padding: "20px",
    paddingTop: "100px",
    marginLeft: "200px",
  },
};

const card = {
    border: "1px solid #e5e7eb",
    padding: "20px",
    marginBottom: "5px",
    borderRadius: "14px",
    maxWidth: "350px",
    marging: "1em",
    marginTop: "1em",
}


