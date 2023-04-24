import React, { useState, useEffect } from "react";
import UserDataService from "../services/UserDataService";
import { useNavigate } from 'react-router-dom' 


const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
 
  useEffect(() => {
    console.log('USE_EFFECT')
    retrieveUsers();
  }, []);


  const navigate = useNavigate()

  const deleteUser = () => {
    UserDataService.removeUser(currentUser._id)
      .then(response => {
        console.log(response.data);
        refreshList()
      })
      .catch(e => {
        console.log(e);
      });
  };


  const retrieveUsers = () => {
    UserDataService.getAllUsers()
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveUsers();
    setCurrentUser(null);
    setCurrentIndex(-1);
  };


  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };


  const setActiveUser = (user, index) => {
    setCurrentUser(user);
    setCurrentIndex(index);
  };



  return (
    <div className="list row">
      <div className="col-md-8">
       
      </div>
      <div className="col-md-6" >
      <h4 className="inlineBlock">Users</h4>
        <button
          className="badge badge-warning topMargin" style={{backgroundColor: 'lightblue', float: "right" }} onClick={() => navigate("/addUser")}>
            ADD
          </button>
          <div>
            <div className="scroll">
              {users &&
                users.map((user, index) => (
                  <div
                    className={
                      "citationlistitem" + (index === currentIndex ? " active" : "") 
                    }
                    onClick={() => setActiveUser(user, index)}
                    key={index}
                    style={{backgroundColor: 'lightblue', color: index === currentIndex ? 'white' : 'black'}}  
                  >
                    {user.username}
                  </div>
                ))}
            </div>
          </div>           
      </div>
      <div className="col-md-6">
        {currentUser ? (
          <div>
            <div>
              <label>
                <strong>Username:</strong>
              </label>{" "}
              {currentUser.username}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {currentUser.email}
            </div>
            <button className="badge badge-warning someMargin" style={{color: 'white', backgroundColor: 'Red'}} onClick={deleteUser}>
               DELETE 
            </button>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a User ...</p>
          </div>
        )}
      </div>
    </div>
  );
};



export default UsersList;
