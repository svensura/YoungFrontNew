import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Onscreen from "./components/onscreen.component";
import SpeakScreen from "./components/speakScreen.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import AddUser from "./components/AddUser.component";
import AddCitation from "./components/AddCitation.component";
import CitationsList from "./components/CitationsList.component";
import UsersList from "./components/UsersList.component";

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showOnscreen: false,
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    console.log('MOUNTED!')
    const user = AuthService.getCurrentUser();

    

    if (user) {
      this.setState({
        currentUser: user,
        showOnscreen: user.roles.includes("ROLE_USER"),
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }


    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            CitModTool
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/onscreen"} className="nav-link">
                OnscreenCitations
              </Link>
            </li> 
            <li className="nav-item">
              <Link to={"/speakScreen"} className="nav-link">
                OnscreenBubbles
              </Link>
            </li>
            {/* {currentUser && ( 
            <li className="nav-item">
              <Link to={"/onscreen"} className="nav-link">
                Onscreen
              </Link>
            </li> 
            )} */}
              <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                AddCitation
              </Link>
            </li>



            {showModeratorBoard && (
              <li className="nav-item">
            <Link to={"/citationsList"} className="nav-link">
              ModeratorBoard
            </Link>
          </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/usersList"} className="nav-link">
                  AdminBoard
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  UserInfo
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  LogIn
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  SignUp
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/onscreen" element={<Onscreen />} />
            <Route path="/speakScreen" element={<SpeakScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/add" element={<AddCitation />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/citationsList" element={<CitationsList/>} />
            <Route path="/usersList" element={<UsersList/>} />
            <Route path="/addUser" element={<AddUser />} />
          </Routes>
        </div>

        {/* <AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;
