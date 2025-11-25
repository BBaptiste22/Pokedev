import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DisplayPokemonDetails({pokemon}) {

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

          {pokemon.apiTypes && (
            <div style={block}>
              <h2 style={subtitle}>Types</h2>
              <div style={typesRow}>
                {pokemon.apiTypes.map((type) => (
                  <span key={type.name} style={typeSimple}>
                    {type.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {pokemon.apiEvolutions && (
            <div style={block}>
              <h2 style={subtitle}>Évolutions</h2>
              {pokemon.apiEvolutions.length > 0 ? (
                pokemon.apiEvolutions.map(evo => (
                  <p key={evo.pokedexId} style={text}>{evo.name}</p>
                ))
              ) : (
                <p style={text}>Aucune évolution</p>
              )}
            </div>
          )}

          {pokemon.apiResistances && (
            <div style={blockFull}>
              <h2 style={subtitle}>Résistances</h2>
              <div style={resistGrid}>
                {pokemon.apiResistances.map(res => (
                  <p key={res.name} style={text}>
                    {res.name}: {res.damage_relation} ({res.damage_multiplier}x)
                  </p>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}

export default DisplayPokemonDetails;



export const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2em",
  fontFamily: "Arial, sans-serif",
  minHeight: "100vh",
};

export const bigCard = {
  width: "100%",
  maxWidth: "1200px",
  backgroundColor: "#f7f7f7",
  border: "4px solid black",
  borderRadius: "20px",
  padding: "2em",
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  marginLeft: "300px",
};

export const header = {
  textAlign: "center",
  marginBottom: "2em",
};

export const title = {
  fontSize: "2.5em",
  textTransform: "capitalize",
  marginBottom: "0.5em",
  color: "#000",
};

export const image = {
  width: "250px",
  height: "250px",
  objectFit: "contain",
};

export const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "2em",
};

export const block = {
  padding: "1em",
  backgroundColor: "#fff",
  borderRadius: "10px",
  border: "2px solid black",
};

export const blockFull = {
  gridColumn: "1 / span 2",
  padding: "1em",
  backgroundColor: "#fff",
  borderRadius: "10px",
  border: "2px solid black",
};

export const subtitle = {
  borderBottom: "2px solid #000",
  marginBottom: "0.7em",
  paddingBottom: "0.3em",
  fontSize: "1.4em",
  color: "#000",
  display: "inline-block",
};

export const text = {
  color: "#000",
  margin: "0.3em 0",
};

export const statsGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "0.4em",
};

export const typesRow = {
  display: "flex",
  gap: "0.5em",
  flexWrap: "wrap",
};

export const typeSimple = {
  padding: "0.4em 0.8em",
  borderRadius: "10px",
  backgroundColor: "#062dadff",
  fontWeight: "bold",
  border: "2px solid black",
};

export const resistGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "0.4em",
};
