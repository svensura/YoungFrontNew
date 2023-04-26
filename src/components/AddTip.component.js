import React, { useState } from "react";
import TipDataService from "../services/TipDataService";

const AddTip = () => {
  
  const initialTipState = {
    id: null,
    creator: "",
    categrory: "",
    content: "",
    checked: false
  };

  const categories = ["ABLEISMUS", "DEMOKRATIEFEINDLICH", "DISKRIMINIERUNG", "HASSIMNETZ", "QUEERFEINDLICH", "RADIKALISIERUNG", "RECHTEGEWALT", "SEXISMUS", "SOZIALEAUSGRENZUNG"];


  const [tip, setTip] = useState(initialTipState);
  const [submitted, setSubmitted] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTip({ ...tip, [name]: value });
  };

  const saveTip = () => {
    //if (tip.content.length() > 0) {
      var data = {
        creator: JSON.parse(localStorage.getItem('user')).username,
        category: currentCategory,
        content: tip.content
      };

      TipDataService.createTip(data)
        .then(response => {
          setTip({
            id: response.data._id,
            creator: response.data.creator,
            category: response.data.category,
            content: response.data.content,
            checked: response.data.checked
          });
          setSubmitted(true);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    //}
  };


  const newTip = () => {
    setTip(initialTipState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTip}>
            Add another
          </button>
        </div>
      ) : (
        <div>
          
          <div className="form-group contentbox">
            <label htmlFor="content">TIP Content for  </label>
            <select
            onChange={(e) => setCurrentCategory(e.target.value)}
            defaultValue={currentCategory}
          >
            {categories.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
            <textarea className="form-control" id="content" name="content" rows="4" cols="50" onChange={handleInputChange} value={tip.content}/>
          </div>
          <button onClick={saveTip} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTip;
