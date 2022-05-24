import { useQuery } from 'react-query'
import { axiosPublic } from '../api/axiosPublic'

export const useParts = (amount) => {
  const {
    data: parts,
    isLoading,
    isError,
    refetch,
  } = useQuery('parts', () =>
    axiosPublic(`/parts?amount=${amount}`).then((res) => res.data)
  )

  return { parts, refetch, isLoading }
}
