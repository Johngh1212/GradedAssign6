// retrieve React, satData, Banner, Buttons, and Table components
import React, { useState } from "react"; 
import satData from "./components/satData"; 
import Banner from "./components/Banner"; 
import Buttons from "./components/Buttons"; 
import Table from "./components/Table";

function App() {

// variables use
const satState = useState(satData);
const sat = satState[0];
const setSat = satState[1];

const displaySats = [];
const orbitTypesSet = new Set();

// Iterate for statement over satData to collect unique orbit types
for (let i = 0; i < satData.length; i++) {
  orbitTypesSet.add(satData[i].orbitType);
}

// Convert the set to an array to store in displaySats
orbitTypesSet.forEach((orbitType) => {
  displaySats.push(orbitType);
});

  const filterByType = (currentType) => {
    const newSatDisplay = satData.filter((data) => data.orbitType === currentType);
    setSat(newSatDisplay);
  };


  return (
    <div>
      <Banner /> {/* Nest the Banner component inside the App function */}
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;

  
