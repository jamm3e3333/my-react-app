import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';

import './App.css';

const App = () => {

  const [moviesState, setMoviesState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(undefined);

  const getMovies = useCallback( async () => {
    try{
      setIsError(undefined);
      setIsLoading(true);
      setMoviesState([]);
      const response = await fetch('https://react-http-e2204-default-rtdb.firebaseio.com/movies.json', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });
      if(response.status !== 200) {
        throw new Error();
      }
      const data = await response.json();
      const loadedMovies = [];

      for(const item in data) {
        loadedMovies.push({
          id: item,
          title: data[item].title,
          openingText: data[item].openingText,
          releaseDate: data[item].releaseDate,
        })
      }
      console.log(loadedMovies)
      setMoviesState(loadedMovies);
      setIsLoading(false);
    }
    catch(e){
      setIsLoading(false);
      setMoviesState([]);
      setIsError(true);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const AddMovieHandler = async (movie) => {
    try{
      const response = await fetch('https://react-http-e2204-default-rtdb.firebaseio.com/movies.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': "application/json"
        }
      })
      if(!response.ok) {
        throw new Error()
      }
      const data = await response.json();
      console.log(data);
    }
    catch(e){
      setIsLoading(false);
      setMoviesState([]);
      setIsError(true);
    }
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={AddMovieHandler}/>
      </section>
      <section>
        <button onClick={getMovies}>Fetch Movies</button>
      </section>
      {isError && 
        <section>
          <p>Error while catching the data.</p>
        </section>
      }
      {(isLoading ||  moviesState.length > 0) &&
      <section>
        {isLoading && <p>Loading... </p>}
          {!isLoading && <MoviesList movies={moviesState} />}
      </section>}
    </React.Fragment>
  );
}

export default App;
