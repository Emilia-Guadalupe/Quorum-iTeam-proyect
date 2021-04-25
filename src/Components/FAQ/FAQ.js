import React from 'react';
import './faqStyles.css';

import Questions from './Questions';

function FAQ(){

    return(
        <div id="questions-container">
            <div id="title-container"><h3>FAQ</h3></div>
            <div id="artfol-questions">
                <div className="first-set">
                    <Questions question={"Where can I get Artfol?"} />
                    <Questions question={"Will Artfol be available on the PC?"} />
                    <Questions question={"Will I be able to post not safe for work art?"} />
                </div>
                <div className="second-set">
                    <Questions question={"Can I sign up if I am not an artist?"} />
                    <Questions question={"Can I use the app if I don't do digital art?"} />
                </div>
            </div>
        </div>
    )
}

export default FAQ;