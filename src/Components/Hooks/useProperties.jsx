import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "./useAuthProvider";
import useAxiosPublic from "./useAxiosPublic";

const useProperties = () => {
    const {user} = useAuthProvider();
    const axioxPublic = useAxiosPublic();

    const { refetch, data: properties = [] } = useQuery({
        queryKey: ['properties', user?.email],
        queryFn: async () =>{
            const res = await axioxPublic.get(`/properties?email=${user?.email}`)
            return res.data;
        }
    })

    return [properties, refetch]
};

export default useProperties;