/* eslint-disable react/prop-types */
import { Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../../state/Cart/Action";

function CartItem({ item }) {

    const dispatch = useDispatch();

    const handleUpdateCart =(num)=>{
        const data = {data:{quantity:item?.quantity+num}, cartItemId: item._id}
        console.log(data)
        dispatch(updateCartItem(data))
    }

    const handleRemoveCartItem = ()=>{
        dispatch(removeCartItem(item._id))
    }


  return (
    <div className="p-5 mb-3 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            alt="Product Picture"
            src={item.product.imageUrl}
          ></img>
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item?.product?.brand}</p>
          <p className="opacity-70">{item?.product?.description}</p>
          <p className="opacity-70 mt-2">
            size: {item?.size}, {item?.product?.color}
          </p>
          <div className="flex items-center space-x-3 text-gray-900 pt-6">
            <p className="font-semibold">₹{item?.product?.discountPrice}</p>
            <p className="line-through opacity-50">₹{item?.product?.price}</p>
            <p className="text-green-600 font-semibold">
              {item?.product?.discountPercent}% off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{ color: "red" }} onClick={()=>handleUpdateCart(-1)}>
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-6 border rounded-sm">{item?.quantity}</span>
          <IconButton sx={{ color: "green" }} onClick={()=>handleUpdateCart(1)}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="px-[-2rem]">
          <Button className="small" onClick={handleRemoveCartItem} sx={{ color: "red" }}>
            remove item
            <DeleteOutlineIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
