import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import './addgrocery.css'

const groceryForm = {
  Item: '',
  Description: '',
  Quantity: null,
  Rate: null,
  Amount: null,
  Remarks: ''
}

const Update = {
  Item: '',
  Description: '',
  Quantity: null,
  Rate: null,
  Amount: null,
  Remarks: ''
}

const cookie = new Cookies()
const username = cookie.get('username')

const Addgrocery = ({ onAddGrocery, onChildData,fetch}) => {
  const [childT,setchildT] = useState(1)
  const [showgroceryform, setshowgroceryform] = useState(false)
  const [value,setvalue] = useState(1)
  const [fetchgrocery,setfetchgrocery] = useState([])
  const [GroceryForm, setGroceryForm] = useState(groceryForm)
  const [state,setstate] = useState(false)
  const [UpdateForm,setUpdateForm] = useState(Update)
  const [SecondTrigg,SetsecondTrigg] = useState(1)
  const [fetchtrigger,setfetchtrigger] = useState(1)

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
  const UpdateSubmit = async (e) =>{
    e.preventDefault();

    setchildT((prevchildT) => childT + 1)
    console.log(childT)
    onChildData(childT);
    const {
      Item,
      Description,
      Quantity,
      Rate,
      Amount,
      Remarks
    } = UpdateForm
    const URL = 'http://localhost:5000/groceryList/groceryList/';
    const { data } = await axios.post(`${URL}/update/${'c'}?username=${username}`, {
      Item,
        Description,
        Quantity,
        Rate,
        Amount,
        Remarks
    })
  }
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
    const URL = 'http://100.25.150.44:5000/groceryList/addgroceryList';
	try{
    const { data } = await axios.post(`${URL}?username=${username}`, {
      Item,
        Description,
        Quantity,
        Rate,
        Amount,
        Remarks
    })
    console.log(data)
    setshowgroceryform((prevshowgroceryform) => !showgroceryform)
    console.log(fetchtrigger)
    function fetchTRigger(){
      fetch(setfetchtrigger((prev) => fetchtrigger + 1))
      console.log(fetchtrigger)
    }
	} catch(error){
		console.error('errorr',error)
	}
  }

  const HandleShowGroceryForm = () => {
    setshowgroceryform((prevshowgroceryform) => !showgroceryform)
  }

  console.log(GroceryForm)

  return (
    <div>
      <span className='addgroceryList__button' onClick={HandleShowGroceryForm}>Add GroceryList</span>
      {showgroceryform && (
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
          <button>Add</button>
        </form>
      )}
      
    </div>
  )
}

export default Addgrocery
