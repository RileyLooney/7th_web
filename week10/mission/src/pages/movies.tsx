import styled from "styled-components";
import MovieCard from '../components/MovieCard';
import { useGetMovies } from '../hooks/queries/useGetMovies';
import { useQuery } from '@tanstack/react-query';
import { useGetInfiniteMovies } from '../hooks/queries/useGetInfiniteMovies';
import { useInView } from 'react-intersection-observer';

function Movies(){
  /*
  const {data:movies, isPending, isError} = useQuery({
    queryFn: () => useGetMovies({category: 'popular', pageParam: 1}),
    queryKey: ['movies', 'popular'],
    cacheTime: 10000,
    staleTime: 10000,
  })
  */

  const {data:movies, isLoading, isFetching, hasNextPage, isPending, fetchNextPage, isFetchingNextPage, isError} = useGetInfiniteMovies('popular');
  const {ref, inView} = useInView({
    threshold: 0
  })

  useEffect(() => {
    if (inView){
      !isFetching && hasNextPage && fetchNextPage();
    }
  },[inView, isFetching, hasNextPage, fetchNextPage()]);

  /*
  if(isPending){
    return(
      <h1>Loading...</h1>
    )
  }

  if(isError){
    return(
      <h1>Error! Error! Error!</h1>
    )
  }
  */

  return(
    <CardList>
      {movies?.pages.map((page) => (
        page.results.map((movie, _) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))
      ))}
      <div style={{backgroundColor:'violet'}} ref={ref}>
        <h1>Ha</h1>
      </div>
    </CardList>
  )
}
export default Movies;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
