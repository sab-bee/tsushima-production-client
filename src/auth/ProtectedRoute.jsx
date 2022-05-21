// require auth file
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import { auth } from '../firebase/firebase.init'

function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()

  if (loading) {
    // return <Spinner></Spinner>
    return
  }
  if (!user) {
    return <Navigate to='/account' state={{ from: location }} replace />
  }

  return children
}
export default ProtectedRoute
