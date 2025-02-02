import React from "react";

function Pet( { pet, onAdopt } ) {

  function handleAdopt(){
    onAdopt(pet)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender + " "}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={handleAdopt}>Adopt pet</button>
        )}
        
   
      </div>
    </div>
  );
}

export default Pet;