import { Button, IconButton } from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function CartItem() {
    return (
        <div className="p-5 mb-3 shadow-lg border rounded-md">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className="w-full h-full object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/1/h/g/m-pw333-purshottam-wala-original-imag8zf6ybkmhehy-bb.jpeg?q=70"></img>
                </div>
                <div className="ml-5 space-y-1">
                <p className="font-semibold">Roadster</p>
                    <p className="opacity-70">Short Description</p>
                    <p className="opacity-70 mt-2">Vastrado</p>
                <div className="flex items-center space-x-3 text-gray-900 pt-6">
                    <p className="font-semibold">₹400</p>
                    <p className="line-through opacity-50">₹750</p>
                    <p className="text-green-600 font-semibold">40% off</p>
                </div>

                </div>
            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2">
                <IconButton sx={{color:'red'}}>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>

                    <span className="py-1 px-6 border rounded-sm">3
                    </span>
                    <IconButton sx={{color:'green'}}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                </div>  
                <div className="px-[-2rem]">
                    <Button className="small" sx={{color:'red'}}>
                        remove item<DeleteOutlineIcon/>
                    </Button>
                </div>

            </div>

        </div>
    )
}

export default CartItem
