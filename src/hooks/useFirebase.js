import axios from 'axios'
import { useEffect } from 'react'
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
  useAuthState,
} from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'
import { useLocation, useNavigate } from 'react-router-dom'
import { axiosPublic } from '../api/axiosPublic'
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
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (gError || cError || eError || updateError) {
      let message =
        gError?.message ||
        cError?.message ||
        eError?.message ||
        updateError?.message
      message = message.split(' ')
      toast.error(message.at(-1).replace(/auth|[)-/(]/g, ' '))
    }
  }, [gError, cError, eError, updateError])

  const from = location.state?.from?.pathname || '/'
  useEffect(() => {
    if (user) {
      if (!from.includes('adminPanel')) {
        // dont show any toast if user directly goes to admin panel using url
        toast.success('logged in', {
          id: 'unique id',
          position: 'top-right',
        })
      }
      navigate(from, { replace: true })
      const email = user?.email
      axiosPublic
        .post(`/account/${email}`, { name: user.displayName })
        .then((res) => {
          const token = res.data?.token
          localStorage.setItem('token', token)
        })
    }
  }, [navigate, from, user])

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
    userLogin: { handleUserLogin, eLoading },
  }
}
