import mongoose from 'mongoose';

// initialize a connect variable
let connected = false

const connectDB = async() => {
    mongoose.set('strictQuery', true);

    // if the database is already connected, do not connect again
    if (connected) {
        console.log('MongoDB is already connected')
        return;
    }

    // connect to mongodb
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
    }
};

export default connectDB;