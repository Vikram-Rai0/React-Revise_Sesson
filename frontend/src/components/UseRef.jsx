// useState() = Re-renders the component when the state value changesd
//useRef() = "use Refrence" Does not cause re-renders when its value change
// 1.Accessing/Interacting with Dom elements
// 2. Handeling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals

import React from 'react'
import { useState, useEffect, useRef } from 'react';
const UseRef = () => {
    // let [number, setNumber] = useState(0)
    const inputRef1 = useRef("hello");
    const inputRef2 = useRef("hello");
    const inputRef3 = useRef("hello");
    console.log(inputRef1);

    useEffect(() => {
        console.log("Component Rendered");
    })

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "red";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "red";

    }

    return (
        <div>
            <button onClick={handleClick1}>1Click me!</button>
            <input type="text" ref={inputRef1} />

            <button onClick={handleClick2}>2Click me!</button>
            <input type="text" ref={inputRef2} />

            <button onClick={handleClick3}>3Click me!</button>
            <input type="text" ref={inputRef3} />
        </div>
    )
}

export default UseRef
