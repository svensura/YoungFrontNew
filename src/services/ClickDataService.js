import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';
//const API_URL = "https://young.herokuapp.com/api/test/";



const getAllClicks = () => {
  return axios.get(API_URL + "moderator/allClicks", { headers: authHeader() });
};

const increaseClicks = itemName => {
  console.log("INCREASE CLICKS OF: ", itemName)
  return axios.patch(API_URL + `user/increase/${itemName}`);
};

const ClickDataService = {
  getAllClicks,
  increaseClicks
};


export default ClickDataService;
