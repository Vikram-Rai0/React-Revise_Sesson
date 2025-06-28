import React, { useState } from 'react';
function UseStateComponent() {

    const [name, setName] = useState();
    const [gender, setGender] = useState("Female") // i keep my initial state as Female, while the browser render and initial state will show up.
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Vikram");// setName change the state of variable and display in browser

        var name = "vikram";//normal variable change in console but cannot change in browser
        console.log(name);
    }

    const updateGender = () => {

        setGender('Male');
    }

    const IncrementAge = () => {

        setAge(age + 1); // increment logic , increment age number by 1 on everyclick
    }

    const toggleEmpStatus = () => {
        setIsEmployed(!isEmployed) //change boolean value if its true it changed into false and if its false its change into true and so on.
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>SetName</button>

            <h2> Gender:{gender}</h2>
            <button onClick={updateGender}>setGender</button>

            <h3>Age: {age}</h3>
            <button onClick={IncrementAge}>IncreaseAge</button>

            <h2>IsEmployee: {isEmployed ? "Yes" : "No"}</h2>
            <button onClick={toggleEmpStatus}>isEmployee</button>
        </div>


    )
}
export default UseStateComponent;