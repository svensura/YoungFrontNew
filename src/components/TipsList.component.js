import React, { useState, useEffect } from "react";
import TipDataService from "../services/TipDataService";
import { useNavigate } from "react-router-dom";

const categories = ["ABLEISMUS", "DEMOKRATIEFEINDLICH", "DISKRIMINIERUNG", "HASSIMNETZ", "QUEERFEINDLICH", "RADIKALISIERUNG", "RECHTEGEWALT", "SEXISMUS", "SOZIALEAUSGRENZUNG"];


const TipsList = () => {
  const [tips, setTips] = useState([]);
  const [currentTip, setCurrentTip] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchCreator, setSearchCreator] = useState("");
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
 
  useEffect(() => {
    console.log('USE_EFFECT')
    retrieveTips(currentCategory);
  }, []);
  const navigate = useNavigate();


  const updateTip = () => {
    TipDataService.updateTip(currentTip._id, currentTip)
      .then(response => {
        console.log(response.data);
        refreshList()
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTip = () => {
    TipDataService.removeTip(currentTip._id)
      .then(response => {
        console.log(response.data);
        refreshList()
      })
      .catch(e => {
        console.log(e);
      });
  };


  const retrieveTips  = (category) => {
    TipDataService.findTipsByCategory(category)
    //TipDataService.getAllTips()
      .then(response => {
        setTips(response.data);
        console.log('TIPS: ',response.data, ' CATEGORY:', category);
        //refreshList()
      })
      .catch(e => {
        console.log(e);
      });
  };



  const refreshList =  () => {
    retrieveTips(currentCategory);
    setCurrentTip(null);
    setCurrentIndex(-1);
  };

  const updateList = async (e) => {
    await setCurrentCategory(e.target.value)
    console.log("CATEGORY: ", e.target.value)
    retrieveTips(e.target.value)
    setCurrentTip(null);
  }

  const changeChecked = () => {
    const changedTip = {
        _id: currentTip._id,
        creator: currentTip.creator,
        category: currentTip.category,
        content: currentTip.content,
        checked: !currentTip.checked
    }
    setCurrentTip(changedTip);
    console.log('CHECKED? ', currentTip.checked)
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTip({ ...currentTip, [name]: value });
  };


  const setActiveTip = (tip, index) => {
    setCurrentTip(tip);
    setCurrentIndex(index);
  };

  // const removeAllCitations = () => {
  //   TipDataService.removeAll()
  //     .then(response => {
  //       console.log(response.data);
  //       refreshList();
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };


  return (
    <div className="list row">
      <div className="col-md-8">
       
      </div>
      <div className="col-md-6" >
        <h4 className="inlineBlock">Tips List for {currentCategory}</h4>
        
          <button className="badge badge-warning topMargin" style={{backgroundColor: 'White', float: "right" }} onClick={refreshList}>
               BACK / RELOAD 
          </button>
          
          <div>
            
            <div className="scroll">
              {tips &&
                tips.map((tip, index) => (
                  <div
                    className={
                      "citationlistitem" + (index === currentIndex ? " active" : "") 
                    }
                    onClick={() => setActiveTip(tip, index)}
                    key={index}
                    style={{backgroundColor: tip.checked > 0 ? 'lightgreen' : '#faa0a0', color: index === currentIndex ? 'white' : 'black'}}
                    
                  >
                    {tip.content}
                  </div>
                ))}
                <p>Please click on a Tip to edit...</p>
            </div>
          </div>           
      </div>
      <div className="col-md-6">
        {currentTip ? (
          <div>
            <div>
              <label>
                <strong>Creator:</strong>
              </label>{" "}
              {currentTip.creator}
            </div>
            <div>
              <label>
                <strong>Content:</strong>
              </label>{" "}
              <div className="form-group contentbox">
                <textarea className="form-control" id="content" name="content" rows="4" cols="50" onChange={handleInputChange} value={currentTip.content}>
                  
                </textarea>
              </div>
            </div>
            <div>
              <label>
                <strong>Will be on screen:</strong>
              </label>{" "}
              {currentTip.checked ? "True" : "False"}
            </div>

            <button className="badge badge-warning someMargin" style={{color: 'white', backgroundColor: currentTip.checked > 0 ? 'Red' : 'Green'}} onClick={() => changeChecked()}>
              {currentTip.checked ? "IGNORE " : " ALLOW"}
            </button>
            <button className="badge badge-warning someMargin" onClick={updateTip}>
              UPDATE
            </button>
            <button className="badge badge-warning someMargin" style={{color: 'white', backgroundColor: 'Red'}} onClick={deleteTip}>
               DELETE 
            </button>
          </div>
        ) : (
          <div>
            <p>Please choose category...</p>
            <select
            onChange={(e) => updateList(e)}
            defaultValue={currentCategory}
          >
            {categories.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};



export default TipsList;
