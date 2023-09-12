import React, { useId } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import Addgrocery from './addgrocery'
import UpdateGrocerylist from './updateGrocerylist'

const cookie = new Cookies()
const username = cookie.get('username')


const My_groceryList =  ({fetchgroceryList,fetchdata,Trigger,}) => {
  const [fetchgrocery,setfetchgrocery] = useState([])

    const username = cookie.get('username')
    
  const GetUrl = `http://localhost:5000/groceryList/getgroceryList`
  const fetchGrocery = async () => {
    const response = await axios.get(`${GetUrl}?username=${username}`);
    setfetchgrocery(response.data)
  }
  fetchdata(fetchGrocery)
  useEffect(() => {
    fetchGrocery();
    
  }, [Trigger]);
  fetchgroceryList(fetchgrocery);
  fetch(fetchGrocery)
}
  
/////////////////////////////////////


const Grocery_list = (dataID) => {
  const [trigger,settrigger] = useState(1)
  const [childTrigger, setChildTrigger] = useState('');
  const [groceryData, setgroceryData] = useState('');
  const [UserID,setuserID] = useState('')
  const [UpdateGrocery,setupdateGrocery] = useState(false)
  const [addgroceryTrigger,setaddgroceryTrigger] = useState('')
  const onAddGrocery = () => {
    
  }
/////////////// function that gets the trigger from the addgrocery jsx to re-render the page
const handleChildData = (data) => {
  // Handle the data received from the child component
  setChildTrigger(data);
};


  const GroceryData = (data) => {
    setgroceryData(data)
    console.log(groceryData)
  }
  const EditgroceryList = async (dataID) => {
    
    setuserID(dataID)
    console.log(UserID)
    setupdateGrocery((prev) => !UpdateGrocery)
    console.log(UpdateGrocery)
    /* const username = cookie.get('username');
    settrigger((prevtrigger) => trigger + 1)
    console.log(up)
    const Update = `http://localhost:5000/groceryList`; */
    /* const response = await axios.post(``) */
  }
  const deletegroceryList = async (dataID) => {
    const username = cookie.get('username');
    const DeleteUrl = `http://localhost:5000/groceryList`;
    console.log('hello')
    settrigger((prevtrigger) => trigger + 1)
    console.log(trigger)
    try {
    // Make the DELETE request directly without defining another async function
    const response = await axios.delete(`${DeleteUrl}/deletegrocery/${dataID}?username=${username}`);
    const data = response.data;
    console.log(data);
    const GetUrl = `http://localhost:5000/groceryList/getgroceryList`
    const fetchGrocery = async () => {
    const response = await axios.get(`${GetUrl}?username=${username}`);
    
    
    
  }
    
    // You can also trigger a refresh of your grocery list data here
    // Fetch the updated list or update your state as needed
  } catch (error) {
    console.error(error);
    // Handle any errors that occur during the request
  }
}
/////////////////
const FetchData = (item) => {
  setaddgroceryTrigger(item)
  console.log(addgroceryTrigger)
  console.log('e')
}
  return (
    <div>
     <UpdateGrocerylist userID={UserID} showUpdateGrocery={UpdateGrocery}/>
     <Addgrocery onChildData={handleChildData} fetch={FetchData}/>
     <My_groceryList fetchgroceryList={GroceryData} fetchdata={onAddGrocery} Trigger={trigger} fetch={FetchData}/>
     <table className='table table-borderless table-striped '>
     <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ItemName</th>
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Rate</th>
      <th scope="col">Amount</th>
      <th scope="col">Remarks</th>
      <th scope="col">Option</th>
    </tr>
  </thead>
      <tbody>
        {Array.isArray(groceryData) && groceryData.map((data, index) => {
    return <tr key={index}>
       <th scope="row">{index + 1}</th>
      <td>{data.Item}</td>
      <td>{data.Description}</td>
      <td>{data.Quantity}</td>
      <td>{data.Rate}</td>
      <td>{data.Amount}</td>
      <td>{data.Remarks}</td>
      <td>{/* <span onClick={() => EditgroceryList(data._id)}>Edit</span> */}<span onClick={() => deletegroceryList(data._id)}>Delete</span></td>
    </tr>
        })}
      </tbody>
      </table>
      
    </div>
  )
}

export default Grocery_list
