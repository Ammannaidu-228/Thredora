const { generateUserIdFromToken } = require("../microutils/jwtToken");
const User = require("../models/userModel");
const bcrypt = require('bcrypt');




const createUser = async (userData) => {
    try {

        let { firstName, lastName, email, password } = userData;

        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            throw new Error("User Already exists!!!, please login");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        password = hashedPassword;
        const user = await User.create({
            firstName,
            lastName,
            email,
            password
        });


        console.log('Created User:', user)
        return user;
    } catch (error) {
        throw new Error(error.message);

    }

}

const findUserById = async (userId) => {
    try {
        const user = await User.findById(userId)
        if (!user) {
            throw new Error("User not found. Please signUP first");
        }
        return user
    } catch (error) {
        throw new Error(error.message);

    }
}

const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User not found. Please signUP first");
        }
        return user
    } catch (error) {
        throw new Error(error.message);

    }
}

const getUserProfileByToken = async (token) => {
    try {
        const userId = await generateUserIdFromToken(token);
        const user = await findUserById(userId);
        if (!user) {
            throw new Error("User Not Found");

        }
        return user;
    } catch (error) {
        throw new Error(error.message);

    }
}

const getAllUsers = async () => {
    try {
        const users = User.find({});
        return users

    } catch (error) {
        throw new Error(error.message);

    }
}


module.exports = {
    createUser,
    findUserById,
    findUserByEmail,
    getUserProfileByToken,
    getAllUsers,
}