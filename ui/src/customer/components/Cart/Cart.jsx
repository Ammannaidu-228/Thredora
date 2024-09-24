import { useNavigate } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import CartItem from "./cartItem/CartItem"
import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getCart } from "../../../state/Cart/Action"
function Cart() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart } = useSelector((store)=> store)
    const handleCheckOut = ()=>{
        navigate('/checkout?step=2')
    }
    useEffect(()=>{
        console.log("Use Effect Called")
        dispatch(getCart())
    },[dispatch,cart.deleteCartItem, cart.updateCartItem])
    return (
        <div>
            <Navbar/>
            <div className="mt-10">
                <div className="lg:grid grid-cols-3 lg:px-16 relative">
                    <div className="col-span-2 mb-2">
                        {cart.cart?.cartItems.map((item, index) => <CartItem item={item} key={index} />)}

                    </div>
                    <div className="px-5 sticky-top h-[100vh] mt-5 lg:mt-0">
                        <div className="border mb-5">
                            <p className="uppercase font-bold opacity-60 pt-3 px-2 pb-4">Price Details</p>
                            <hr />
                            <div className="flex justify-between px-2 pt-3 text-black">
                                <span>Price</span>
                                <span className="text-green-600">₹{cart.cart?.totalPrice}</span>
                            </div>
                            <div className="flex justify-between px-2 pt-3 text-black">
                                <span>Discount</span>
                                <span className="text-orange-600">-₹{cart.cart?.discount}</span>
                            </div>
                            <div className="flex justify-between px-2 pb-1 pt-3 text-black">
                                <span>Delivery Charges</span>
                                <span className="text-green-600" >free</span>
                            </div>
                            <hr />
                            <div className="flex justify-between px-2 pt-3 text-black">
                                <span className="font-bold">TOTAL AMOUNT</span>
                                <span className="text-green-600 font-bold">₹{cart.cart?.totalDiscountPrice}</span>
                            </div>
                        </div>
                        <Button onClick={handleCheckOut} className='success w-full' size='large' variant='contained'> CheckOuT</Button>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart
