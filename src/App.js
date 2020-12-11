//Importera react från node_modules till variabeln "React".
import React from 'react';
//Importera "App.css" filen till den här filen "App.js"
import './App.css';
import Row from './Row';
//Importera Requests funktionen från "./Requests.js"  och tillämpar den till variabeln requests
import requests from './Requests';


function App() {
  return (
    <div className="App">
      {/* Header text */}
      <h1>Naras Netflix Klon!</h1>
      {/* Visar fetch resultaten från TMDB's API */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now " fetchUrl={requests.trendingNow} />
    </div>
  );
}

export default App;
