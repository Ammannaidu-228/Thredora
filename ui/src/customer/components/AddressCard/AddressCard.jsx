/* eslint-disable react/prop-types */

function AddressCard({shippingAddress}) {
  return (
    <div>
      <h6 className="font-bold text-violet-500 mb-3">Delivery Address </h6>
      <div className="space-y-5">
        <p className="font-semibold">{shippingAddress?.firstName}  {shippingAddress?.lastName} </p>
        <p className=" text-sm font-normal">{shippingAddress?.state}, {shippingAddress?.city}</p>
      </div>
      <div>
        <p className=" text-sm font-normal"> Village/street: <small className="font-bold">{shippingAddress?.streetAddress}</small></p>
      </div>
      <div>
        <p className=" text-sm font-normal"> Pin Code: <small className="font-bold">{shippingAddress?.zipCode}</small></p>
      </div>
      <div>
        <p className=" text-sm font-normal"> Phone Number: <small className="font-bold">{shippingAddress?.phone}</small></p>
      </div>

    </div>
  )
}

export default AddressCard
