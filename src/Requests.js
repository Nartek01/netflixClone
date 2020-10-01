const APIKEY = "7743dbbd06bb4bacb4cc22e233e55d10";

const requests = {
  trendingNow: `https://api.themoviedb.org/3/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&with_networks=213`,
}

export default requests;