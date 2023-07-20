import axios from 'axios';
import authHeader from './auth-header';

//const API_URL = 'http://localhost:8080/api/test/';
const API_URL = "https://young.herokuapp.com/api/test/";



const getAllUsers = () => {
  return axios.get(API_URL + "admin/users", { headers: authHeader() });
};

const createUserAuth = data => {
  console.log('DATA: ',data)
  return axios.post(API_URL + "signupAuth", data, { headers: authHeader() });
};

const createUser = data => {
  console.log('DATA: ',data)
  return axios.post(API_URL + "user/signup", data);
};


const removeUser = id =>  {
  return axios.delete(API_URL + `admin/deleteUser/${id}`, { headers: authHeader() });
};


const UserDataService = {
  getAllUsers,
  createUser,
  createUserAuth,
  removeUser 
};

export default UserDataService;
