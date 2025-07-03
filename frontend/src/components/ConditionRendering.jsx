import React from 'react'

function ConditionRendering(props) {
    // if (props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // } else {
    //     return <h2>Please log in to continue</h2>
    // }

    return (props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2 >Please Logged in first</h2>);
}

export default ConditionRendering
