//Skapa färdiga url för att lättare hämta data med axios
const APIKEY = "7743dbbd06bb4bacb4cc22e233e55d10";

const requests = {
  // trendingNow: `https://api.themoviedb.org/3/trending/all/week?api_key=${APIKEY}&language=en-US`,
  trendingNow: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  // fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchNetflixOriginals: `discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated/?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
}
// Gör så att requests funktionen går att importera till andra filer
export default requests;