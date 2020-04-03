import React from 'react'

function Button (props) {
    return <div>
        <button onClick={props.OnClick()}>{props.btn}</button>
    </div>
}
export default Button