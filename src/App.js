import { useEffect, useState } from 'react';
import './App.css';
import iconSearch from './assets/search-icon.png';
import MovieCard from './MovieCard';

const API_URL = "https://www.omdbapi.com/?apikey=63f2535";
const App = () => {
    const [movies, setMovies] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovie("spiderman");
    }, []);
    return (
        <div className="container">
            <center>
                <h1>React Movie</h1>
                <div className='search'>
                    <input className="form-control search-input" type="text" value={searchTerm} placeholder='Search Movie'
                        onChange={(e) => setSearchTerm(e.target.value)}/>
                <div className="search-icon-container" onClick={() => searchMovie(searchTerm)}><img className="search-icon" src={iconSearch} alt="search icon" /></div>
                </div>
                {movies !== undefined && movies.length > 0 ? 
                (
                    <div className='row mt-5'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ): (
                    <div className='row mt-5'>
                        <h1>No Movie Found</h1>
                    </div>
                )}
                
            </center>
        </div>
    );
}

export default App;