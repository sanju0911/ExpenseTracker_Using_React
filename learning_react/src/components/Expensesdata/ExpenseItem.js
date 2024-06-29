import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const ButtonClicked = () => {
    setTitle("New Title");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={ButtonClicked}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
