import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [searchName, setSearchName] = useState("");

  
  return (
    <header style={headerContainer}>
      <div style={headerLeft}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
          alt="Pokeball Logo"
          style={headerLogo}
        />
        <h1 style={headerTitle}>Pokédex</h1>
      </div>

      <input
        type="text"
        placeholder="Rechercher..."
        style={headerSearch}
        onChange={(e) => setSearchName(e.target.value)}
      />

      <Link to={`/recherche/${searchName}`}>Recherche</Link>

      <nav style={headerNav}>
        <h4 style={linkWrapper}>
          <Link to="/" style={linkStyle}>Accueil</Link>
        </h4>
        <h4 style={linkWrapper}>
          <Link to="/listePokemon" style={linkStyle}>Liste Pokémons</Link>
        </h4>
        <h4 style={linkWrapper}>
          <Link to="/aleatoire" style={linkStyle}>Aléatoire</Link>
        </h4>
        <h4 style={linkWrapper}>
          <Link to="/jouer" style={linkStyle}>Jouer</Link>
        </h4>
      </nav>
    </header>
  );
};

export default Header;

const headerContainer = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: "15px 25px",
  background: "#f34a4aff", 
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  zIndex: 1000,
  
};

const headerLeft = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const headerLogo = {
  width: "40px",
  height: "40px",
};

const headerTitle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#ffffff", 
};

const headerSearch = {
  flex: 1,
  maxWidth: "300px",
  padding: "8px 12px",
  borderRadius: "8px",
  border: "1px solid #FFD700", 
};

const headerNav = {
  display: "flex",
  gap: "20px",
  fontWeight: "500",
  marginRight: "5em",
};

const linkWrapper = {
  margin: 0,
};

const linkStyle = {
  color: "#ffffff", 
  textDecoration: "none",
};
