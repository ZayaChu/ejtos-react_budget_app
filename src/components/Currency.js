import React, { useState} from 'react';

const Budget = () => {const [currency, setCurrency] = useState('');

const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  



return (
    <div className='alert alert-secondary' color='green'>
        
    <select id="inputGroupSelect02" onChange={handleChange}>
            <option defaultValue>Currency</option>
            <option value="$" name="dollar">$ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="ruppee">₹ Ruppee</option>
              </select>
              </div>
);
};
export default Budget;