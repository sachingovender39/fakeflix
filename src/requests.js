require('dotenv').config();
const key = process.env.REACT_APP_TMDB
const requests = [
    {name:'Trending',url:'/trending/all/week?api_key='+key},
    {name:'Netflix Originals',url:'/discover/tv?&language=en-US&sort_by=popularity.desc&page=1&with_networks=213&include_null_first_air_dates=false&api_key='+key},
    {name:'Top Rated',url:'/movie/top_rated?language=en-US&page=1&api_key='+key},
    {name:'Action',url:'/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&api_key='+key},
    {name:'Comedy',url:'/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&api_key='+key},
    {name:'Horror',url:'/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&api_key='+key},
    {name:'Romance',url:'/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&api_key='+key},
    {name:'Documentaries',url:'/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&api_key='+key}
]

export default requests
