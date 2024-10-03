
import Admin from "../Admin/Admin"
import { Route, Routes } from "react-router-dom"

function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Admin/>}/>


      </Routes>
    </div>
  )
}

export default AdminRoutes
