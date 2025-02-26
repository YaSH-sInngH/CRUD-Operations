import User from '../schema/user-schema.js';

export const addUser = async (request, response) => {
    const user = request.body;
    
    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    }catch(error){
        response.status(409).json({message: error.message});
        
    }
}

export const getUser = async(request, response)=>{
    try{
        const users = await User.find({});
        response.status(200).json(users);
    }
    catch (error){
        response.status(404).json({message: error.message});
    }
}

export const loadUser = async(request, response)=>{
    try{
        const user = await User.find({userId: request.params.userId});
        response.status(200).json(user);
    }
    catch (error){
        response.status(404).json({message: error.message});
    }
}

export const editUser = async(request, response)=>{
    const user = request.body;
    const userId = request.params.userId;
    try{
        await User.updateOne({ userId: userId }, user);
        response.status(201).json(editUser);
    }catch(error){
        response.status(404).json({message: error.message});
    }
}

export const deleteUser = async(request, response)=>{
    try{
        await User.deleteOne({userId: request.params.userId});
        response.status(200).json({message: 'User deleted successfully'});
    }catch(error){
        response.status(404).json({message: error.message});
    }
}