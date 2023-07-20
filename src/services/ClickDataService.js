import axios from 'axios';
import authHeader from './auth-header';

//const API_URL = 'http://localhost:8080/api/test/';
const API_URL = "https://young.herokuapp.com/api/test/";



const getAllClicks = () => {
  return axios.get(API_URL + "moderator/allClicks", { headers: authHeader() });
};

const increaseClicks = itemName => {
  console.log("INCREASE CLICKS OF: ", itemName)
  return axios.patch(API_URL + `user/increase/${itemName}`);
};

const resetClicks = itemName => {
  console.log("RESET CLICKS OF: ", itemName)
  return axios.post(API_URL + `moderator/resetClicks/${itemName}`,"", { headers: authHeader() });
};

const ClickDataService = {
  getAllClicks,
  increaseClicks,
  resetClicks
};


export default ClickDataService;
