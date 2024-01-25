import React, { useEffect, useState } from 'react'
import { FaEye } from "react-icons/fa"; 
import { FaEyeSlash } from "react-icons/fa";
import {Link} from "react-router-dom"

function Login() {
  const [inputFields,SetInputField]=useState({
       email:"",
       password:""
       
  })
  const [errors,Seterrors]=useState({})
  const [arr,setArr]=useState([])
  useEffect(()=>{
       console.log(arr)
  },[arr])
  // const [submitting,setSubmitting]=useState(false)
  function formvalidation(e)
  {
       e.preventDefault()
       console.log("hello world")
       console.log(inputFields)
       const validateError={}
       let result=true
      //  console.log(!inputFields.email)
       if(!inputFields.email.trim())
       {
          validateError.email="email is required"
          result=false
       }
       else if(!/^([A-Za-z0-9])+@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/.test(inputFields.email)){
        validateError.email="email is not valid"
      
        result=false
         
       }
       else{
        validateError.email=""
       }

       if(!inputFields.password.trim())
       {
          validateError.password="password is required"
          result=false

       }
       else if(inputFields.password.length<6){
        validateError.password="password should be at least 6 char"
        result=false
       }
       else{
        validateError.password=""
       }

    
           console.log(Seterrors(validateError)) 
      if(result){
       setArr([...arr,inputFields]);
      //  console.log("arr",arr)
      
      }     

        
  }

  function handlechange(e){
      e.preventDefault();
      SetInputField({ ...inputFields, [e.target.name]: e.target.value });
  }
  
 
 
  return (
     <>
    
        <section id='Login'>
          <div className='Container-fluid'>
            <h1 className='text-center'>Sign in</h1>
             <div className='row mt-5 pt-5'>
                <div className='col-md-6'>

                    <div className='form-div'>
                        <form onSubmit={formvalidation}> 
                          <label>Email Address</label><br></br>
                           <input type='text' value={inputFields.email} name='email'   onChange={handlechange}/> <br></br>
                            {errors.email&&<p  className='error'>{errors.email}</p>}
                            <label>password</label><br></br>
                            <input type='password' value={inputFields.password}  name='password' onChange={handlechange} />
                            {errors.password&&<p className='error'>{errors.password}</p>}

                            <span className='login-icon1'><  FaEye />  </span>
                            <span className='login-icon2'> <FaEyeSlash /></span><br></br>
                         
                            <input type="submit" value="Sign in" />
                            <a href=''>Forgot your password?</a> 
                        </form>
                    </div>
                </div> 
               
               
                <div className='col-md-6'>
                  <div className='form-detail'>
                       <h6>New Customer?</h6>
                       <p>Create an account with us and you'll be able to:</p>
                       <ul>
                          <li>Check out faster</li>
                          <li>Save multiple shipping addresses</li>
                          <li>SAccess your order history</li>
                          <li>Track new orders</li>

                        </ul>
                        <Link to="/Resistor">   <button className='form-btn' >Create Account</button></Link>
                  </div>
                </div>
             </div>
          </div>
        </section>
     
     </>
  )
}

export default Login
