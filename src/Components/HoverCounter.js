import React from 'react';
import './Styles.css'

import withCounter from '../HOC/withCounter'


const HoverCounter = (props) => {
    const style = {
        padding: "20px"
    }

    return(
        <div style={style}>            
            <p>{props.Equipment} Counter</p>
            <div onMouseOver={props.Increment}>Hovered {props.x} times</div>            
        </div>
    )

}

export default withCounter(HoverCounter,3)