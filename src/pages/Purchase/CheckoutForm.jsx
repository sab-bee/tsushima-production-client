import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { axiosPrivate } from '../../api/axiosPrivate'

const CheckoutForm = ({ order }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [clientSecret, setClientSecret] = useState('')
  const { totalPrice, userName, userEmail } = order
  const [transactionId, setTransactionId] = useState('')

  useEffect(() => {
    axiosPrivate.post(`/create-payment-intent`, { totalPrice }).then((res) => {
      if (res?.data?.clientSecret) {
        setClientSecret(res.data.clientSecret)
      }
    })
  }, [totalPrice])

  const handleSubmit = async (event) => {
    const toastId = toast.loading('payment processing...')
    event.preventDefault()
    if (!stripe || !elements) return
    const card = elements.getElement(CardElement)
    if (card === null) return

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })
    error && toast.error(error.message)

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail,
          },
        },
      })

    if (intentError) {
      !error && toast.error(intentError?.message)
      toast.dismiss(toastId)
    } else {
      toast.success('payment complete')
      //! console.log(paymentIntent)
      setTransactionId(paymentIntent.id)
      toast.dismiss(toastId)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        type='submit'
        disabled={!stripe || !clientSecret}
        className='cta cta-secondary'
      >
        Pay
      </button>
    </form>
  )
}

export default CheckoutForm
