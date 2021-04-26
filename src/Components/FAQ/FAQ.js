import React from 'react';
import './faqStyles.css';
import Questions from './Questions';

function FAQ(){

    return(
        <div id="questions-container">
            <div id="title-container"><h3>FAQ</h3></div>
            <div id="artfol-questions">
                <div className="first-set">
                    <Questions question={"Where can I get Artfol?"} answer={"Artfol will be available on Android and iOS phones."} />
                    <Questions question={"Will Artfol be available on the PC?"} answer={"Artfol will be available on Android and iOS phones."} />
                    <Questions question={"Will I be able to post not safe for work art?"} answer={"Yes, Artfol lets users add a NSFW or Gore filter to their art before uploading. Please read our content guidelines for more details on what content we allow on Artfol."} />
                </div>
                <div className="second-set">
                    <Questions question={"Can I sign up if I am not an artist?"} answer={"Of course! You have the option to sign up with a non-artist account."} />
                    <Questions question={"Can I use the app if I don't do digital art?"} answer={"Artfol is open to all types of visual art! This includes photography, cosplay, traditional art etc!"} />
                </div>
            </div>
        </div>
    )
}

export default FAQ;