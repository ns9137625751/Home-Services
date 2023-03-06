import React from 'react'
import "./popUp.css"

const popUp = (props) => {

    return (props.trigger) ? (
        <div className='pop-up'>
            <div className='pop-up-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)} >X</button>
                {props.children}
            </div>
        </div>
    ) : ""
}

export default popUp