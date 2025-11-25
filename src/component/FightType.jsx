import React, { useState } from "react";
import { Link } from "react-router-dom";

function FightType({ types }) {
  const [selectedType, setSelectedType] = useState("");

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Choisissez un type :</h2>

      <select
        style={selectStyle}
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">-- Sélectionnez un type --</option>
        {types.map((type) => (
          <option key={type.id} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>

      {selectedType && (
        <Link to={`/jouer/${selectedType}`} style={goLinkStyle}>
          GO !!
        </Link>
      )}
    </div>
  );
}

export default FightType;

// 🎨 Styles
const containerStyle = {
  maxWidth: "350px",
  margin: "40px auto",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#76777aff",
  border: "1px solid #ddd",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
  color: "Black",
};

const selectStyle = {
  width: "80%",
  padding: "8px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #aaa",
  cursor: "pointer",
  backgroundColor: "#ffffff",
  color: "Black",
};

const goLinkStyle = {
  display: "inline-block",
  marginTop: "15px",
  padding: "10px 20px",
  backgroundColor: "#4caf50",
  color: "white",
  fontWeight: "bold",
  borderRadius: "6px",
  textDecoration: "none",
  cursor: "pointer",
};
