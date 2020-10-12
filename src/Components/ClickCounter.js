import React from 'react';
import './Styles.css'

import withCounter from '../HOC/withCounter'


const ClickCounter = (props) => {
    const style = {
        padding: "20px"
    }

    return(
        <div style={style}>            
            <p>{props.Equipment} Counter</p>
            <div>Clicked {props.x} times</div>
            <button onClick={props.Increment}>Increment</button>
        </div>
    )

}

export default withCounter(ClickCounter,1)