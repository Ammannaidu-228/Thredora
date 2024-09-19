import { Button, Grid, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";
import { getUser, register } from "../../../state/Auth/Action";
import { useEffect } from "react";


function Registration() {
    const dispatch = useDispatch();
    const userToken = localStorage.getItem("userToken")
    const {auth} = useSelector(store=> store)


    useEffect(()=>{
        if(userToken){
            dispatch(getUser(userToken))
        }
    },[userToken, auth.userToken])





    const handleFromSubMission = async (event)=>{
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        }

        console.log("userData", userData);
        dispatch(register(userData))
        await redirect('/user/login')

    }
    return (
        <div>
            <form onSubmit={handleFromSubMission}>
                <Grid container spacing={3}>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign Up
                        </h2>
                    </div>
                    <Grid item xs={3} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={3} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            autoComplete="password"
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Button
                         className="bg-[#9155FD] w-full"
                         type="submit"
                         size="large"
                         sx={{padding:".8rem 0", bgcolor:'#9155FD'}}
                         variant="contained">Register</Button>
                    </Grid>

                </Grid>
            </form>
            <div className="text-sm py-1">
                    <p>Already have an account? 
                        <Link to={'/user/login'} href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Login
                        </Link> </p>
                </div>

        </div>
    )
}

export default Registration
