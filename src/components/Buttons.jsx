import "./styling.css"; 

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">

      {/* First button */}
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      {/* Second button */}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;

