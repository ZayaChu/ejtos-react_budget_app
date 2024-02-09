import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    
        const { expenses } = useContext(AppContext);
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        isGreater(event.target.value);
    }
    function isGreater(number){
        if(number<totalExpenses){
            alert("You cannot reduce the budget value lower than the speanding");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
