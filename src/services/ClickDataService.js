import axios from 'axios';
import authHeader from './auth-header';
import httpErrorHandler from "../services/ErrorService";

//const API_URL = 'http://localhost:8080/api/test/';
const API_URL = "https://young.herokuapp.com/api/test/";



const getAllClicks = () => {
  return axios
  .get(API_URL + "moderator/allClicks", { headers: authHeader() })
  .catch(httpErrorHandler);
};

const increaseClicks = itemName => {
  console.log("INCREASE CLICKS OF: ", itemName)
  return axios
  .patch(API_URL + `user/increase/${itemName}`)
  .catch(httpErrorHandler);
};

const resetClicks = itemName => {
  console.log("RESET CLICKS OF: ", itemName)
  return axios
  .post(API_URL + `moderator/resetClicks/${itemName}`,"", { headers: authHeader() })
  .catch(httpErrorHandler);
};

const ClickDataService = {
  getAllClicks,
  increaseClicks,
  resetClicks
};


export default ClickDataService;
