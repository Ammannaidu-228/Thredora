import { Grid } from "@mui/material"
import Achievements from "./Achievements"
import MonthlyOverView from "./MonthlyOverView"

function Dashboard() {
  return (
    <div className="p-10 my-[3rem] bg-black h-full">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
            <Achievements/>
        </Grid>
        <Grid item xs={12} md={8}>
            <MonthlyOverView/>
        </Grid>

      </Grid>
    </div>
  )
}

export default Dashboard
