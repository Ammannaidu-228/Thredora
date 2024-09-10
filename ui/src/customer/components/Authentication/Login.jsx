/* eslint-disable react/no-unescaped-entities */
import { Button, Grid, TextField } from "@mui/material"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LOGIN } from "../../../state/Auth/Action";

function Login() {
    const dispatch = useDispatch()

    const handleFromSubMission = (event) => {

        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData = {
            email: data.get("email"),
            password: data.get("password")
        }

        //console.log("userData", userData)
        dispatch(LOGIN(userData))
        

    }
    return (
        <div>
            <form onSubmit={handleFromSubMission}>
                <Grid container spacing={3}>

                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
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
                            sx={{ padding: ".8rem 0", bgcolor: '#9155FD' }}
                            variant="contained">Login</Button>
                    </Grid>

                </Grid>
            </form>
            <Grid className="flex flex-wrap justify-between text-center py-3" item xs={2} sm={8}>
                <div className="text-sm mx-7 py-1">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                    </a>
                </div>
                <div className="text-sm py-1 text-center justify-center">
                    <p> Don't have an account? 
                        <Link to={'/user/signup'} href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Create One
                        </Link> </p>
                </div>
            </Grid>

        </div>
    )
}

export default Login



