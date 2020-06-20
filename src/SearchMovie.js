import React,{useState} from "react"
import MovieCard from "./Moviecard.js"

function SearchMovies()
{
    const [query,setQuery]=useState('');
    const [movies,setMovies]=useState([]);


    const searchmovie= async(e)=>
    {
        e.preventDefault();
   
  

   const url=`https://api.themoviedb.org/3/search/movie?api_key=d059a57423f37da4f423e0f19b8ca6b1&language=en-US&query=${query}&page=1&include_adult=false`

   try{
   const res=await fetch(url);
   const data= await res.json();
   
   setMovies(data.results)
   }
   catch(err)
   {
       console.error(err)
   }
}
    return(
        <>
        <form className="form" onSubmit={searchmovie}>
            <label className="label" htmlFor="query">
             Movie Name
            </label>
            <input className="input" type="text" name="query"
            placeholder="i.e Jurassic Park"
            value={query} onChange={(e)=> setQuery(e.target.value)}
            />
            <button className="button" type="submit">Search</button>
        </form>
        <br/>
        <br/>
        <div className="card-list">
            {movies.filter(movie=> movie.poster_path).map(movie=>
           <MovieCard movie={movie} key={movie.id}/>
            )}
        </div>
        </>
        )
}
export default SearchMovies;