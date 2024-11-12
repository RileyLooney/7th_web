import React from 'react';
import styled from "styled-components";
import MovieCard from '../components/MovieCard';
import useCustomFetch from '../hooks/useCustomFetch';

function Movies(){
  const {data: movies, isLoading, isError} = useCustomFetch(`/movie/popular?language=ko-kr`)

  if(isLoading){
    return(
      <h1>Loading...</h1>
    )
  }

  if(isError){
    return(
      <h1>Error! Error! Error!</h1>
    )
  }

  return(
    <CardList>
      {movies.data?.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </CardList>
  )
}
export default Movies;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
