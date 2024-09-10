import { Box, Button, Grid, TextField } from "@mui/material"
import AddressCard from "../AddressCard/AddressCard"
import { useState } from "react"

const DeliveryAddress = () => {
    let[address, setAddress] = useState({})

    const handleFormSubMission = (e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            phone: data.get("phone"),
            zipCode: data.get("zipCode"),
            Address: data.get("Address"),
            city: data.get("city"),
            state: data.get("state"),
        }
        console.log("formdata", address)
        setAddress({
            firstName: "",
            lastName: "",
            phone: "",
            zipCode: "",
            Address: "",
            city: "",
            state: "",
        })
        data.set()
    }
  return (
    <div className="mb-10">
        <Grid container spacing={4}>
            <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
                <div className="p-5 py-7 border-b cursor-pointer">
                    <AddressCard/>
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
