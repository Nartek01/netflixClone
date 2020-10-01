import React, { useState,useEffect } from 'react'
import axios from './axios'


function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  // A snippet of code which runs based on a specific condition/variable

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
    }
    fetchData();
  // if [], run once when the row load, and dont run it again
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