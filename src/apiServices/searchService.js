import axios from 'axios';

export const search = async (id)=>{
    const res = await axios.get(`https://63a06a43e3113e5a5c3d00f1.mockapi.io/api/p1/users/`,{
        params: {
            id
        }
    })
    return res.data;      
}