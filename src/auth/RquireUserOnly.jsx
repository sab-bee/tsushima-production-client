
import { useAuthState } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase/firebase.init'
import { useAdmin } from '../hooks/useAdmin'

export function RquireUserOnly({ children }) {
  const [user, loading] = useAuthState(auth)
  const { admin, isLoding } = useAdmin(user)

  if (loading || isLoding) return

  if (!user || admin) {
    toast.error('cant access user only tab', {
      id: 2
    })
    return <Navigate to='/' />
  }
  return children
}
