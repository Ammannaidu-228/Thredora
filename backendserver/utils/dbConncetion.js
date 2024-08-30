const mongoose = require('mongoose')

async function dbConnection(url) {
    try {
       await mongoose.connect(url)
                .then(()=>console.log("Db connection success!!!"))
                .catch((err)=> console.log(err))
        
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message)
    }
}



module.exports = {
    dbConnection
}