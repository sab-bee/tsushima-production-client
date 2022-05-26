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
import Payment from './pages/Purchase/Payment'
import AdminPanel from './pages/DashBoard/AdminPanel'
import { RequireAdmin } from './auth/RequireAdmin'
import AddProduct from './pages/DashBoard/AddProduct'
import ManageProduct from './pages/DashBoard/ManageProduct'
import ManageOrder from './pages/DashBoard/ManageOrder'
import { RquireUserOnly } from './auth/RquireUserOnly'
import Blog from './pages/Blog/Blog'
import NotFound from './pages/NotFound/NotFound'

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
        <Route path='/payment/:_id' element={<ProtectedRoute><Payment/></ProtectedRoute>}></Route>
        <Route path='/dashboard' element={<ProtectedRoute><DashBoard/></ProtectedRoute>}>
          <Route path='myOrder' element={<RquireUserOnly><MyOrders/></RquireUserOnly>}></Route>
          <Route path='addReview' element={<RquireUserOnly><AddReview/></RquireUserOnly>}></Route>
          <Route index element={<MyProfile/>}></Route>
          <Route path='adminPanel' element={<RequireAdmin><AdminPanel/></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct/></RequireAdmin>}></Route>
          <Route path='manageProduct' element={<RequireAdmin><ManageProduct/></RequireAdmin>}></Route>
          <Route path='manageOrder' element={<RequireAdmin><ManageOrder/></RequireAdmin>}></Route>
        </Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App
