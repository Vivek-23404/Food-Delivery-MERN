import { Navbar } from "./components/Navbar";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { PlaceOrder } from "./pages/PlaceOrder";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Account/Loign";
import { Register } from "./pages/Account/Register";
import { DefineRoutes } from "./pages/DefineRoutes";
import { PrivateRutes } from "./components/PrivateRutes";
import { Profile } from "./pages/Profile";
import { Verify } from "./pages/Verify";
import { MyOders } from "./pages/MyOders";

function App() {

  return (
    <>
    <div className="w-full m-auto lg:px-6 md:px-4 px-2">


      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>


        <Route path="/" element={<DefineRoutes/>}>
          <Route path="/" element={<Home/>}/>
            <Route element={<PrivateRutes/>}>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/placeorder" element={<PlaceOrder/>}/>
              <Route path="/verify" element={<Verify/>}/>
              <Route path="/myorders" element={<MyOders/>}/>
            </Route>
        </Route>

        
      </Routes>
      
    </div>

    </>
  )
}

export default App



// <div className="w-[80%] m-auto">
//       <Navbar/>

//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/login" element={<Login/>}/>
//         <Route path="/register" element={<Register/>}/>
//         <Route path="/cart" element={<Cart/>}/>
//         <Route path="/placeorder" element={<PlaceOrder/>}/>
//       </Routes>
      
//     </div>
//       <Footer/>