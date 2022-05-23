import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { axiosPrivate } from '../../api/axiosPrivate'


const CheckoutForm = ({ order }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [clientSecret, setClientSecret] = useState('')
  const { totalPrice, productName, userName, userEmail, _id } = order


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
    error &&
      toast.error(error.message, {
        id: toastId,
      })

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
      !error &&
        toast.error(intentError?.message, {
          id: toastId,
        })
    } else {
      toast.success('payment complete', {
        id: toastId,
      })
      //! console.log(paymentIntent)

      //store payment details on db
      const paymentInfo = {
        productName,
        productId: _id,
        transactionId: paymentIntent.id,
        date: new Date(),
      }



      axiosPrivate
        .patch(`/order?id=${_id}`, paymentInfo)
        .then((res) => console.log(res.data))
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
