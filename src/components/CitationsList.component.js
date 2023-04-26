import React, { useState, useEffect } from "react";
import CitationDataService from "../services/CitationDataService";
import { useNavigate } from "react-router-dom";


const CitationsList = () => {
  const [citations, setCitations] = useState([]);
  const [currentCitation, setCurrentCitation] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchCreator, setSearchCreator] = useState("");
 
  useEffect(() => {
    console.log('USE_EFFECT')
    retrieveCitations();
  }, []);
  const navigate = useNavigate();


  const updateCitation = () => {
    CitationDataService.updateCitation(currentCitation._id, currentCitation)
      .then(response => {
        console.log(response.data);
        refreshList()
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteCitation = () => {
    CitationDataService.removeCitation(currentCitation._id)
      .then(response => {
        console.log(response.data);
        refreshList()
      })
      .catch(e => {
        console.log(e);
      });
  };

  const onChangeSearchCreator = e => {
    const searchCreator = e.target.value;
    setSearchCreator(searchCreator);
  };

  const retrieveCitations = () => {
    CitationDataService.getAllCitations()
      .then(response => {
        setCitations(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveCitations();
    setCurrentCitation(null);
    setCurrentIndex(-1);
  };


  const changeChecked = () => {
    const changedCitation = {
        _id: currentCitation._id,
        creator: currentCitation.creator,
        content: currentCitation.content,
        checked: !currentCitation.checked
    }
    setCurrentCitation(changedCitation);
    console.log('CHECKED? ', currentCitation.checked)
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentCitation({ ...currentCitation, [name]: value });
  };


  const setActiveCitation = (citation, index) => {
    setCurrentCitation(citation);
    setCurrentIndex(index);
  };

  const removeAllCitations = () => {
    CitationDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByCreator = () => {
    CitationDataService.findByCreator(searchCreator)
      .then(response => {
        setCitations(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
    <div className="list row">
      <div className="col-md-8">
       
      </div>
      <div className="col-md-6" >
        <h4 className="inlineBlock">Citations List</h4>
          <button className="badge badge-warning topMargin" style={{backgroundColor: 'White', float: "right" }} onClick={refreshList}>
               RELOAD 
          </button>
          <div>
            <div className="scroll">
              {citations &&
                citations.map((citation, index) => (
                  <div
                    className={
                      "citationlistitem" + (index === currentIndex ? " active" : "") 
                    }
                    onClick={() => setActiveCitation(citation, index)}
                    key={index}
                    style={{backgroundColor: citation.checked > 0 ? 'lightgreen' : '#faa0a0', color: index === currentIndex ? 'white' : 'black'}}
                    
                  >
                    {citation.content}
                  </div>
                ))}
            </div>
          </div>           
      </div>
      <div className="col-md-6">
        {currentCitation ? (
          <div>
            <div>
              <label>
                <strong>Creator:</strong>
              </label>{" "}
              {currentCitation.creator}
            </div>
            <div>
              <label>
                <strong>Content:</strong>
              </label>{" "}
              <div className="form-group contentbox">
                <textarea className="form-control" id="content" name="content" rows="4" cols="50" onChange={handleInputChange} value={currentCitation.content}>
                  
                </textarea>
              </div>
            </div>
            <div>
              <label>
                <strong>Will be on screen:</strong>
              </label>{" "}
              {currentCitation.checked ? "True" : "False"}
            </div>

            <button className="badge badge-warning someMargin" style={{color: 'white', backgroundColor: currentCitation.checked > 0 ? 'Red' : 'Green'}} onClick={() => changeChecked()}>
              {currentCitation.checked ? "IGNORE " : " ALLOW"}
            </button>
            <button className="badge badge-warning someMargin" onClick={updateCitation}>
              UPDATE
            </button>
            <button className="badge badge-warning someMargin" style={{color: 'white', backgroundColor: 'Red'}} onClick={deleteCitation}>
               DELETE 
            </button>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Citation to edit...</p>
          </div>
        )}
      </div>
    </div>
  );
};



export default CitationsList;
