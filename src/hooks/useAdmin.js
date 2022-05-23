import { useQuery } from 'react-query'
import { axiosPrivate } from '../api/axiosPrivate'

export const useAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('allUsers', () => axiosPrivate('/user').then((res) => res.data))

  return { users, isLoading, refetch }
}
