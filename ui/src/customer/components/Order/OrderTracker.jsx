import { Step, StepLabel, Stepper } from "@mui/material"

function OrderTracker({activeStep}) {
    const steps = [
        "Placed",
        "Order Confirmed",
        "Shiped",
        "Out For Delivery",
        "Delivered"
    ]
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label,index)=> <Step key={index}><StepLabel sx={{color:"#9155FD", fontSize:"44px"}}>{label}</StepLabel></Step>)}
      </Stepper>
    </div>
  )
}

export default OrderTracker

