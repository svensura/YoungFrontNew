import React, { useState, useEffect } from "react";
import ClickDataService from "../services/ClickDataService";
//import { useNavigate } from "react-router-dom";

//const categories = ["ABLEISMUS", "DEMOKRATIEFEINDLICH", "DISKRIMINIERUNG", "HASSIMNETZ", "QUEERFEINDLICH", "RADIKALISIERUNG", "RECHTEGEWALT", "SEXISMUS", "SOZIALEAUSGRENZUNG"];


const ClicksList = () => {
  const [clicks, setClicks] = useState([]);
  //const [currentTip, setCurrentTip] = useState(null);
  //const [currentIndex, setCurrentIndex] = useState(-1);
  //const [searchCreator, setSearchCreator] = useState("");
  //const [currentCategory, setCurrentCategory] = useState(categories[0]);
 
  useEffect(() => {
    console.log('USE_EFFECT')
    retrieveClicks();
  }, []);
  //const navigate = useNavigate();


  // const updateTip = () => {
  //   TipDataService.updateTip(currentTip._id, currentTip)
  //     .then(response => {
  //       console.log(response.data);
  //       refreshList()
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  // const deleteTip = () => {
  //   TipDataService.removeTip(currentTip._id)
  //     .then(response => {
  //       console.log(response.data);
  //       refreshList()
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };


  const retrieveClicks  = () => {
    ClickDataService.getAllClicks()
      .then(response => {
        setClicks(response.data);
        console.log('CLICKS: ',response.data);
        //refreshList()
      })
      .catch(e => {
        console.log(e);
      });
  };



  // const refreshList =  () => {
  //   retrieveTips(currentCategory);
  //   setCurrentTip(null);
  //   setCurrentIndex(-1);
  // };

  // const updateList = async (e) => {
  //   await setCurrentCategory(e.target.value)
  //   console.log("CATEGORY: ", e.target.value)
  //   retrieveTips(e.target.value)
  //   setCurrentTip(null);
  // }

  // const changeChecked = () => {
  //   const changedTip = {
  //       _id: currentTip._id,
  //       creator: currentTip.creator,
  //       category: currentTip.category,
  //       content: currentTip.content,
  //       checked: !currentTip.checked
  //   }
  //   setCurrentTip(changedTip);
  //   console.log('CHECKED? ', currentTip.checked)
  // }

  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   setCurrentTip({ ...currentTip, [name]: value });
  // };


  // const setActiveTip = (tip, index) => {
  //   setCurrentTip(tip);
  //   setCurrentIndex(index);
  // };

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
          <h4 className="inlineBlock">Amount of clicks on an specific item</h4>
          <table>
            <tr>
              <th>Item</th>
              <th>Clicks</th>
            </tr>
            
              {clicks.map((item, index) => (
                <tr key={index}>
                  <td>{item.itemName}</td>
                  <td>{item.clicks}</td>
                </tr>
              ))}
            
            </table>
        </div>
    </div>
  );
};



export default ClicksList;