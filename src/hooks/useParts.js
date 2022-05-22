import { useQuery } from 'react-query'
import { axiosPublic } from '../api/axiosPublic'

export const useParts = () => {
  const {
    data: parts,
    isLoading,
    isError,
    refetch,
  } = useQuery('parts', () => axiosPublic('/parts'))

  return { parts, refetch, isLoading }
}
