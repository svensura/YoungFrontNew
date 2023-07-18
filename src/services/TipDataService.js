import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';
//const API_URL = "https://young.herokuapp.com/api/test/";



const getAllTips = () => {
  return axios.get(API_URL + "moderator/allTips", { headers: authHeader() });
};

const getCatTips = (category) => {
  return axios.get(API_URL + `all/approvedTips/${category}`);
};

const getTip  = id => {
  return axios.get(API_URL + `moderator/tip/${id}`,{ headers: authHeader() });
};

const createTip = data => {
  return axios.post(API_URL + "user/addTip", data, { headers: authHeader() });
};

const updateTip = (id, data) => {
  return axios.patch(API_URL + `moderator/updateTip/${id}`, data, { headers: authHeader() });
};

const removeTip = id =>  {
  return axios.delete(API_URL + `moderator/deleteTip/${id}`, { headers: authHeader() });
};


const findTipsByCategory = (category) => {
  return axios.get(API_URL + `moderator/findTips/` + category, { headers: authHeader() });;
};

const createAllTip = data => {
  return axios.post(API_URL + "all/addTip", data);
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
