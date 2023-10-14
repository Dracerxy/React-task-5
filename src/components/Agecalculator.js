import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from 'react';
function Agecalculator(){
    const [age, setAge] = useState(null);
    const [birthdate, setBirthdate] = useState('');
    const calculateAge = () => {
      if (birthdate) {
        const birthDate = new Date(birthdate);
        const currentDate = new Date();
        const ageInMilliseconds = currentDate - birthDate;
        const ageInYears = Math.floor(ageInMilliseconds / 31557600000); 
  
        setAge(ageInYears);
      } else {
        setAge(null);
      }
    };
    return(
        <div class="container col-5 mt-5 border border-secondary">
            <h1>Age Calculator</h1>
            <h6 class="mt-3">Enter your date of birth</h6>
            <input class="form form-contrl mt-3" type="date"  value={birthdate} onChange={(e) => setBirthdate(e.target.value)}></input><br/>
            <input class="btn btn-primary mt-3"type="button" value="Calculate age" onClick={calculateAge}></input>
            {age !== null && <b><p>You are {age} years old!</p></b>}
        </div>
    )
}
export default Agecalculator;