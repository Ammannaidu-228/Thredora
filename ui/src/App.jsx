
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import CustomerRoutes from './Routing/CustomerRoutes'
//import Cart from './customer/components/Cart/Cart'
//import Checkout from './customer/components/Checkout/Checkout'
//import Footer from './customer/components/Footer/Footer'

//import Navbar from './customer/components/Navbar/Navbar'
//import ProductDetails from './customer/components/Product/Productdetails/ProductDetails'
//import HomePage from './customer/pages/homepage/HomePage'
//import Product from './customer/components/Product/Product'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<CustomerRoutes/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
