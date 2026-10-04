import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Header from "./layouts/Header";

// const App = () => {
//   return (
//    <>
//    <Routes>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/menu' element={<Menu/>}/>
//     <Route path='/login' element={<Login/>}/>
//     <Route path='/register' element={<Register/>}/>
//     <Route path='/cart' element={<Cart/>}/>
//     <Route path='/checkout' element={<Checkout/>}/>
//     <Route path='/aboutus' element={<AboutUs/>}/>
//     <Route path='/contactus' element={<ContactUs/>}/>

//    </Routes>

//    </>
//   )
// }

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-[70px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
