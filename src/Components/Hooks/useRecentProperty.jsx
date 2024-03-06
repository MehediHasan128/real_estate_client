import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "./useAuthProvider";
import useAxiosPublic from "./useAxiosPublic";


const useRecentProperty = () => {

    const {user} = useAuthProvider();
    const axiosPublic = useAxiosPublic();

    const {data: recentProperties = []} = useQuery({
        queryKey: ['recentProperties', user?.email],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/recentProperty?email=${user.email}`);
            return res.data;
        }
    })

    return [recentProperties]
};

export default useRecentProperty;