// Write your code here
// Write your code at relevant places in the code below

import "./ExpenseItem.css";
import Card from "./Card";
import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  function ButtonClicked(event) {
    setTitle("New Title");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={ButtonClicked}> change title</button>
    </Card>
  );
}

export default ExpenseItem;
