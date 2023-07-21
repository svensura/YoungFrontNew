


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CitationDataService from "../services/CitationDataService";
import ClickDataService from "../services/ClickDataService";


const OnscreenStatus = {
  CITATIONS: 'CITATIONS',
  TYPEWRITER: 'TYPEWRITER'
}


const Onscreen  = () => {


  const [onscreenStatus, setOnscreenStatus] = useState([OnscreenStatus.CITATIONS])
  const navigate = useNavigate();
  
  const Button = () => {

    const onClick = () => {
      console.log('Button clicked!')
      ClickDataService.increaseClicks("ZitatGelbEigenesZitat")
      setOnscreenStatus('TYPEWRITER')
    }

    return (
      <button type="button" className="citationButton" onClick={onClick}>
      </button>
    );
  
  };

  const saveAllCitation = (citation) => {
    ClickDataService.increaseClicks("ZitatGelbAbgeschickt")
    var data = {
      creator: "test",
      content: citation
    };

    CitationDataService.createAllCitation(data)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  const Citation  = () => {


    const [citation, setCitation] = useState("")
   
    const getCitation  = () => {
      CitationDataService.getRandomCitation()
      .then(response => {
        console.log(response.data)
        setCitation(response.data[0].content)
      })
      .catch(e => {
        //console.log(e);
      })
    }

    useEffect(() => {
      
    getCitation()

      const id = setInterval(() => {
        getCitation()
      }, 10000)
      return () =>  {
        clearInterval(id); 
      } 
    }, []);

    

    return (
     <div>
        <div className="citationDisplay">{citation}</div>
        <Button/>
        <div className="citationHint">Hinterlasse dein Zitat</div>
      </div>
      
    )


  }
  let inputChars = []
  const Typewriter  = () => {

 const KeyboardStatus = {
      LOWER: 'LOWER',
      UPPER: 'UPPER'
    }

    const maxChars = 150

    const [inputText, setInputText] = useState("")
    const [keyboardStatus, setKeyboardStatus] = useState([KeyboardStatus.UPPER])
    const [charsLeft, setCharsLeft] = useState(maxChars)
    let timeout = 15000 // general screensaver-time 
    let typewriterTimeout 

    var noofTimeOuts = setTimeout( function(){});
    for (var i = 0 ; i < noofTimeOuts ; i++) clearTimeout(i);


    const restartTimeout = () => {
      clearTimeout(typewriterTimeout);
      typewriterTimeout = setTimeout(function() {
        console.log('TIMEOUT')
        setOnscreenStatus('CITATIONS')
      }, timeout);
    }

    useEffect(() => {
      clearTimeout(typewriterTimeout)
      restartTimeout()
    }, [restartTimeout, typewriterTimeout]);

    const TextAreaComponent = (props) => {

    
      return (
        <textarea className="inputText" value={ props.text } onChange={()=>{}}/>
      );
    };

    const ButtonComponent = (props) => {
      const handleClick = () => {
        console.log(props.text);
        setCharsLeft(maxChars - inputChars.length)
        if (charsLeft > 0){
          inputChars.push(props.text)
          setInputText(inputChars.join(''))
          if (keyboardStatus == 'UPPER') setKeyboardStatus('LOWER')
          clearTimeout(typewriterTimeout)
        }
      };
    
      return (
        <button className="keys" onClick={ handleClick }>{ props.text }</button>
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
        <button className="delete" onClick={ handleClick }>{ props.text }</button>
      );
    };

    const EnterButtonComponent = (props) => {
      const handleClick = () => {
        console.log(props.text);
        saveAllCitation(inputChars.join(''))
        setOnscreenStatus('CITATIONS')
      };
    
      return (
        <button type="button" className="enterButton" onClick={ handleClick }>{ props.text }</button>
      );
    };

    const SpaceButtonComponent = (props) => {
      const handleClick = () => {
        setCharsLeft(maxChars - inputChars.length)
        if (charsLeft > 0){
          inputChars.push(' ')
          setInputText(inputChars.join(''))
          console.log(props.text);
          clearTimeout(typewriterTimeout)
        }
      };
    
      return (
        <button className="space" onClick={ handleClick }>{ props.text }</button>
      );
    };

    const ShiftButtonComponent = (props) => {
      
      const handleClick = () => {
      keyboardStatus == 'LOWER' ? setKeyboardStatus('UPPER') : setKeyboardStatus('LOWER')
 
      };
    
      return (
        <button className="shift" onClick={ handleClick }>{ props.text }</button>
      );
    };

    return (
      <div className="overlayTypewriter">
        <div className={(keyboardStatus == 'LOWER') ? "onscreenTypewriterLower" : "onscreenTypewriterUpper"}>
          <div className="charsleft">
            Noch {charsLeft} Zeichen
          </div>
          <div className="textarea">
            <TextAreaComponent text={inputText}/>
          </div>
          <div className="keyboard">
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

  return (
    <div className="black">
      <div className="background"></div>
      {(onscreenStatus == 'CITATIONS') ? <Citation/> : <Typewriter/>}
    </div>   
  )

};



export default Onscreen;