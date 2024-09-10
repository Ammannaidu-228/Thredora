import { Grid } from "@mui/material"
import AdjustIcon from '@mui/icons-material/Adjust';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function OrderCard() {
    const[orderStatus] = useState(true);
    const navigate = useNavigate()
    return (
        <div onClick={()=> navigate(`/account/order/${5}`)} className="p-5 mt-3 shadow-sm shadow-gray-400 hover:shadow-2xl">
            <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img className="w-[5rem] h-[5rem] object-cover object-top"
                            src="https://rukminim1.flixcart.com/image/612/612/kzfvzww0/gown/l/z/g/16-s-short-sleeve-stitched-gown-badami-ne-style-60-original-imagbg8m9dpz4wtw.jpeg?q=70" />
                        <div className="ml-5 space-y-2">
                            <p>Printed Crepe Stitched Anarkali Gown</p>
                            <p className="opacity-50 text-xs font-semibold">Size - M</p>
                            <p className="opacity-50 text-xs font-semibold">Color - Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹1200</p>
                </Grid>
                <Grid item xs={4}>
                    {orderStatus == false && <p>
                        <AdjustIcon sx={{ width: '15px', height: '15px' }} className="text-green-500 text-sm" />
                        <span>Expected Delivery On March 03
                        </span>
                    </p>}
                    {orderStatus == true &&
                        <div>
                            <p>
                                <AdjustIcon sx={{ width: '15px', height: '15px' }} className="text-green-500 text-sm" />
                                <span> Delivered On March 03
                                </span>
                            </p>
                            <p className="text-xs ml-5">your item has been delivered</p>
                        </div>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard
