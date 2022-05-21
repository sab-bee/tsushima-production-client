import { useEffect } from 'react'
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase.init'

export const useFirebase = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)
  const [createUserWithEmailAndPassword, cUser, cLoading, cError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth)
  const [updateProfile, updating, updateError] = useUpdateProfile(auth)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (gError || cError || eError || updateError) {
      let message = gError?.message || cError?.message || eError?.message || updateError?.message
      message = message.split(' ')
      toast.error(message.at(-1).replace(/auth|[)-/(]/g, ' '))
    }

  }, [gError, cError, eError, updateError])


  const from = location.state?.from?.pathname || '/'
  useEffect(() => {
    if (gUser || cUser || eUser) {
      toast.success('logged in')
      navigate(from, { replace: true })
    }
  }, [gUser, cUser, eUser, navigate, from])

  const handleGoogleSignIn = () => {
    signInWithGoogle()
  }

  const handleCreateUser = async ({ email, password, name }) => {
    await createUserWithEmailAndPassword(email, password)
    await updateProfile({ displayName: name })

  }

  const handleUserLogin = ({ email, password }) => {
    signInWithEmailAndPassword(email, password)
  }

  return {
    googleSignIn: { handleGoogleSignIn, gLoading },
    createUser: { handleCreateUser, cLoading },
    userLogin: { handleUserLogin, eLoading }
  }
}