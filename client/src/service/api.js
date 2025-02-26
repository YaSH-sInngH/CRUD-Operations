    import axios from 'axios';

    const URL = 'http://localhost:3000';

    export const addUser = async (data) => {
        try {
            return await axios.post(`${URL}/add`, data);
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    export const getUser = async ()=>{
        try{
            return await axios.get(`${URL}/list`);
        }
        catch(error){
            console.log("Error while calling Api :( ", error);
        }
    }

    export const loadUser = async(userId)=>{
        try{
            return await axios.get(`${URL}/${userId}`);
        }catch(error){
            console.log('Error while loading the user data :( ', error);
            
        }
    }

    export const editUser = async (user, userId)=>{
        try{
        return await axios.put(`${URL}/${userId}`, user);
        }catch(error){
            console.log('Error while editing the user detials :( ', error);
        }
    }

    export const deleteUser = async(userId)=>{
        try{
            return await axios.delete(`${URL}/${userId}`);
        }catch(error){
            console.log('Error while deleting user details.', error);
            
        }
    }