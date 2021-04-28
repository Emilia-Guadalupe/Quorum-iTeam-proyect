import React, {useState} from 'react';
import './questionsStyles.css';

//Images 
import Polygon from '../../Images/Polygon_1.png';

function Questions({question, answer}){

    //Show and hide the answer container
    const [showing, setShowing] = useState(false);
    

    return(
        <div className="all-the-questions-container">
        <div onClick={() => setShowing(!showing)} className="question-styles">
            <img id="polygon-figure" className={(showing === true ? 'rotation' : '')} src={Polygon} alt="polygon figure" />
            <p id="question-section" className="question-text">{question}</p>
        </div>
        {showing ? 
        <div><p id="answer" className="question-text">{answer}</p></div>
        : null}
        </div>
    )
}

export default Questions;