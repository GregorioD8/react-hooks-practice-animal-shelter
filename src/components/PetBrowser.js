import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdopt}) {

  const petCards = pets.map((p) => (
    <Pet
    key={p.id}
    pet={p}
    onAdopt={onAdopt}
   
    />

  ))

  return <div className="ui cards">
          {petCards}
          </div>;
}

export default PetBrowser;