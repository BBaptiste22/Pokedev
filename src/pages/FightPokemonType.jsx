import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import FightPokemon from "../component/FightPokemon";

function FightPokemonType() {
  const { type } = useParams(); 
  const [leftPokemon, setLeftPokemon] = useState(null); 
  const [rightPokemon, setRightPokemon] = useState(null); 
  const [loadingLeft, setLoadingLeft] = useState(true);
  const [loadingRight, setLoadingRight] = useState(false);

  useEffect(() => {
    if (!type) return;

    setLoadingLeft(true);
    fetch('https://pokebuildapi.fr/api/v1/pokemon/type/' + type)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setLeftPokemon(data[randomIndex]); 
          setLoadingLeft(false)
        } else {
          setLeftPokemon(null);
        }
      })
  }, []);

  
  useEffect(() => {
    if (!leftPokemon) return;

    setLoadingRight(true);
    const timer = setTimeout(() => {
      fetch('https://pokebuildapi.fr/api/v1/random/team')
        .then(res => res.json())
        .then(data => {
          setRightPokemon(data[0]); 
          setLoadingRight(false)
        })
    }, 5000);

    return () => clearTimeout(timer);
  }, [leftPokemon]);



const duelFight = () => {
  if (!leftPokemon || !rightPokemon) return;

  const leftAttack = leftPokemon.stats.attack;
  const rightAttack = rightPokemon.stats.attack;

  let winner;
  if (leftAttack > rightAttack) {
    winner = leftPokemon.name;
  } else if (rightAttack > leftAttack) {
    winner = rightPokemon.name;
    
  } else {
    winner = "Égalité !";
  }

  alert(`Combat terminé !\n${leftPokemon.name} (Attack: ${leftAttack}) VS ${rightPokemon.name} (Attack: ${rightAttack})\nGagnant : ${winner}`);
};

  return (
    <div>
      <Header />
      <h2 style={{ textAlign: "center", marginTop: "5em" }}>
        Combat Pokémon
      </h2>
      <div style={battleContainer}>
        {loadingLeft && <p>Chargement du Pokémon...</p>}
        {leftPokemon && <FightPokemon pokemon={leftPokemon} />}


        {loadingRight && <p>Préparation de l'adversaire...</p>}
        {rightPokemon && <FightPokemon pokemon={rightPokemon} />}

      </div>

        {leftPokemon && rightPokemon && (
        <div style={{ textAlign: "center", marginTop: "2em" }}>
          <button style={fightButtonStyle} onClick={duelFight}>
            Combattre !
          </button>
        </div>
      )}
    </div>
  );
}

export default FightPokemonType;



const battleContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "2em",
};

const fightButtonStyle = {
  padding: "12px 20px",
  fontSize: "18px",
  fontWeight: "bold",
  backgroundColor: "#e53935",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "all 0.2s ease",
};