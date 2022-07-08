// import './style.css';
// import React from "react";
import '../style.css';
const Entry = (props) => {
    return ( 
        <div>
            <div className="term">
                <dt>
                    <span className="emoji" role="img" aria-label="Tense Biceps">
                    {props.emoji}
                    </span>
                    <span>{props.name}</span>
                </dt>
                <dd>
                    {props.description}
                </dd>
            </div>
        </div>
     );
}
 
export default Entry;