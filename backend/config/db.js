const mongoose = require('mongoose');
const MONG_Uri = 'mongodb+srv://arslan_ehsan:ehsan123@cluster0.v1xue.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONG_Uri)

        console.log(`mongiDb Connexted ${conn.connection.host}`)
    } catch (error) {
        console.log('hi i am error', error)
    }
}


module.exports = connectDB;