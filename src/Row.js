import React, { useState, useEffect } from 'react'
import axios from './axios'


function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  //En liten kodblock som körs eller inte körs baserad på specifika kondition och/eller variabler

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
    }
    fetchData();
    // Parametern är "[]" kör koden endast en gång, när Row function laddas
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      {movies}
      {/* container -> posters */}
    </div>
  )
}
export default Row;