import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookie = new Cookies()
const username = cookie.get('username')
const groceryForm = {
    Item: '',
    Description: '',
    Quantity: null,
    Rate: null,
    Amount: null,
    Remarks: ''
  }
const UpdateGrocerylist = ({userID,showUpdateGrocery}) => {
    console.log(showUpdateGrocery)
    const [GroceryForm, setGroceryForm] = useState(groceryForm)
    const [showgroceryform, setshowgroceryform] = useState(false)

/////////
useEffect(() => {
    setshowgroceryform(showUpdateGrocery);
  }, [showUpdateGrocery]);
    console.log(showgroceryform)

    console.log(userID)
    console.log()
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let amount = 0;
        if (name === 'Quantity') {
          amount = value * GroceryForm.Rate;
        } else if (name === 'Rate') {
          amount = value * GroceryForm.Quantity;
        } else {
          amount = GroceryForm.Quantity * GroceryForm.Rate;
        }
        setGroceryForm({
          ...GroceryForm,
          [name]: value,
          Amount: amount,
        });
      };


      const HandleSubmit = async (e) => {
        e.preventDefault();
          const {
            Item,
            Description,
            Quantity,
            Rate,
            Amount,
            Remarks
          } = GroceryForm
        const URL = 'http://localhost:5000/groceryList/groceryList/update';
        const { data } = await axios.post(`${URL}/${userID}?username=${username}`, {
          Item,
            Description,
            Quantity,
            Rate,
            Amount,
            Remarks
        })
        console.log(data)
      
      }
      



  return (
    <div>
    {showgroceryform && (
      <section>
        <form onSubmit={HandleSubmit} className='submit__grocery'>
        <div>
          <label htmlFor='ItemName'>ItemName</label>
          <input 
            name='Item'
            type='text'
            placeholder='ItemName'
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='ItemDescription'>ItemDescription</label>
          <input 
            name='Description'
            type='text'
            placeholder='ItemDescription'
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='Quantity'>Quantity</label>
          <input 
            name='Quantity'
            type='number'
            placeholder='Quantity'
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='Rate'>Rate</label>
          <input 
            name='Rate'
            type='number'
            placeholder='Rate'
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='Amount'>Amount</label>
          <input 
            name='Amount'
            type='number'
            placeholder='Amount'
            value={GroceryForm.Amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='Remark'>Remark</label>
          <input 
            name='Remarks'
            type='text'
            placeholder='Remark'
            onChange={handleInputChange}
            required
          />
        </div>
        <button>Update</button>
      </form>
      </section>
    )}
    
  </div>
  )
}

export default UpdateGrocerylist