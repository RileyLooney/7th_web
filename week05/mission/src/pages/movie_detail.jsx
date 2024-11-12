import React from "react";
import { useParams } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
//import GetDetails from "../components/getdetails";

const MovieDetailPage = () => {
    const { movieId } = useParams();
    const {data: movie, isLoadingMovie, isErrorMovie} = useCustomFetch(`/movie/${movieId}?language=ko-kr`);
    const {data: credit, isLoadingCredit, isErrorCredit} = useCustomFetch(`/movie/${movieId}/credits?language=ko-kr`);
    //data.results.id

    if(isLoadingMovie || isLoadingCredit){
        return(
        <h1>Loading...</h1>
        )
    }

    if(isErrorMovie || isErrorCredit){
        return(
        <h1>Error! Error! Error!</h1>
        )
    }

    console.log(movie.data.title);

    return(
        <>
            <h1>Movie Id : </h1>
            <h1>Title : </h1>  
            <div>Overview : </div>        
        </>
        
    )
}

export default MovieDetailPage;