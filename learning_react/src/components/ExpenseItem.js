// Write your code at relevant places in the code below:

import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>15 August 2023</div>
      <div>
        <h2 className="expense-item__description ">Book</h2>
        <div className="expense-item__price">$10</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
