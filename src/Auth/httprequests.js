import axios from "axios";
import {BASE_URL} from '../Constants/Constants.js';

const API = axios.create({baseURL: BASE_URL});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})


//login
export const signIn = (formData) => API.post('/login/', formData).then(res=>{
    return res;
});

//users
export const createUser = () => API.post("/user/create") // create new user
export const checkUserEmail = () => API.post("/user/email") // check is email allready use or not

export const userType = () => API.get("/users/:type") // get user by type client/psychologist
export const getUserById = () => API.get("/user/:id") // gett user by id 

export const updateUser = () => API.put("/user/update") //update user data
export const changeUserPassword = () => API.patch ("/user/changePassword") // chabge user password
export const addUserAccessToken = () => API.patch("/user/accessToken") // add user access token 

export const deleteUser = (_id) => API.delete("/user/delete/"+_id) // delete a auser

//organizations
export const addOrgs =(orgsData) => API.post("/org/create", orgsData).then(res=>{
    return res;
});
// export const orgs =() => API.post("/org/email") // check is email allready use or not

// export const orgs =() => API.get("/org/:regNo") // get Org by type reg no
export const getAllOrgs =() => API.get("/org/") // get all Org by 

// export const orgs =() => API.put("/org/update") //update Org data

export const deleteOrgs =(_id) => API.delete("/org/delete/"+_id).then((res)=>{
    return res
}) // delete a Org