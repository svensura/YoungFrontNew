import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/api/auth/";
//const API_URL = "https://young.herokuapp.com/api/auth/";


class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          console.log('ACCESS_TOKEN: ',response.data.accessToken)
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }



  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
