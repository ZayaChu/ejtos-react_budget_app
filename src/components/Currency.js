import React, { useState} from 'react';

const Budget = () => {const [setCurrency] = useState('');

const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const divStyle = {
    background:'#9DC183',
    color:'white'
  };
  



return (
    <div className='alert alert-secondary' style={divStyle}>
        
    <select style={divStyle} id="inputGroupSelect02" onChange={handleChange}>
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