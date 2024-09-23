import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  let step = querySearch.get("step");

  // Debugging: Check what the step value is
  console.log("Step from query:", step);

  // If step exists in query, parse it as an integer, otherwise use activeStep state
  step = step ? parseInt(step) : activeStep;

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="px-10 lg:px-20 py-5 mt-5">
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={step}>
              {steps.map((label) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                </Box>
                <div>
                  {step == 2 ? (
                    <div className="my-20">
                      <DeliveryAddress />
                    </div>
                  ) : (
                    <div className="my-20">
                      <OrderSummary />
                    </div>
                  )}
                </div>
              </React.Fragment>
            )}
          </Box>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
