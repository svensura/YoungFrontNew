import axios from 'axios';
import authHeader from './auth-header';
import httpErrorHandler from "../services/ErrorService";

//const API_URL = 'http://localhost:8080/api/test/';
const API_URL = "https://young.herokuapp.com/api/test/";



const getAllCitations = () => {
  return axios
  .get(API_URL + "moderator/allCitations", { headers: authHeader() })
  .catch(httpErrorHandler);
};

const getCitation  = id => {
  return axios
  .get(API_URL + `moderator/citation/${id}`,{ headers: authHeader() })
  .catch(httpErrorHandler);
};

const createCitation = data => {
  return axios
  .post(API_URL + "user/addCitation", data, { headers: authHeader() })
  .catch(httpErrorHandler);
};

const updateCitation = (id, data) => {
  return axios
  .patch(API_URL + `moderator/updateCitation/${id}`, data, { headers: authHeader() })
  .catch(httpErrorHandler);
};

const removeCitation = id =>  {
  return axios
  .delete(API_URL + `moderator/deleteCitation/${id}`, { headers: authHeader() })
  .catch(httpErrorHandler);
};


const findByCreator = (data) => {
  return axios
  .get(API_URL + `moderator/findCitations`, data, { headers: authHeader() })
  .catch(httpErrorHandler);
};

const getRandomCitation  = id => {
  return axios.
  get(API_URL + `all/randomCitation`)
  .catch(httpErrorHandler);
};

const createAllCitation = data => {
  return axios
  .post(API_URL + "all/addCitation", data)
  .catch(httpErrorHandler);
};



const CitationDataService = {
  getAllCitations,
  getCitation,
  createCitation,
  updateCitation,
  removeCitation,
  findByCreator,
  getRandomCitation,
  createAllCitation
};

export default CitationDataService;
