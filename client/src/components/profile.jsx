import React, { useState, useEffect } from 'react';
import "./profile.css";

function Checkbox({ label, checked, onChange }) {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span>{label}</span>
      </label>
    </div>
  );
}

const Profile = () => {
  const [checkedLabels, setCheckedLabels] = useState([]);
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [SaveIndicator,setsaveindicator] = useState(false)
  useEffect(() => {
    // Load user information from localStorage when the component mounts
    const savedUserInfo = JSON.parse(localStorage.getItem('userinfo'));
    if (savedUserInfo) {
      setUsername(savedUserInfo.username);
      setFullName(savedUserInfo.fullName);
      setCheckedLabels(savedUserInfo.checkedLabels || []);
    }
  }, []);
///////////////////////

useEffect(() => {
  const delay = 2000;

  const Timer = setTimeout(() => {
    setsaveindicator(false);
  },delay);
  return () => {
    clearTimeout(Timer)
  };
}, [SaveIndicator])
  function handleCheckboxChange(e) {
    const label = e.target.nextSibling.textContent;
    if (e.target.checked) {
      setCheckedLabels((prev) => [...prev, label]);
    } else {
      setCheckedLabels((prev) => prev.filter((l) => l !== label));
    }
  }

  const submitUser = async () => {
    // Perform any necessary user updates here
  }

  const SubmitUserInfo = async (e) => {
    e.preventDefault();
    setsaveindicator((prevsaveindicator) => !SaveIndicator)
    
    // Save user information to localStorage
    localStorage.setItem('userinfo', JSON.stringify({ username, fullName, checkedLabels }));

    console.log('User info saved');
  }

  return (
    <form onSubmit={submitUser}>
      <div className='username__input'>
        {SaveIndicator && (
          <p style={{
            color: 'blue',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}>saved</p>
        )}
        <main>
        <label>Username</label>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </main>
      </div>
      <h2>Allergies</h2>
      <main className='allegries__option-value'>
        <Checkbox
        label="Dairy"
        checked={checkedLabels.includes("Dairy")}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Egg"
        checked={checkedLabels.includes("Egg")}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Gluten"
        checked={checkedLabels.includes("Gluten")}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Grain"
        checked={checkedLabels.includes("Grain")}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Peanut"
        checked={checkedLabels.includes("Peanut")}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Seafood"
        checked={checkedLabels.includes("Seafood")}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Sesame"
        checked={checkedLabels.includes("Sesame")}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Shellfish"
        checked={checkedLabels.includes("Shellfish")}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Soy"
        checked={checkedLabels.includes("Soy")}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Sulfite"
        checked={checkedLabels.includes("Sulfite")}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Tree Nut"
        checked={checkedLabels.includes("Tree Nut")}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Wheat"
        checked={checkedLabels.includes("Wheat")}
        onChange={handleCheckboxChange}
      />
      </main>
      <button className='submitUserInfo' onClick={SubmitUserInfo}>Save</button>
    </form>
  );
}

export default Profile;
