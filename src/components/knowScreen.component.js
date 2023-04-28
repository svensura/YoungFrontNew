


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import KalifatText from '../media/text/KalifatText.js';
import SchariaText from '../media/text/SchariaText.js';
import VölkermordText from '../media/text/VölkermordText.js';
import TransfeindlichkeitText from '../media/text/TransfeindlichkeitText.js';
import AntizigianismusText from '../media/text/AntizigianismusText.js';
import VerschwörungsideologienText from '../media/text/VerschwörungsideologienText.js';
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
  ANTIZIGIANISMUS: 'ANTIZIGIANISMUS',
  VERSCHWÖRUNGSIDEOLOGIEN: 'VERSCHWÖRUNGSIDEOLOGIEN',
  ISLAMISMUS: 'ISLAMISMUS',
  ANTISEMITISMUS: 'ANTISEMITISMUS',
  HOLOCAUST: 'HOLOCAUST',
  REPARATIONEN: 'REPARATIONEN',
  HASSKRIMINALITÄT: 'HASSKRIMINALITÄT',
  ERINNERUNGSABWEHR: 'ERINNERUNGSABWEHR',
  HOLOCAUSTLEUGNUNG: 'HOLOCAUSTLEUGNUNG',
  ERINNERUNG: 'ERINNERUNG',
  HOLOCAUSTVERZERRUNG: 'HOLOCAUSTVERZERRUNG',
  EMPOWERMENT: 'EMPOWERMENT',
  ANTIFEMINISMUS: 'ANTIFEMINISMUS',
  RECHTELANDNAHME: 'RECHTELANDNAHME',
  NEUERECHTE: 'NEUERECHTE',
  IS: 'iS',
}


const Onscreen  = () => {


  const [onscreenStatus, setOnscreenStatus] = useState([OnscreenStatus.KNOWLEDGE])
 
  const navigate = useNavigate();

  
  // const AbleismusButton = () => {
  //   const onClick = () => {
  //     console.log('Button clicked!')
  //     setOnscreenStatus('ABLEISMUS')
  //   }
  //   return (
  //     <button  className="ableismusButton swing" onClick={onClick}>
  //     </button>
  //   );
  // };
  // const DemokratiefeindlichButton = () => {
  //   const onClick = () => {
  //     console.log('Button clicked!')
  //     setOnscreenStatus('DEMOKRATIEFEINDLICH')
  //   }
  //   return (
  //     <button  className="demokratiefeindlichButton swing" onClick={onClick}>
  //     </button>
  //   );
  // };

  // const DiskriminierungButton = () => {
  //   const onClick = () => {
  //     console.log('Button clicked!ss')
  //     setOnscreenStatus('DISKRIMINIERUNG')
  //   }
  //   return (
  //     <button  className="diskriminierungButton swing" onClick={onClick}>
  //     </button>
  //   );
  // };

  // const HassImNetzButton = () => {
  //   const onClick = () => {
  //     console.log('Button clicked!')
  //     setOnscreenStatus('HASSIMNETZ')
  //   }
  //   return (
  //     <button  className="hassImNetzButton swing" onClick={onClick}>
  //     </button>
  //   );
  // };

  // const QueerfeindlichButton = () => {
  //   const onClick = () => {
  //     console.log('Button clicked!')
  //     setOnscreenStatus('QUEERFEINDLICH')
  //   }
  //   return (
  //     <button  className="queerfeindlichButton swing" onClick={onClick}>
  //     </button>
  //   );
  // };

  // const RadikalisierungButton = () => {
  //   const onClick = () => {
  //     console.log('Button clicked!')
  //     setOnscreenStatus('RADIKALISIERUNG')
  //   }
  //   return (
  //     <button  className="radikalisierungButton swing" onClick={onClick}>
  //     </button>
  //   );
  // };
  // const RechteGewaltButton = () => {
  //   const onClick = () => {
  //     console.log('Button clicked!')
  //     setOnscreenStatus('RECHTEGEWALT')
  //   }
  //   return (
  //     <button type="button" className="rechteGewaltButton swing" onClick={onClick}>
  //     </button>
  //   );
  // };
  // const SexismusButton = () => {
  //   const onClick = () => {
  //     console.log('Button clicked!')
  //     setOnscreenStatus('SEXISMUS')
  //   }
  //   return (
  //     <button  className="sexismusButton swing" onClick={onClick}>
  //     </button>
  //   );
  // };
  // const SozialeAusgrenzungButton = () => {
  //   const onClick = () => {
  //     console.log('Button clicked!')
  //     setOnscreenStatus('SOZIALEAUSGRENZUNG')
  //   }
  //   return (
  //     <button  className="sozialeAusgrenzungButton swing" onClick={onClick}>
  //     </button>
  //   );
  // };

  const ButtonComponent = (props) => {
    const handleClick = () => {
      console.log('TEXT: ', props.text)
      setOnscreenStatus(props.text)
    }

    return (
      <p className={((props.index%2)==0)? "whiteItems" : "blackItems"} onClick={ handleClick }>{ props.text }</p>
    );
  };

 let onscreensStatusNames = Object.keys(OnscreenStatus);
 onscreensStatusNames.shift()

  console.log('NAMES:', onscreensStatusNames)

  const ItemList = onscreensStatusNames.map(function(name, index){
    return <li className="sub"> <ButtonComponent text={name} index={index}/></li>;
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
        text = KalifatText
          break
      case 'TRANSFEINDLICHKEIT':
        text = VölkermordText
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

  //   return (
  //     <div>
        
  //       {(() => {
  //     switch(onscreenStatus) {
  //     case 'BUBBLES':
  //       return (
  //         <div className="black">
  //           <div className="background"></div>
  //           <Bubbles/>
  //         </div>   
  //       )
  //     default:
  //       return null
  //     }
  //   })()}
  //   </div>
  // )


  return (
      <div className="black">
       <div className="backgroundKnowledge"></div>
       
      {(onscreenStatus == 'KNOWLEDGE') ? <Knowledge/> : <Explain/>}
      </div>   
  )

};



export default Onscreen;