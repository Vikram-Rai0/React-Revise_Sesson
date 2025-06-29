//Rendering list with math
import React from 'react'

const MapList = () => {
    const fruits = [
        { id: 1, name: "Apple", calories: 95 },
        { id: 2, name: "Watermaalon", calories: 55 },
        { id: 3, name: "Banana", calories: 105 },
        { id: 4, name: "Mango", calories: 150 }];

    // fruits.short((a,b)=>a.name.localCompare(b.name));; //ALPHABITICAL
    // fruits.short((a, b) => a.calories - b.calories) // MUMERIC 
    // fruits.short((a, b) => b.calories - a.calories) // reverse NUMERIC 

    const listItems = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name} : &nbsp;
        <b> {fruit.calories}</b></li>);

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const lowCalList = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
        {lowCalFruit.name} : &nbsp;
        <b> {lowCalFruit.calories}</b></li>)


    const ReverseAlpha = fruits.sort((a, b) => b.name.localeCompare(a.name));; //Reverse ALPHABITICAL
    const reverseName = ReverseAlpha.map(reverse => <li>{reverse.name}: &nbsp; <b>{reverse.calories}</b></li>);
    return (
        <div>
            <h2>Fruit List</h2>
            <ol>{listItems}</ol>
            <h2>Low Calories Fruit</h2>
            <ol>{lowCalList}</ol>
            <h2>Reverse Alphabate</h2>
            <ol>{reverseName}</ol>

        </div>

    )
}

export default MapList
