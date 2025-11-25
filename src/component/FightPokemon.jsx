import React from 'react';

function FightPokemon({ pokemon }) {
  return (
    <div style={container}>
      <div style={bigCard}>
        <div style={header}>
          <h1 style={title}>{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokemon.name} style={image} />
        </div>

        <div style={grid}>
          {pokemon.stats && (
            <div style={block}>
              <h2 style={subtitle}>Stats</h2>
              <div style={statsGrid}>
                <p style={text}>HP: {pokemon.stats.HP}</p>
                <p style={text}>Attack: {pokemon.stats.attack}</p>
                <p style={text}>Defense: {pokemon.stats.defense}</p>
                <p style={text}>Special Attack: {pokemon.stats.special_attack}</p>
                <p style={text}>Special Defense: {pokemon.stats.special_defense}</p>
                <p style={text}>Speed: {pokemon.stats.speed}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FightPokemon;


const container = {
  display: "flex",
  justifyContent: "flex-start", 
  alignItems: "flex-start",
  padding: "2em",
  fontFamily: "'Arial', sans-serif",
  minHeight: "100vh",

};

const bigCard = {
  width: "350px",
  backgroundColor: "#ffffff",
  border: "2px solid #ccc",
  borderRadius: "20px",
  padding: "1.5em",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
};

const header = {
  textAlign: "center",
  marginBottom: "1.5em",
};

const title = {
  fontSize: "2em",
  textTransform: "capitalize",
  marginBottom: "0.5em",
  color: "#333",
};

const image = {
  width: "200px",
  height: "200px",
  objectFit: "contain",
  borderRadius: "10px",
  border: "1px solid #ccc",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1em",
};

const block = {
  padding: "1em",
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  border: "1px solid #ccc",
};

const subtitle = {
  borderBottom: "2px solid #333",
  marginBottom: "0.5em",
  paddingBottom: "0.3em",
  fontSize: "1.2em",
  color: "#333",
};

const text = {
  color: "#333",
  margin: "0.3em 0",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "0.5em",
};
