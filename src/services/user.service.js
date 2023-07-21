import axios from 'axios';
import authHeader from './auth-header';
import httpErrorHandler from "../services/ErrorService";

//const API_URL = 'http://localhost:8080/api/test/';
const API_URL = "https://young.herokuapp.com/api/test/";

class UserService {
  getPublicContent() {
    return axios
    .get(API_URL + 'all')
    .catch(httpErrorHandler);
  }

  getUserBoard() {
    return axios
    .get(API_URL + 'user', { headers: authHeader() })
    .catch(httpErrorHandler);
  }

  getModeratorBoard() {
    return axios
    .get(API_URL + 'mod', { headers: authHeader() })
    .catch(httpErrorHandler);
  }

  getAdminBoard() {
    return axios
    .get(API_URL + 'admin', { headers: authHeader() })
    .catch(httpErrorHandler);
  }

  getCitationList() {
    return axios
    .get(API_URL + 'moderator/citations', { headers: authHeader() })
    .catch(httpErrorHandler);
  }




  
}

export default new UserService();
