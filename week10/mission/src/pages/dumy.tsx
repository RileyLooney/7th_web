import { useParams } from 'react-router-dom';

const DumyPage = () => {
    const {movieId} = useParams();

    console.log(movieId)

    return(
        <>
            <h1>Now Page's parameter : {movieId}</h1>
        </>
    )
}

export default DumyPage;