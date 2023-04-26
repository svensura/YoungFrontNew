import React, { useState } from "react";
import CitationDataService from "../services/CitationDataService";

const AddCitation = () => {
  
  const initialCitationState = {
    id: null,
    creator: "",
    content: "",
    checked: false
  };
  const [citation, setCitation] = useState(initialCitationState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCitation({ ...citation, [name]: value });
  };

  const saveCitation = () => {
    var data = {
      creator: JSON.parse(localStorage.getItem('user')).username,
      content: citation.content
    };

    CitationDataService.createCitation(data)
      .then(response => {
        setCitation({
          id: response.data._id,
          creator: response.data.creator,
          content: response.data.content,
          checked: response.data.checked
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newCitation = () => {
    setCitation(initialCitationState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newCitation}>
            Add another
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group contentbox">
            <label htmlFor="content">CITATION Content</label>
            <textarea className="form-control" id="content" name="content" rows="4" cols="50" onChange={handleInputChange} value={citation.content}/>
          </div>
          <button onClick={saveCitation} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCitation;
