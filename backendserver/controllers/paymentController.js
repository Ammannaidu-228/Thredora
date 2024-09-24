const {createpaymentLink, updatePaymentInformation} = require('../utils/paymentUtil')

const generatePaymentLink = async(req,res)=>{

    try {
        const paymentLink = await createpaymentLink(req.params.id)
        return res.status(200).send({paymentLink, message:'Payment Link Generated Successfully!!!', status:true})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updataPaymentsInfoInDb = async (req, res) => {
    console.log("In the Backend", req.query);  // Logs query parameters
    console.log("In the backend reqdata", req.params);  // Logs URL parameters

    // Extract necessary payment details from req.query
    const { 
        razorpay_payment_id, 
        razorpay_payment_link_id, 
        razorpay_payment_link_reference_id, 
        razorpay_payment_link_status, 
         
    } = req.query;

    // Construct the redirect URL with all parameters
    const redirectUrl = `http://localhost:5173/payments/${req.params.id}?` + new URLSearchParams({
        razorpay_payment_id,
        razorpay_payment_link_id,
        razorpay_payment_link_reference_id,
        razorpay_payment_link_status,
    }).toString();

    try {
        // Update payment information with the query parameters
        await updatePaymentInformation(req.query);
        
        // Redirect to the payment success page using the constructed URL
        return res.redirect(redirectUrl);
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


module.exports = {
    generatePaymentLink,
    updataPaymentsInfoInDb
}