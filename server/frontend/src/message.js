import React from "react";
import randomString from './randomString';

function Message({msg}) {
    console.log(msg)
    var component_id = randomString(8)
    if (msg.bot) {
        return (
            <div className='backdrop floating'
                 align="left"
                 key={component_id}
                 style={{width: '60vw', padding: '10px', fontWeight:800, fontSize:'0.7em'}}>
                <p style={{margin: '0px', padding: '15px'}}>{msg.msg_text}</p>
            </div>
        );
    } else{
        return (
            <div className="floating"
                 align="right"
                 key={component_id}
                 style={{width: '60vw', padding: '20px', color: 'black', fontSize:'0.6em'}}>
                {msg.msg_text}
            </div>
        );
    };
};

export default React.memo(Message);