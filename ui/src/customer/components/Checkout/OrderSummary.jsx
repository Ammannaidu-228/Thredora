import AddressCard from "../AddressCard/AddressCard"
import Cart from "../Cart/Cart"

function OrderSummary() {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard/>
      </div>
      <div>
        <Cart/>
      </div>
    </div>
  )
}

export default OrderSummary
