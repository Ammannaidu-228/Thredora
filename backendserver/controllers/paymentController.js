const {createpaymentLink, updatePaymentInformation} = require('../utils/paymentUtil')

const generatePaymentLink = async(req,res)=>{

    try {
        const paymentLink = await createpaymentLink(req.params.id)
        return res.status(200).send({paymentLink, message:'Payment Link Generated Successfully!!!', status:true})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updataPaymentsInfoInDb = async(req,res)=>{


    try {
        await updatePaymentInformation(req.query)
        return res.status(200).send({message:"Payment Details Updated Successfully", status: true})
        
    } catch (error) {
        return res.status(500).send(error.message)

    }
}

module.exports = {
    generatePaymentLink,
    updataPaymentsInfoInDb
}