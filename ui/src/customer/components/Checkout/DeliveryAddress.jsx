import { Box, Button, Grid, TextField } from "@mui/material"
import AddressCard from "../AddressCard/AddressCard"
import {  useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createOrder } from "../../../state/Order/Action"
// eslint-disable-next-line no-unused-vars
import { store } from "../../../state/store"

const DeliveryAddress = () => {
    let[address, setAddress] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {auth} = useSelector(store=> store) 
    console.log("In the Delivery ",auth.user);
    const handleFormSubMission = (e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            phone: data.get("phone"),
            zipCode: data.get("zipCode"),
            streetAddress: data.get("Address"),
            city: data.get("city"),
            state: data.get("state"),
        }
        console.log("formdata", address)
        const orderdata = {address, navigate}
        dispatch(createOrder(orderdata))
        setAddress({
            firstName: "",
            lastName: "",
            phone: "",
            zipCode: "",
            streetAddress: "",
            city: "",
            state: "",
        })
    }
  return (
    <div className="mb-10">
        <Grid container spacing={4}>
            <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
                <div className="p-5 py-7 border-b cursor-pointer">
                    <h2 className="font-bold">Saved Addresses:</h2>
                    {auth.user?.address?.map((item, index)=> <AddressCard shippingAddress={item} key={index}/>)}
                    <Button sx={{mt:'2' }} variant="contained" size="large">Continue</Button>
                </div>

            </Grid>
            <Grid item xs={12} lg={7}>
                <Box className="border rounded-s-md shadow-md p-5">
                    <form onSubmit={handleFormSubMission}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="firstName"
                                fullWidth
                                autoComplete="given-name"
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="lastName"
                                fullWidth
                                autoComplete="given-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                id="Address"
                                name="Address"
                                label="Address"
                                multiline
                                rows={4}
                                fullWidth
                                autoComplete="given-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="given-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="state"
                                name="state"
                                label="State/ Provision/ Region"
                                fullWidth
                                autoComplete="given-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="zipCode"
                                name="zipCode"
                                label="Zipcode/ Postal Code"
                                fullWidth
                                autoComplete="given-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                id="phone"
                                name="phone"
                                label="Phone Number"
                                fullWidth
                                autoComplete="given-name"
                                />
                            </Grid>
                            <Grid  item xs={12}>
                                <Button variant="contained" type="submit" size="large" className="w-full ">
                                    Deliver Here
                                </Button>

                            </Grid>
                        </Grid>
                    </form>

                </Box>
            </Grid>


        </Grid>
    </div>
  )
}

export default DeliveryAddress
