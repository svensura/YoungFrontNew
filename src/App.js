import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import OnscreenY from "./components/onscreenYellow.component";
import OnscreenO from "./components/onscreenOrange.component";
import SpeakScreen from "./components/speakScreen.component";
import KnowScreen from "./components/knowScreen.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import AddUser from "./components/AddUser.component";
import UsersList from "./components/UsersList.component";
import AddCitation from "./components/AddCitation.component";
import CitationsList from "./components/CitationsList.component";
import AddTip from "./components/AddTip.component";
import TipsList from "./components/TipsList.component";

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
            TolScreens
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/onscreenY"} className="nav-link">
                OnscreenCitationsY
              </Link>
            </li> 
            <li className="nav-item">
              <Link to={"/onscreenO"} className="nav-link">
                OnscreenCitationsO
              </Link>
            </li> 
            <li className="nav-item">
              <Link to={"/speakScreen"} className="nav-link">
                OnscreenBubbles
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/knowScreen"} className="nav-link">
                OnscreenKnowledge
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
              <Link to={"/addCitation"} className="nav-link">
                AddCitation
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
            <Link to={"/citationsList"} className="nav-link">
              CitationMod
            </Link>
          </li>
            )}

            <li className="nav-item">
              <Link to={"/addTip"} className="nav-link">
                AddTip
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
            <Link to={"/tipsList"} className="nav-link">
              TipMod
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
            <Route path="/onscreenY" element={<OnscreenY />} />
            <Route path="/onscreenO" element={<OnscreenO />} />
            <Route path="/speakScreen" element={<SpeakScreen />} />
            <Route path="/knowScreen" element={<KnowScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/citationsList" element={<CitationsList/>} />
            <Route path="/addCitation" element={<AddCitation />} />
            <Route path="/usersList" element={<UsersList/>} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/tipsList" element={<TipsList/>} />
            <Route path="/addTip" element={<AddTip/>} />
          </Routes>
        </div>

        {/* <AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;
