import axios from 'axios';
import authHeader from './auth-header';
import httpErrorHandler from "../services/ErrorService";

//const API_URL = 'http://localhost:8080/api/test/';
const API_URL = "https://young.herokuapp.com/api/test/";



const getAllTips = () => {
  return axios
  .get(API_URL + "moderator/allTips", { headers: authHeader() })
  .catch(httpErrorHandler);
};

const getCatTips = (category) => {
  return axios
  .get(API_URL + `all/approvedTips/${category}`)
  .catch(httpErrorHandler);
};

const getTip  = id => {
  return axios
  .get(API_URL + `moderator/tip/${id}`,{ headers: authHeader() })
  .catch(httpErrorHandler);
};

const createTip = data => {
  return axios
  .post(API_URL + "user/addTip", data, { headers: authHeader() })
  .catch(httpErrorHandler);
};

const updateTip = (id, data) => {
  return axios
  .patch(API_URL + `moderator/updateTip/${id}`, data, { headers: authHeader() })
  .catch(httpErrorHandler);
};

const removeTip = id =>  {
  return axios
  .delete(API_URL + `moderator/deleteTip/${id}`, { headers: authHeader() })
  .catch(httpErrorHandler);
};



const findTipsByCategory = (category) => {
  return axios
  .get(API_URL + `moderator/findTips/` + category, { headers: authHeader() })
  .catch(httpErrorHandler);
};

const createAllTip = data => {
  return axios
  .post(API_URL + "all/addTip", data)
  .catch(httpErrorHandler);
};



const TipDataService = {
  getAllTips,
  getCatTips,
  getTip,
  createTip,
  updateTip,
  removeTip,
  findTipsByCategory,
  createAllTip
};

export default TipDataService;
