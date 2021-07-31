import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
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
      const response = await fetch('https://swapi.dev/api/films');
      if(response.status !== 200) {
        throw new Error();
      }
      const data = await response.json();
      setMoviesState(data.results);
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

  return (
    <React.Fragment>
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
