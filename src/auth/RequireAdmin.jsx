// require auth file
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'
import { Navigate, useLocation } from 'react-router-dom'
import { auth } from '../firebase/firebase.init'
import { useAdmin } from '../hooks/useAdmin'

export function RequireAdmin({ children }) {
  const [user, loading] = useAuthState(auth)
  const { admin, isLoding } = useAdmin(user)
  const location = useLocation()

  if (loading || isLoding) return

  if (!user || !admin) {
    toast.error('unauthorized admin access', {
      id: 2
    })
    signOut(auth)
    return <Navigate to='/account' state={{ from: location }} replace />
  }
  return children
}
