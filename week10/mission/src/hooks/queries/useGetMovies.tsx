import { axiosInstance } from "../../apis/axios_instance.tsx";

const useGetMovies = async({category:string, pageParam:any}) => {
    const {data} = await axiosInstance.get(`/movie/${category}?language=ko-KR&page=${pageParam}`);

    return data
}

export {useGetMovies};