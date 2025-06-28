import React from 'react'
import { useState, useEffect } from 'react';
const UseEffect = () => {
    const [count, setCount] = useState(0); // state variable to set a number 
    const [color, setColor] = useState("green");  // state vairable to set color
    const [width, setWidth] = useState(window.innerWidth);  // state varaible to set window width
    const [height, setHeight] = useState(window.innerHeight); // state variable to set window heiglt

    useEffect(() => {
        document.title = `Count: ${count} , ${color}`; // to show count and color in tab
    }, [count, color]);

    function addCount() {
        setCount(c => c + 1);
    }
    function subCount() {
        setCount(c => c - 1)
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    // here using use effect to mount once rather than create neweventlistener in everystep you can check in console//
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Lisener Added");
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Lisener Removed");
        }
    }, [])

    useEffect(() => {
        document.title = `size: ${width} * ${height}`;
    }, [width, height])
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }
    return (
        <div >
            <div className='flex flex-col justify-center items-center '>
                <h1 style={{ color: color }}> {count} </h1> {/*change color of count using style attribute in style */}
                <button onClick={addCount} className=''>Add</button>
                <button onClick={subCount}>Sub</button>
                <button onClick={changeColor}>change</button>
            </div>

            <h2>window width: {width}</h2>
            <h2>window height: {height}</h2>

        </div>
    )
}

export default UseEffect
