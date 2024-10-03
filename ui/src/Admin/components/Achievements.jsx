import { Button, Card, CardContent, styled, Typography } from "@mui/material"
import trophy from '../../assets/images/Trophy.png'
const TriangleImage = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position: "absolute"
})


function Achievements() {
  return (
    <Card sx={{position:"relative", bgcolor:'#242B2E',color:"white", height:'15rem'}}>
        <CardContent>
            <Typography variant="h5" className="font-bold" sx={{letterSpacing:".25px"}}>Threadora Fashion</Typography>
            <Typography variant="body2" sx={{letterSpacing:".25px"}}>Congratulations 🥳</Typography>
            <Typography variant="h6" sx={{my:4}}>512.6k</Typography>
            <Button size="small" variant="contained">View Sales</Button>
            <TriangleImage src={trophy} alt="Background Triangle" />
        </CardContent>
    </Card>
  )
}

export default Achievements
