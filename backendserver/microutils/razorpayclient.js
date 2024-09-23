const Razorpay = require('razorpay')

const secretId = 'rzp_test_KJg8EGvFUjpwyj' 

const secretKey = 'ZtzRC1uHaHgMhXiTTVkEKBHr'


const razorpay = new Razorpay({
    key_id: secretId,
    key_secret: secretKey
})

module.exports = {
    razorpay
}