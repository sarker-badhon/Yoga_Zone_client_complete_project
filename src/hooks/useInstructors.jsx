import { useQuery } from 'react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';


const useInstructors = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
      queryKey: ['isInstructor', user?.email],
      enabled: !loading,
      queryFn: async () => {
          const res = await axiosSecure.get(`/users/${user?.email}?role=instructor`);
          return res.data;
      }
  })
  return [isInstructor, isInstructorLoading]

};

export default useInstructors;
