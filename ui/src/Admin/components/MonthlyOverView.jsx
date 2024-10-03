import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PaidIcon from '@mui/icons-material/Paid';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesData = [
    {
        title:"Sales",
        stats:"245k",
        color:"green",
        icon:<TrendingUpIcon sx={{fontSize:'1.75rem'}}/>
    },
    {
        title:"Customers",
        stats:"36.7k",
        color:"#8B78E6",
        icon:<PeopleOutlineIcon sx={{fontSize:'1.75rem'}}/>
    },
    {
        title:"Products",
        stats:"6.7k",
        color:"orange",
        icon:<TrendingUpIcon sx={{fontSize:'1.75rem'}}/>
    },
    {
        title:"Revenue",
        stats:"540.1k",
        color:"#E71C23",
        icon:<PaidIcon sx={{fontSize:'1.75rem'}}/>
    },
]

const renderStats = ()=>{
    return salesData.map((item,index)=>(
        <Grid key={index} item xs={12} sm={3}>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Avatar variant='rounded' sx={{
                    mr:3,
                    width:40,
                    height:40,
                    boxShadow:3,
                    color:'white',
                    backgroundColor:`${item.color}`
                }}>
                    {item.icon}
                </Avatar>
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>{item.stats}</Typography>
                    <Typography variant="body2" sx={{ letterSpacing: '.15px' }}>{item.title}</Typography>
                </Box>
            </Box>
        </Grid>
    ))
}

function MonthlyOverView() {
  return (
    <Card sx={{bgcolor:'#242B2E', color:'white', height:'15rem'}}>
        <CardHeader title='Monthly Overview'
        action={
            <IconButton size='small'>
                <MoreVertIcon sx={{color:'white'}}/>
            </IconButton>
        }
        subheader={
            <Typography variant='body2'>
                <Box component="span" sx={{fontWeight:600, mx:3}}>
                    Total 43.9% growth
                </Box>
                This Month
            </Typography>
        }
        titleTypographyProps={{
            sx:{
                mb:2.5,
                lineHeight:'2 rem',
                letterSpacing:'.15px !important'
            }
        }}/>
        <CardContent sx={{pt:theme=> `${theme.spacing(3)} !important`}}>
            <Grid container spacing={[5]}>
                {renderStats()}
            </Grid>

        </CardContent>
    </Card>
  )
}

export default MonthlyOverView
