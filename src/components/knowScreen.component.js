


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClickDataService from "../services/ClickDataService";

import KalifatText from '../media/text/KalifatText.js';
import SchariaText from '../media/text/SchariaText.js';
import VölkermordText from '../media/text/VölkermordText.js';
import TransfeindlichkeitText from '../media/text/TransfeindlichkeitText.js';
import AntizigianismusText from '../media/text/AntizigianismusText.js';
import VerschwörungsideologienText from '../media/text/VerschwoerungsideologienText.js';
import IslamismusText from '../media/text/IslamismusText.js';
import AntisemitismusText from '../media/text/AntisemitismusText.js';
import HolocaustText from '../media/text/HolocaustText.js';
import ReparationenText from '../media/text/ReparationenText.js';
import HasskriminalitätText from '../media/text/HasskriminalitätText.js';
import ErinnerungsabwehrText from '../media/text/ErinnerungsabwehrText.js';
import HolocaustLeugnungText from '../media/text/HolocaustLeugnungText.js';
import ErinnerungText from '../media/text/ErinnerungText.js';
import HolocaustverzerrungText from '../media/text/HolocaustverzerrungText.js';
import EmpowermentText from '../media/text/EmpowermentText.js';
import AntifeminismusText from '../media/text/AntifeminismusText.js';
import RechteLandnahmeText from '../media/text/RechteLandnahmeText.js';
import NeueRechteText from '../media/text/NeueRechteText.js';
import ISText from '../media/text/ISText.js';

//import TipDataService from "../services/TipDataService";


const OnscreenStatus = {
  KNOWLEDGE: 'KNOWLEDGE',
  KALIFAT: 'KALIFAT',
  SCHARIA: 'SCHARIA',
  VÖLKERMORD: 'VÖLKERMORD',
  TRANSFEINDLICHKEIT: 'TRANSFEINDLICHKEIT',
  HOLOCAUST: 'HOLOCAUST',
  VERSCHWÖRUNGSIDEOLOGIEN: 'VERSCHWÖRUNGSIDEOLOGIEN',
  ISLAMISMUS: 'ISLAMISMUS',
  ANTISEMITISMUS: 'ANTISEMITISMUS',
  ANTIZIGIANISMUS: 'ANTIZIGIANISMUS',
  ERINNERUNG: 'ERINNERUNG',
  REPARATIONEN: 'REPARATIONEN',
  HASSKRIMINALITÄT: 'HASSKRIMINALITÄT',
  ERINNERUNGSABWEHR: 'ERINNERUNGSABWEHR',
  IS: 'iS',
  HOLOCAUSTLEUGNUNG: 'HOLOCAUSTLEUGNUNG',
  EMPOWERMENT: 'EMPOWERMENT',
  ANTIFEMINISMUS: 'ANTIFEMINISMUS',
  RECHTELANDNAHME: 'RECHTELANDNAHME',
  NEUERECHTE: 'NEUERECHTE',
  HOLOCAUSTVERZERRUNG: 'HOLOCAUSTVERZERRUNG',
}


const Onscreen  = () => {


  const [onscreenStatus, setOnscreenStatus] = useState([OnscreenStatus.KNOWLEDGE])
 
  const navigate = useNavigate();

  


  const ButtonComponent = (props) => {
    const handleClick = () => {
      console.log('TEXT: ', props.text)
      setOnscreenStatus(props.text)
    }

    return (
      <p className={((props.index%2)==0)? "whiteItems" : "blackItems"} onClick={ handleClick }>{ props.text }</p>
    );
  };

 let onscreenStatusNames = Object.keys(OnscreenStatus);
 onscreenStatusNames.shift()

  console.log('NAMES:', onscreenStatusNames)

  const ItemList = onscreenStatusNames.map(function(name, index){
    return <li className="sub"> <div className={"line" + index}><ButtonComponent text={name} index={index}/></div></li>;
  })
 


  const Knowledge = () => {

    return (
      <div>
        <div className="knowledgeDisplay">
          <ul className="items" >

            {ItemList}
          </ul>
        </div>
      </div>
    )

  }



  const Explain  = () => {


    let timeout = 60000 // general screensaver-time 
    let explainTimeout 

    let text = ""

    switch(onscreenStatus) {
      case 'KALIFAT':
        text = KalifatText
        break
      case 'SCHARIA':
        text = SchariaText
        break
      case 'VÖLKERMORD':
        text = VölkermordText
          break
      case 'TRANSFEINDLICHKEIT':
        text = TransfeindlichkeitText
          break
      case 'ANTIZIGIANISMUS':
        text = AntizigianismusText
        break
      case 'VERSCHWÖRUNGSIDEOLOGIEN':
        text = VerschwörungsideologienText
        break
      case 'ISLAMISMUS':
        text = IslamismusText
        break
      case 'ANTISEMITISMUS':
        text = AntisemitismusText
          break
      case 'HOLOCAUST':
        text = HolocaustText
          break
      case 'REPARATIONEN':
        text = ReparationenText
          break
      case 'HASSKRIMINALITÄT':
        text = HasskriminalitätText
          break
      case 'ERINNERUNGSABWEHR':
        text = ErinnerungsabwehrText
        break
      case 'HOLOCAUSTLEUGNUNG':
        text = HolocaustLeugnungText
        break
      case 'ERINNERUNG':
        text = ErinnerungText
        break
      case 'HOLOCAUSTVERZERRUNG':
        text = HolocaustverzerrungText
        break
      case 'EMPOWERMENT':
        text = EmpowermentText
        break
      case 'ANTIFEMINISMUS':
        text = AntifeminismusText
        break
      case 'RECHTELANDNAHME':
        text = RechteLandnahmeText
        break
      case 'NEUERECHTE':
        text = NeueRechteText
        break
      case 'IS':
        text = ISText
        break                               
      default:
        text = "No text"
    }

    console.log ('TEXT: ', text)
    ClickDataService.increaseClicks("WasIst" + onscreenStatus)

    const restartTimeout = () => {
      clearTimeout(explainTimeout);
      explainTimeout = setTimeout(function() {
        //if (onscreenStatus == 'EXPLAIN'){
          console.log('TIMEOUT')
          setOnscreenStatus('KNOWLEDGE')
        //}
      }, timeout);
    }

    useEffect(() => {
      clearTimeout(explainTimeout)
      restartTimeout()
    }, [restartTimeout, explainTimeout]);

    console.log('STATUS: ' + onscreenStatus);

    
    

    const CloseButtonComponent = (props) => {
      const handleClick = () => {
        console.log(props.text);
        clearTimeout(explainTimeout);
        setOnscreenStatus('KNOWLEDGE')
      };

      return (
        <button type="button" className="closeButton" onClick={ handleClick }>{ props.text }</button>
      );
    };

    

    return (
      <div>

      
        <div className={'explanationKnowledgeDisplay '}>
          <CloseButtonComponent/>
             <p className="knowledgeHeadline">{onscreenStatus}</p>
            <div className="explanationKnowledge">
              
              {text}
            </div>
        </div>

      </div>
    )

  }

  




  useEffect(() => {
      
    const handleKeyDown = (event) => {
      if (event.ctrlKey && (event.key === "C" || event.key === "c")) {
        event.preventDefault();
        navigate(-1)
      }
     }
  
    window.addEventListener("keydown", handleKeyDown);


    return () =>  {
      window.removeEventListener("keydown", handleKeyDown);
    } 
  }, [navigate]);




  return (
      <div className="black">
       <div className="backgroundKnowledge"></div>
       
      {(onscreenStatus == 'KNOWLEDGE') ? <Knowledge/> : <Explain/>}
      </div>   
  )

};



export default Onscreen;