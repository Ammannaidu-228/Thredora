const jwt = require('jsonwebtoken')

const secret = "asjkdhfh76475r3647868&^&**T^%VGVHgvjhv"

const generateTokenFromUserId = async(userId)=>{
    const token = jwt.sign({userId}, secret, {expiresIn: "24h"});
    return token
}

const generateUserIdFromToken = async(token)=>{
    const user = jwt.verify(token, secret)
    return user.userId;
}

module.exports = {
    generateTokenFromUserId,
    generateUserIdFromToken,
}