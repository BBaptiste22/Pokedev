import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import DisplayPokemon from '../component/DisplayPokemon';

function ListPokemon() {
  const [pokemonsByGeneration, setPokemonsByGeneration] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generations = [1, 2, 3, 4, 5, 6, 7, 8];

    const fetchPromises = generations.map(gen =>
      fetch(`https://pokebuildapi.fr/api/v1/pokemon/generation/`+ gen)
        .then(res => res.json())
        .then(data => {
          return { generation: gen, pokemons: data };
        })
        .catch(error => {
          console.error(`Erreur lors du chargement de la génération ${gen}:`, error);
          return { generation: gen, pokemons: [] };
        })
    );

    Promise.all(fetchPromises)
      .then(allData => {
        setPokemonsByGeneration(allData);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <div style={{ paddingTop: "100px", padding: "20px", textAlign: "center" }}>
          <h1>Chargement des Pokémon...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px", padding: "20px" }}>
        {pokemonsByGeneration.map((genData) => (
          <div key={genData.generation} style={{ marginBottom: "50px" }}>
            <h1>Génération {genData.generation}</h1>
            <div style={grid}>
              {genData.pokemons.map((pokemon) => (
                <div key={pokemon.id} style={card}>
                  <DisplayPokemon pokemon={pokemon} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListPokemon;

const grid = {
  display: "grid",
  gap: "10px",
  gridTemplateColumns: "repeat(7, 1fr)",
  
};

const card = {
  border: "1px solid #e5e7eb",
  padding: "20px",
  borderRadius: "14px",
  textAlign: "center",
  background: "white",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)"


};