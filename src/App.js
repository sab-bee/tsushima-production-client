import { Route, Routes } from "react-router-dom";
import Account from "./pages/Account/Account";
import Login from "./pages/Account/Login";
import Register from "./pages/Account/Register";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/account' element={<Account />}>
          <Route index element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
