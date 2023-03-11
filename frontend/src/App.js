import { useState } from "react";

function App() {

  const [film , setFilm]= useState([]);
  return (
    <div className="App">
     <div className="container">
      <h1>Films Plateform</h1>
     </div>
     <div>
      <film/>
     </div>
    </div>
  );
}

export default App;
