
import './App.css';
import { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [values, setValues] = useState({
  username:"",
  email:"",
  password:"",
});

// Creating a array for all the inputs together instead define one by one input

const inputs = [
  {
    id:1,
    name:"username",
    type:"text",
    placeholder:"username",
    errorMessage:"Username should be 3-16 characters",
    label:"Username",
    // we are now initializing invalid input
    // there are pattern attribute also with required tag that you define ki kb error show hoga
    required:true,
    pattern:"^([a-zA-Z]{2,}[- ][a-zA-Z]{1,}'?-?[a-zA-Z]{2,}[- ]?([a-zA-Z]{1,})?)"
  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Please enter your email",
    errorMessage:"Enter valid email address",
    label:"Email",
    required:true,
    pattern:"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
    // required se initial all error message will be appear and as soon as user starts typing input then that error will disappear
  },
  {
    id:3,
    name:"password",
    type:"password",
    placeholder:"Please enter your password",
    errorMessage:"Password must be of 8 characters",
    label:"Password",
    required:true,
    pattern:"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$"
  }
]



const handleSubmit = (e) => {
  e.preventDefault();
}

const onChange = (e) => {
  // we are now seeting the values for our input
  // target name = the name attribute given in input field
  // target value = the values user give
  setValues({...values, [e.target.name]: e.target.value})
}

console.log(values);


  return(
    <div className='app'>
    <form onSubmit={handleSubmit}>  
    <h1>Register</h1>
    {/* u can put onsubmit on form tag also or in button tag also
    2. for accessing array we do there using map
    3. if u are using map then indicate your key like in this id */}
    {inputs.map((input) => (
       <Form className="display"
       key={input.id} 
       {...input} 
       value={values[input.name]}
       onChange={onChange} />
    ))}
     
      
      <button>Submit</button>
    </form>
  </div>
  
  )
    };

export default App;
