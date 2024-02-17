import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllUsers = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch, data: allUsers = [] } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const res = await axiosPublic.get('/users');
      return res.data;
    }
  });
  return [allUsers, refetch];
};

export default useAllUsers;
