import { Route, Routes } from "react-router-dom";
import Account from "./pages/Account/Account";
import Login from "./pages/Account/Login";
import Register from "./pages/Account/Register";
import Home from "./pages/Home/Home";
import { Toaster } from 'react-hot-toast';
import Navbar from "./components/Navbar";
import Purchase from "./pages/Purchase/Purchase";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" toastOptions={{ duration: 3000, }} />
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/account' element={<Account />}>
          <Route index element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>
        <Route path='/purchase' element={
          <ProtectedRoute>
            <Purchase />
          </ProtectedRoute>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
