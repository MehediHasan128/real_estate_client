import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "./useAuthProvider";
import useAxiosPublic from "./useAxiosPublic";

const useUserRole = () => {
    const {user} = useAuthProvider();
    const axiosPublic = useAxiosPublic();

    const {data: userRole} = useQuery({
        queryKey: [user?.email, 'userRole'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/users/role/${user.email}`);
            return res.data?.userRole;
        }
    })
    return [userRole]
};

export default useUserRole;