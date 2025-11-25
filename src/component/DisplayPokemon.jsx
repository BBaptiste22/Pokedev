import { Link } from "react-router-dom";

function DisplayPokemon({ pokemon }) {
  return (
    <Link 
      to={`/DetailsPokemon/${pokemon.id}`} 
      style={{ textDecoration: "none", color: "inherit" }} 
    >
      <div key={pokemon.id} style={styles.card}>
        <h3 style={styles.title}>{pokemon.name}</h3>
        <img
          src={pokemon.image}
          alt={pokemon.name} 
          style={styles.image}
        />
      </div>
    </Link>
  );
}

export default DisplayPokemon;

const styles = {
  

card: {
    padding: "20px",
    marginBottom: "15px",
    borderRadius: "14px",
    maxWidth: "350px",
    marginTop: "5em",
    cursor: "pointer",
  },

  title: {
    marginBottom: "10px",
    color: "black"
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "contain",
    marginBottom: "15px",
  },
};









