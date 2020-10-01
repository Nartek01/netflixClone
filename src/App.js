import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Requests';


function App() {
  return (
    <div className="App">
      <h1>Hey Clever Programmer! Let's build a Netflix Clone 🟢</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now " fetchUrl={requests.trendingNow} />
    </div>
  );
}

export default App;