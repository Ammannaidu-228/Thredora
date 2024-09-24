import { useDispatch, useSelector } from "react-redux";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/cartItem/CartItem";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { getOrderById } from "../../../state/Order/Action";
import { createPayment } from "../../../state/Payment/Action";
function OrderSummary() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order} = useSelector(store=> store)
  const searchParams = new URLSearchParams(location.search)
  const orderId = searchParams.get("orderId")

  const handlePayment = () => {
    console.log("In the Handle Payment")
    dispatch(createPayment(orderId));
  };

  useEffect(()=>{
    console.log("OrderId",orderId)
    console.log("useEffect called")
    dispatch(getOrderById(orderId))
  },[orderId])
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard shippingAddress = {order.order?.recordedOrder?.shippingAddress}/>
      </div>
      <div>
        <div>
          <div className="lg:grid grid-cols-3 mt-5 relative">
            <div className="col-span-2 ">
              {order.order?.recordedOrder?.orderItems.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}
            </div>
            <div className="px-5 ml-4 sticky-top h-[100vh] mt-5 lg:mt-0 mx-[-1rem] ">
              <div className="border mb-5">
                <p className="uppercase font-bold opacity-60 pt-3 px-2 pb-4">
                  Price Details
                </p>
                <hr />
                <div className="flex justify-between px-2 pt-3 text-black">
                  <span>Price</span>
                  <span className="text-green-600">
                    ₹{order.order?.recordedOrder?.totalPrice}
                  </span>
                </div>
                <div className="flex justify-between px-2 pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-orange-600">
                    -₹{order.order?.recordedOrder?.discount}
                  </span>
                </div>
                <div className="flex justify-between px-2 pb-1 pt-3 text-black">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">free</span>
                </div>
                <hr />
                <div className="flex justify-between px-2 pt-3 text-black">
                  <span className="font-bold">TOTAL AMOUNT</span>
                  <span className="text-green-600 font-bold">
                    ₹{order.order?.recordedOrder?.totalDiscountPrice}
                  </span>
                </div>
              </div>
              <Button
                onClick={handlePayment}
                className="success w-full"
                size="large"
                variant="contained"
              >
     
                Payment
              </Button>
            </div>
          </div>
        </div>
    
      </div>
     
    </div>
  );
}

export default OrderSummary;
