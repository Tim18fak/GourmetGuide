import React, { useEffect, useState}  from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios';
import './Auth.css'

const cookies = new Cookies();

const InitialState = {
  fullName: '',
  username: '',
  phoneNumber: '',
  avatarURL: '',
  password: '',
  confirmPassword: ''
}

const Auth = () => {
  const [form, setform] = useState(InitialState)
  const [Issignup, setissignup] = useState(true)
  const [wrongpass,setwrongpass] = useState(false)
  const [wrongPass,setwrongPass] = useState(false)
  const [noUser,setnoUser] = useState(false)

  useEffect(() => {
    const delay = 2000;
    const Timer = setTimeout(() => {
      setwrongPass(false)
      setnoUser(false)
    },delay)
    return () => {
      clearTimeout(Timer)
    }
  }) 
  const handlechange = (e) => {
    e.preventDefault();
    setform({ ...form, [e.target.name]: e.target.value})
    const avatar = form.avatarURL
    console.log(avatar)
    localStorage.setItem('avatarurl', avatar);
    const a = form.password
    const b = form.confirmPassword
    console.log(a)
    console.log(b)
    /* if(form.password == form.confirmPassword){
      console.log('true')
    }else{
      console.log('wrong')
    } */
  }
  const switchMode = () => {
      setissignup((prevIssignup) => !Issignup)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
 /*    if (Issignup && form.password !== form.confirmPassword) {
      // Request the user to enter a matching password
     <Invalid />

  } */
  

   const { fullName, username, phoneNumber, avatarURL, password } = form;
const URL = 'http://100.25.150.44:5000/auth';

try {
  const response = await axios.post(`${URL}/${Issignup ? 'signup' : 'login'}`, {
    fullName,
    username,
    phoneNumber,
    avatarURL,
    password,
  });
    const { data } = response;
  const { userId, hashedPassword } = data;

  // Check the status code
  if (response.status === 200) {
    // Handle a successful response (status 200)
    cookies.set('userId', userId);
    cookies.set('fullName', fullName);
    cookies.set('username', username);

    if (!Issignup) {
      cookies.set('avatarURL', avatarURL);
      cookies.set('phonenumber', phoneNumber);
      cookies.set('hashedPassword', hashedPassword);
    }

window.location.reload();
  } /* else if (response.status === 401) {
    // Handle unauthorized (status 401) - e.g., show an error message
    console.error('Unauthorized: You do not have permission.');
  } else if (response.status === 400) {
    // Handle a bad request (status 400) - e.g., show a validation error
    console.error('Bad Request: Invalid input data.');
  } else {
    // Handle other status codes as needed
    console.error(`Unexpected status code: ${response.status}`);
  } */
} catch (error) {
  console.log(error.response.status)
  const status = error.response.status
  if(status == 401){
    setwrongPass((prev) => !wrongPass)
  }else if(status == 400){
    setnoUser((prev) => !noUser)
  }
  
  
}
  }
  
  return (
    <div>
      <div>
        <div className='xx'>
            <p className='signin__SignUp'>{Issignup ? "Sign up" : "Sign In"}</p>
            <form onSubmit={handleSubmit} className='Auth__form'>
              <section className='auth__form ' st>
              {Issignup && (
                <div className='Auth__form_input'>
                  <label htmlFor='fullName'>Fullname</label>
                  <input 
                  name='fullName'
                  type='text'
                  placeholder='Fullname'
                  onChange={handlechange}
                  required
                  className='Auth__form-value__input'
                  />
                </div>
              )}
              <div className='Auth__form_input'>
                  <label htmlFor='username'>Username</label>
                  <input 
                  name='username'
                  type='text'
                  placeholder='Username'
                  onChange={handlechange}
                  required
                  className='Auth__form-value__input'
                  />
                </div>
                {Issignup && (
                <div className='Auth__form_input'>
                  <label htmlFor='phoneNumber'>Phone Number</label>
                  <input 
                  name='phoneNumber'
                  type='text'
                  placeholder='Phone Number'
                  onChange={handlechange}
                  required
                  className='Auth__form-value__input'
                  />
                </div>
              )}
              {Issignup && (
                <div className='Auth__form_input'>
                  <label htmlFor='avatarUrl'>Avatar URL</label>
                  <input 
                  name='avatarURL'
                  type='text'
                  placeholder='Avatar URL'
                  onChange={handlechange}
                  required
                  className='Auth__form-value__input'
                  />
                </div>
              )}
              <div className='Auth__form_input'>
                  <label htmlFor='password'>Password</label>
                  <input 
                  name='password'
                  type='password'
                  placeholder='Password'
                  onChange={handlechange}
                  required
                  className='Auth__form-value__input'
                  />
                </div>
                {Issignup && (
                <div className='Auth__form_input'>
                  <label htmlFor='confirmPassword'>Confirm Password</label>
                  <input 
                  name='confirmPassword'
                  type='password'
                  placeholder='Confirm Password'
                  onChange={handlechange}
                  required
                  className='Auth__form-value__input'
                  />
                </div>
              )}
              </section>
              <div>
                <button className='Issignup__option'>
                  {Issignup ? "Sign Up" : "Sign In"}
                </button>
              </div>
              {wrongPass && (
                <div>
                  <p style={{
                    color : 'white'
                  }}>Incorrect Password</p>
                </div>
              )}
              {noUser && (
                <div>
                  <p style={{
                    color : 'white'
                  }}>User not found</p>
                </div>
              )}
            </form>
            
            <div>
              <p className='switchMode'>
                {Issignup 
                ? "Already have an account  "
                : "Don't have an account  "
                }

                <span onClick={switchMode} className='switchMode__option'>
                  {Issignup ? "Sign in" : "Sign up"}
                </span>
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Auth;
