import { Grid } from "@mui/material"
import OrderCard from "./OrderCard"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

function Order() {
    const orderStatus = [
        { lable: 'On The Way', value: 'on_the_way' },
        { lable: 'Delivered', value: 'Delivered' },
        { lable: 'Ordered', value: 'Ordered' },
        { lable: 'Returned', value: 'Returned' },

    ]
    return (
        <div className="mt-10 mx-2">
            <Navbar/>
            <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={2.5}>
                    <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
                        <h1 className="font-bold text-lg"> Filter</h1>
                        <div className="space-y-4 mt-10">
                            <h1 className="font-semibold">ORDER STATUS</h1>
                            {orderStatus.map((item, index) => <div key={index} className="flex items-center">
                                <input defaultValue={item.value} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 " type="checkbox" />
                                <label className="ml-3 text-sm text-gray-600" htmlFor={item.value}>
                                    {item.lable}
                                </label>
                            </div>)}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    {[1, 1, 1, 1].map((item, index) => <OrderCard key={index} />
                    )}
                </Grid>
            </Grid>
            <Footer/>
        </div>
    )
}

export default Order
