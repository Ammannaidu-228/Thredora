
import '../App.css'
import Navbar from '../customer/components/Navbar/Navbar'
//import Checkout from '../customer/components/Checkout/Checkout'
import Footer from '../customer/components/Footer/Footer'
//import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
//import ProductDetails from './customer/components/Product/Productdetails/ProductDetails'
//import HomePage from './customer/pages/homepage/HomePage'
//import Product from './customer/components/Product/Product'

function Landing() {

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <OrderDetails/>
    </div>
    <Footer/>
    </>
  )
}

export default Landing
