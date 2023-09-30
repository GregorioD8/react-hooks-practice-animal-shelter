import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
const API = "http://localhost:3001/pets"
function App() {
  const [pets, setPets] = useState([]);
  const [filterBy, setFilterBy] = useState({ type: "all" });


  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      setPets(data)
      console.log(data)
    })
  }, [])
  
  function handleAdopt(adoptedPet) {
    setPets(pets.map((p) => p === adoptedPet ? {...p, isAdopted: true} : p ))
    console.log(pets)
  }

  const filteredPets = pets.filter((p) => p.type === filterBy)
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
            filterBy={filterBy}
            onFilterChange={setFilterBy}
            
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser 
            pets={filteredPets}
            onAdopt={handleAdopt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;