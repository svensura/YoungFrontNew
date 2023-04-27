


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AbleismusText from '../media/text/AbleismusText';
import DemokratiefeindlichText from '../media/text/DemokratiefeindlichText.js';
import DiskriminierungText from '../media/text/DiskriminierungText.js';
import HassImNetzText from '../media/text/HassImNetzText.js';
import QueerfeindlichText from '../media/text/QueerfeindlichText.js';
import RechteGewaltText from '../media/text/RechteGewaltText.js';
import RadikalisierungText from '../media/text/RadikalisierungText.js';
import SexismusText from '../media/text/SexismusText.js';
import SozialeAusgrenzungText from '../media/text/SozialeAusgrenzungText.js';
import TipDataService from "../services/TipDataService";


const OnscreenStatus = {
  BUBBLES: 'BUBBLES',
  ABLEISMUS: 'ABLEISMUS',
  DEMOKRATIEFEINDLICH: 'DEMOKRATIEFEINDLICH',
  DISKRIMINIERUNG: 'DISKRIMINIERUNG',
  HASSIMNETZ: 'HASSIMNETZ',
  QUEERFEINDLICH: 'QUEERFEINDLICH',
  RADIKALISIERUNG: 'RADIKALISIERUNG',
  RECHTEGEWALT: 'RECHTEGEWALT',
  SEXISMUS: 'SEXISMUS',
  SOZIALEAUSGRENZUNG: 'SOZIALEAUSGRENZUNG'
}

const KeyboardStatus = {
  LOWER: 'LOWER',
  UPPER: 'UPPER'
}

const TypewriterStatus = {
  ON: 'ON',
  OFF: 'OFF'
}


const Onscreen  = () => {


  const [onscreenStatus, setOnscreenStatus] = useState([OnscreenStatus.BUBBLES])
  const [typewriterStatus, setTypewriterStatus] = useState([TypewriterStatus.OFF])
  const navigate = useNavigate();

  
  const AbleismusButton = () => {
    const onClick = () => {
      console.log('Button clicked!')
      setOnscreenStatus('ABLEISMUS')
    }
    return (
      <button  className="ableismusButton swing" onClick={onClick}>
      </button>
    );
  };
  const DemokratiefeindlichButton = () => {
    const onClick = () => {
      console.log('Button clicked!')
      setOnscreenStatus('DEMOKRATIEFEINDLICH')
    }
    return (
      <button  className="demokratiefeindlichButton swing" onClick={onClick}>
      </button>
    );
  };

  const DiskriminierungButton = () => {
    const onClick = () => {
      console.log('Button clicked!ss')
      setOnscreenStatus('DISKRIMINIERUNG')
    }
    return (
      <button  className="diskriminierungButton swing" onClick={onClick}>
      </button>
    );
  };

  const HassImNetzButton = () => {
    const onClick = () => {
      console.log('Button clicked!')
      setOnscreenStatus('HASSIMNETZ')
    }
    return (
      <button  className="hassImNetzButton swing" onClick={onClick}>
      </button>
    );
  };

  const QueerfeindlichButton = () => {
    const onClick = () => {
      console.log('Button clicked!')
      setOnscreenStatus('QUEERFEINDLICH')
    }
    return (
      <button  className="queerfeindlichButton swing" onClick={onClick}>
      </button>
    );
  };

  const RadikalisierungButton = () => {
    const onClick = () => {
      console.log('Button clicked!')
      setOnscreenStatus('RADIKALISIERUNG')
    }
    return (
      <button  className="radikalisierungButton swing" onClick={onClick}>
      </button>
    );
  };
  const RechteGewaltButton = () => {
    const onClick = () => {
      console.log('Button clicked!')
      setOnscreenStatus('RECHTEGEWALT')
    }
    return (
      <button type="button" className="rechteGewaltButton swing" onClick={onClick}>
      </button>
    );
  };
  const SexismusButton = () => {
    const onClick = () => {
      console.log('Button clicked!')
      setOnscreenStatus('SEXISMUS')
    }
    return (
      <button  className="sexismusButton swing" onClick={onClick}>
      </button>
    );
  };
  const SozialeAusgrenzungButton = () => {
    const onClick = () => {
      console.log('Button clicked!')
      setOnscreenStatus('SOZIALEAUSGRENZUNG')
    }
    return (
      <button  className="sozialeAusgrenzungButton swing" onClick={onClick}>
      </button>
    );
  };

  const saveAllTip = (tip) => {
    var data = {
      creator: "test",
      category: onscreenStatus,
      content: tip
    };
    console.log('DATA to SAVE. ',data);
    TipDataService.createAllTip(data)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  const Bubbles  = () => {


    //const [citation, setCitation] = useState("")
   
    // const getCitation  = () => {
    //   CitationDataService.getRandomCitation()
    //   .then(response => {
    //     console.log(response.data)
    //     setCitation(response.data[0].content)
    //   })
    //   .catch(e => {
    //     //console.log(e);
    //   })
    // }

    // useEffect(() => {
      
    // getCitation()

    //   const id = setInterval(() => {
    //     getCitation()
    //   }, 10000)
    //   return () =>  {
    //     clearInterval(id); 
    //   } 
    // }, []);

    

    return (
     <div>
        <div className="bubblesDisplay"></div>
        <AbleismusButton/>
        <DemokratiefeindlichButton/>
        <DiskriminierungButton/>
        <HassImNetzButton/>
        <QueerfeindlichButton/>
        <RadikalisierungButton/>
        <RechteGewaltButton/>
        <SexismusButton/>
        <SozialeAusgrenzungButton/>
      </div>
      
    )


  }



  const Explain  = () => {

    const [tip, setTip] = useState("")

    let timeout = 60000 // general screensaver-time 
    let explainTimeout 

    const restartTimeout = () => {
      clearTimeout(explainTimeout);
      explainTimeout = setTimeout(function() {
        //if (onscreenStatus == 'EXPLAIN'){
          console.log('TIMEOUT')
          setOnscreenStatus('BUBBLES')
        //}
      }, timeout);
    }

    useEffect(() => {
      clearTimeout(explainTimeout)
      restartTimeout()
    }, [restartTimeout, explainTimeout]);

    console.log('STATUS: ' + onscreenStatus);

    const getTip  = () => {
      TipDataService.getCatTips(onscreenStatus)
      .then(response => {
        console.log("CONTENT: ",response.data[0].content)
        setTip(response.data[0].content)
      })
      .catch(e => {
        //console.log(e);#
        return "No Content"
      })
    }

    useEffect(() => {
      
    getTip()

    }, []);

    

    const CloseButtonComponent = (props) => {
      const handleClick = () => {
        console.log(props.text);
        clearTimeout(explainTimeout);
        setOnscreenStatus('BUBBLES')
      };

      return (
        <button type="button" className="closeButton" onClick={ handleClick }>{ props.text }</button>
      );
    };

    const PrintButtonComponent = (props) => {
      const handleClick = () => {
        clearTimeout(explainTimeout);
        console.log('PRINTOUT: ' + onscreenStatus);
      };

      return (
        <button type="button" className="printButton" onClick={ handleClick }>{ props.text }</button>
      );
    };

    const TipButtonComponent = (props) => {
      const handleClick = () => {
        console.log(props.text);
        clearTimeout(explainTimeout);
        setTypewriterStatus('ON')
      };

      return (
        <button type="button" className="tipButton" onClick={ handleClick }>{ props.text }</button>
      );
    };


    return (
      <div>

      
      <div className={'explanationDisplay ' + (onscreenStatus)}>
        <img className="tag" src={require('../media/images/' + onscreenStatus + 'Tag.png' )} alt="horse" width="500" height="178" />
        <CloseButtonComponent/>
          <div className="explanation">
            {tip}
          </div>
      </div>
      <PrintButtonComponent/>
      <TipButtonComponent/>
      </div>
    )

  }

  let inputChars = []

  const Typewriter  = () => {

    const [inputText, setInputText] = useState("")
    const [keyboardStatus, setKeyboardStatus] = useState([KeyboardStatus.UPPER])
    let timeout = 30000 // general screensaver-time 
    let typewriterTimeout 
    

    const restartTimeout = () => {
      clearTimeout(typewriterTimeout);
      typewriterTimeout = setTimeout(function() {
        console.log('TIMEOUT')
        setOnscreenStatus('BUBBLES')
      }, timeout);
    }

    useEffect(() => {
      clearTimeout(typewriterTimeout)
      restartTimeout()
    }, [restartTimeout, typewriterTimeout]);

    const TextAreaComponent = (props) => {

    
      return (
        <textarea className="inputTextBubbles" value={ props.text } onChange={()=>{}}/>
      );
    };

    const CloseButtonComponent = (props) => {
      const handleClick = () => {
        console.log(props.text);
        clearTimeout(typewriterTimeout)
        setOnscreenStatus('BUBBLES')
        setTypewriterStatus('OFF')
      };

      return (
        <button type="button" className="closeButtonGrey" onClick={ handleClick }>{ props.text }</button>
      );
    };

    const ButtonComponent = (props) => {
      const handleClick = () => {
        console.log(props.text);

        if (inputChars.length < 342){
          inputChars.push(props.text)
          setInputText(inputChars.join(''))
          if (keyboardStatus == 'UPPER') setKeyboardStatus('LOWER')
          clearTimeout(typewriterTimeout)
        }
      };
    
      return (
        <button className="keysBubbles" onClick={ handleClick }>{ props.text }</button>
      );
    };

    const DeleteButtonComponent = (props) => {
      const handleClick = () => {
        console.log(props.text);
        inputChars.pop()
        setInputText(inputChars.join(''))
        if (keyboardStatus == 'LOWER' && inputChars.length == 0) setKeyboardStatus('UPPER')
        clearTimeout(typewriterTimeout)
      };
    
      return (
        <button className="deleteBubbles" onClick={ handleClick }>{ props.text }</button>
      );
    };

    const EnterButtonComponent = (props) => {
      const handleClick = () => {
        saveAllTip(inputChars.join(''))
        setOnscreenStatus('BUBBLES')
        setTypewriterStatus('OFF')
      };
    
      return (
        <button type="button" className="sendButton" onClick={ handleClick }>{ props.text }</button>
      );
    };

    const SpaceButtonComponent = (props) => {
      const handleClick = () => {
        console.log(inputChars.length)
        if (inputChars.length < 342){
          inputChars.push(' ')
          setInputText(inputChars.join(''))
          console.log(props.text);
          clearTimeout(typewriterTimeout)
        }
      };
    
      return (
        <button className="spaceBubbles" onClick={ handleClick }>{ props.text }</button>
      );
    };

    const ShiftButtonComponent = (props) => {
      
      const handleClick = () => {
      keyboardStatus == 'LOWER' ? setKeyboardStatus('UPPER') : setKeyboardStatus('LOWER')
 
      };
    
      return (
        <button className="shiftBubbles" onClick={ handleClick }>{ props.text }</button>
      );
    };

    return (
      <div className="overlayTipTypewriter">
        <div className={(keyboardStatus == 'LOWER') ? "tipTypewriterLower" : "tipTypewriterUpper"}>
        <CloseButtonComponent/>
          <div>
            <TextAreaComponent text={inputText}/>
          </div>
          <div className="keyboardBubbles">
            <div className="row">
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "q" : "Q"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "w" : "W"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "e" : "E"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "r" : "R"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "t" : "T"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "z" : "Z"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "u" : "U"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "i" : "I"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "o" : "O"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "p" : "P"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "ü" : "Ü"} />
            </div>
            <div className="row">
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "a" : "A"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "s" : "S"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "d" : "D"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "f" : "F"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "g" : "G"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "h" : "H"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "j" : "J"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "k" : "K"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "l" : "L"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "ö" : "Ö"} />
                <DeleteButtonComponent text="Delete" />
            </div>
            <div className="row">
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "y" : "Y"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "x" : "X"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "c" : "C"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "v" : "V"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "b" : "B"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "n" : "N"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "m" : "M"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "ä" : "Ä"} />
                <ButtonComponent text={(keyboardStatus == 'LOWER') ? "." : "?"} />
                <ShiftButtonComponent text="Enter" />
            </div>
            <div className="row">
            <SpaceButtonComponent text="_" />
            </div>
            <EnterButtonComponent/>
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
       <div className="backgroundBubbles"></div>
       
      {(onscreenStatus == 'BUBBLES') ? <Bubbles/> : (typewriterStatus == 'ON') ? <Typewriter/> : <Explain/>}
      </div>   
  )

};



export default Onscreen;