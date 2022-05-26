import React from 'react'
import Banner from './Banner'
import Parts from './Parts'
import Reviews from './Reviews'
import BusinessSummary from './BusinessSummary'
import Footer from '../../components/Footer'

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <Reviews></Reviews>
      <BusinessSummary></BusinessSummary>
      <Footer></Footer>
    </div>
  )
}

export default Home
