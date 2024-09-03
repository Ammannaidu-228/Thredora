const { generateUserIdFromToken } = require("../microutils/jwtToken");
const { findUserById } = require("../utils/userUtils");


async function authenticate(req,res,next) {

    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token){
            res.status(400).send({message: 'Token Not Found'})
        }
        const userId = await generateUserIdFromToken(token);
        const user = await findUserById(userId)
        req.user = user;
    } catch (error) {
        res.status(500).send(error.message)
    }

    next();
    
}

module.exports = {
    authenticate
}