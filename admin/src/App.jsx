import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Sidebar } from "./components/Sidebar"
import { Add } from "./pages/Add"
import { List } from "./pages/List"
import { Order } from "./pages/Order"

function App() {

  return (
    <div>
      <Navbar />
      <hr />

      <div className="flex">
        <Sidebar/>
        <Routes>

          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/order" element={<Order/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
