import React, { useState,useContext, currency, name} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    let{currency, dispatch}=useContext(AppContext)
    const [newCurrency, setNewCurrency] = useState(currency);
    const changeCurrency = (event) => {
    setNewCurrency(event.target.value);
    dispatch({
        type: 'CHG_CURRENCY',
        payload: event.target.value,
    });
  }
  const divStyle = {
    background:'#9DC183',
    color:'white'
  };
return (
    <div className='alert alert-secondary' style={divStyle}>
        <span>Currency </span>
   <select style={divStyle} id="currentCurrency" onChange={changeCurrency} value={newCurrency}>
           
            <option value="$" name="dollar">$ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="ruppee">₹ Ruppee</option>
              </select>
              </div>
);
};
export default Currency;