import mongoose from 'mongoose';

const mongo_URI = "mongodb+srv://shahvansh:shahvansh@cluster0.0smlwdn.mongodb.net/blogDB?retryWrites=true&w=majority";

const dbConnect = () => {
    mongoose.connect(mongo_URI).then(()=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log(err);
        console.log("Database not connected");
    })
}

export default dbConnect;