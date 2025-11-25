import React, { useEffect, useState } from "react";
import FightType from "../component/FightType";
import Header from "../component/Header";

function FightPage() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
      .then(res => res.json())
      .then(data => setTypes(data)); 
  }, []);

  return (
    <div>
        <Header />
        <FightType types={types} />
    </div>
  );
}

export default FightPage;
