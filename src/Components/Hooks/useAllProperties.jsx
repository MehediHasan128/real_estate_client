import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProperties = () => {

    const axioxPublic = useAxiosPublic();

    const {refetch, data: allProperty = []} = useQuery({
        queryKey: ['allproperties'],
        queryFn: async () =>{
            const res = await axioxPublic.get('/allProperty')
            return res.data;
        }
    });

    return [ allProperty, refetch ]
};

export default useAllProperties;