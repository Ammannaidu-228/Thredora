import { Box, Grid } from "@mui/material"
import AddressCard from "../AddressCard/AddressCard"
import OrderTracker from "./OrderTracker"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from "@mui/material/colors";
function OrderDetails() {
    return (
        <div className="px-5 lg:px-20">
            <div>
                <h1 className="font-bold text-xl py-5">Delivery Address</h1>
                <AddressCard />
            </div>
            <div className="py-20">
                <OrderTracker activeStep={3} />
            </div>
            {[1,1,1,1].map((item, index)=>             <Grid key={index} className="space-x-5 py-1" container>
                <Grid item container className="shadow-xl rounded-md p-5 border" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Grid item xs={6}>
                        <div className="flex items-center space-x-2">
                            <img className="w-[7rem] h-[7rem] object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/kzfvzww0/gown/l/z/g/16-s-short-sleeve-stitched-gown-badami-ne-style-60-original-imagbg8m9dpz4wtw.jpeg?q=70" />
                            <div className="space-y-1 ml-5">
                                <p className="font-semibold">Printed Crepe Stitched Anarkali Gown</p>
                                <p className="space-x-5 opacity-80"><span>Size-M</span>
                                    <span > Color-Black</span></p>
                                <p className="opacity-80">Seller: Raymond Styles</p>
                                <p>₹1500</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <Box sx={{ color: deepPurple[500] }}>
                            <StarBorderIcon className="px-1" />
                            <span className="text-sm">Rate & Review Product</span>

                        </Box>
                    </Grid>

                </Grid>
            </Grid>)}
        </div>
    )
}

export default OrderDetails
