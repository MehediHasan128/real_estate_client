import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "./useAuthProvider";
import useAxiosPublic from "./useAxiosPublic";


const useClient = () => {
    const {user} = useAuthProvider();
    const axiosPublic = useAxiosPublic();

    const {data: clients = []} = useQuery({
        queryKey: [user?.email, 'clients'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/clients?email=${user.email}`);
            return res.data;
        }
    });
    return [clients];
};

export default useClient;