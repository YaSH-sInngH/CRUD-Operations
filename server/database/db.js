import mongoose from 'mongoose'

const Connection = async(db_url) => {

    try{
        await mongoose.connect(db_url,{ useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database Connected Successfully'); 
    }catch(error){
        console.log('Error while connecting with database', error.message);
    }
}

export default Connection;