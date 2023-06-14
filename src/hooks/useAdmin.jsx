import { useQuery } from 'react-query';
import { useContext } from 'react';
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {data: isAdmin, isLoading: isAdminLoading} = useQuery({ 
      queryKey: ['isAdmin', user?.email],
      enabled: !loading,
      queryFn: async () => {
          const res = await axiosSecure.get(`/users/${user?.email}?role=admin`);
          return res.data;
      }
  })
  return [isAdmin, isAdminLoading]

};

export default useAdmin;