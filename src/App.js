import { Route, Routes } from 'react-router-dom'
import Account from './pages/Account/Account'
import Login from './pages/Account/Login'
import Register from './pages/Account/Register'
import Home from './pages/Home/Home'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Purchase from './pages/Purchase/Purchase'
import ProtectedRoute from './auth/ProtectedRoute'
import Product from './pages/Purchase/Product'
import DashBoard from './pages/DashBoard/DashBoard'
import MyOrders from './pages/DashBoard/MyOrders'
import AddReview from './pages/DashBoard/AddReview'
import MyProfile from './pages/DashBoard/MyProfile'

// prettier-ignore
function App() {
  return (
    <div className='App'>
      
      <Toaster position='top-center' toastOptions={{ duration: 3000 }} />
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/account' element={<Account />}>
          <Route index element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>
        <Route path='/purchase/:_id' element={<ProtectedRoute><Purchase /></ProtectedRoute>}>
          <Route index element={<Product />}></Route>
        </Route>
        <Route path='/dashboard' element={<ProtectedRoute><DashBoard/></ProtectedRoute>}>
          <Route index element={<MyOrders/>}></Route>
          <Route path='addReview' element={<AddReview/>}></Route>
          <Route path='myProfile' element={<MyProfile/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
