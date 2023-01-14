import { MongoClient } from 'mongodb';
import mongoose from "mongoose";

// export const client = new MongoClient(
//     "mongodb+srv://pabios:pass@cluster0.2x91skn.mongodb.net/?retryWrites=true&w=majority",
//     { useNewUrlParser: true }
// );

mongoose.set('strictQuery', true);

export const connectToMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/joker-login', { useNewUrlParser: true, useUnifiedTopology: true });

        // atlas
        // mongoose.connect("mongodb+srv://pabios:pass@cluster0.2x91skn.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('connection etablit ')
        return mongoose.connection;
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}


// const User = mongoose.model('User', userSchema);

// atlas
//   const User = client.model('User', userSchema);



