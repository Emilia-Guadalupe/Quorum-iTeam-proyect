import React, {useState} from 'react';
import './questionsStyles.css';

//Images 
import Polygon from '../../Images/Polygon_1.png';

function Questions({question}){

    const [showing, setShowing] = useState(false);

    return(
        <div className="all-the-questions-container">
        <div className="question-styles">
            <img onClick={() => setShowing(!showing)} className="polygon-figure" src={Polygon} alt="polygon figure" />
            <p id="question-section" className="question-text">{question}</p>
        </div>
        {showing ? 
        <div><p className="question-text">Lorem ipsum dolor sit amet.</p></div>
        : null}
        </div>
    )
}

export default Questions;