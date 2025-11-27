const { generateTokenFromUserId } = require("../microutils/jwtToken");
const { createCart } = require("../utils/cartUtils");
const { createUser, findUserByEmail, getUserProfileByToken, getAllUsers } = require("../utils/userUtils");
const bcrypt = require('bcrypt');

async function userSignup(req,res) {
    
    try {
        let newUser = await createUser(req.body);
        const userToken = await generateTokenFromUserId(newUser._id);

        await createCart(newUser);
        return res.status(200).send({userToken, message:'User Created Successfully'});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}

async function userSignin(req,res){
    const {email, password} = req.body;

    try {
        const user = await findUserByEmail(email);
        if(!user){
            return res.status(404).send({message:'User not found!!! Please reigister first.'});
        }
        const verifyUser = await bcrypt.compare(password, user.password);
        if(!verifyUser){
           return res.status(400).send({message:'Invalid Password'})
        }
        const userToken = await generateTokenFromUserId(user._id)

        return res.status(200).send({userToken, message:'Login success!!!'})

        
    } catch (error) {
        res.status(500).send({message: error.message});

    }

}

async function getUserProfile(req,res) {

    try {

        const userToken = req.headers.authorization?.split(" ")[1];

        if(!userToken){
            return res.status(404).send({message:'UserToken not found'});
        }
        const user = await getUserProfileByToken(userToken)

        return res.status(200).send({user})

    } catch (error) {
        
        res.status(500).send({message: error.message});
    }
    
}

async function fetchAllUsers(req,res) {

    try {

        const allUsers = await getAllUsers();
        return res.status(200).send({allUsers ,message:'All users are fetched'})
        
    } catch (error) {
        res.status(500).send({message: error.message});

    }
    
}



module.exports = {
    userSignup,
    userSignin,
    getUserProfile,
    fetchAllUsers,
}