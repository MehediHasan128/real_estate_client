import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "./useAuthProvider";
import useAxiosPublic from "./useAxiosPublic";


const useGetUserStatus = () => {
    const {user} = useAuthProvider();
    const axiosPublic = useAxiosPublic();

    const {data: userStatus} = useQuery({
        queryKey: [user?.email, 'userStatus'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/users/${user.email}`);
            return res.data?.status;
        }
    });
    return [userStatus]
};

export default useGetUserStatus;