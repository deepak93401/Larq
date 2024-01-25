import React, { useEffect, useState } from 'react'

function Resistor() {

  const [inputFields,SetInputField]=useState({
    email:"",
    password:"",
    confirmpassword:"",
    country:"",
    Fname:"",
    Lname:"",
    Address:"",
    Address1:"",
    Cname:"",
    City:"",
    State:"",
    Zipcode:"",
    Pnumber:""
    
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

    
    if(!inputFields.confirmpassword.trim())
    {
       validateError.confirmpassword="conform password is required"
       result=false

    }
    else if(inputFields.confirmpassword.trim()!==inputFields.password.trim()){
     validateError.confirmpassword="password not match"
     result=false
    }
    else{
     validateError.confirmpassword=""
    }

        
    if(!inputFields.Fname.trim())
    {
       validateError.Fname="First Name is required"
       result=false

    }
    
    else{
     validateError.Fname=""
    }

    if(!inputFields.Lname.trim())
    {
       validateError.Lname="Last Name is required"
       result=false

    }
    
    else{
     validateError.Lname=""
    }

   
    if(!inputFields.Address.trim())
    {
       validateError.Address="Address is required"
       result=false

    }
    
    else{
     validateError.Address=""
    }

    if(!inputFields.Address1.trim())
    {
       validateError.Address1="Address1 is required"
       result=false

    }
    
    else{
     validateError.Address1=""
    }

    if(!inputFields.Cname.trim())
    {
       validateError.Cname="company is required"
       result=false

    }
    
    else{
     validateError.Cname=""
    }

    if(!inputFields.City.trim())
    {
       validateError.City="company is required"
       result=false

    }
    
    else{
     validateError.City=""
    }
   
   
    if(!inputFields.State.trim())
    {
       validateError.state="company is required"
       result=false

    }
    
    else{
     validateError.State=""
    }

    if(!inputFields.Zipcode.trim())
    {
       validateError.Zipcode="company is required"
       result=false

    }
    
    else{
     validateError.Zipcode=""
    }

    
    if(!inputFields.Pnumber.trim())
    {
       validateError.Pnumber="company is required"
       result=false

    }
    
    else{
     validateError.Pnumber=""
    }


    
   



 
        console.log(Seterrors(validateError)) 
   if(result){
    setArr([...arr,inputFields]);
    let storedFromData=JSON.parse(localStorage.getItem('product'))||[];
    localStorage.setItem('product',JSON.stringify([...storedFromData,inputFields]))
    console.log("arr",arr)
   
   }     

     
}

function handlechange(e){
   e.preventDefault();
   SetInputField({ ...inputFields, [e.target.name]: e.target.value });
}

  return (
    <>
       <section id='Resistor'>
        <div className='Container-fluid'>
        <h1 className='text-center'>New Account</h1>
        <div className='row'>
            <div className='col-md-12'>
                <div className='resistor-form'>
                        <div className='resistorform-div'>
                            <form className='fullform' onSubmit={formvalidation}>

                           
                            <div className='form-con'>
                                <div className='a'>
                                   
                                   <label>Email Address</label><br></br>
                                   <input type='text' value={inputFields.email} name='email'   onChange={handlechange} ></input> 
                                   {errors.email&&<p  className='error'>{errors.email}</p>}
                                
                                   <label>Conform password</label><br></br>
                                    <input type='password' value={inputFields.confirmpassword}  name='confirmpassword' onChange={handlechange}/>
                                    {errors.confirmpassword&&<p  className='error'>{errors.confirmpassword}</p>}
                                
                                    
                                    <label>First Name</label><br></br>
                                    <input type='text' value={inputFields.Fname}  name='Fname' onChange={handlechange}/>
                                    {errors.Fname&&<p  className='error'>{errors.Fname}</p>}
                                  
                                    
                                    <label>Address Line 1</label><br></br>
                                    <input type='text'value={inputFields.Address}  name='Address' onChange={handlechange}/>
                                    {errors.Address&&<p  className='error'>{errors.Address}</p>}
                                
                                    <label>Company Name</label><br></br>
                                    <input type='text'value={inputFields.Cname}  name='Cname' onChange={handlechange}/>
                                    {errors.Cname&&<p  className='error'>{errors.Cname}</p>}
                                
                                    <label>state/Province</label><br></br>
                                    <input type='text'value={inputFields.State}  name='State' onChange={handlechange}/>
                                    {errors.State&&<p  className='error'>{errors.State}</p>}
                                    
                                    <label>Phone number</label><br></br>
                                    <input type='text' value={inputFields.Pnumber}  name='Pnumber' onChange={handlechange}/>
                                    {errors.Pnumber&&<p  className='error'>{errors.Pnumber}</p>}
                                   </div>

                                <div className='a'>
                                  
                                   <label>password</label><br></br>
                                   <input type='password' value={inputFields.password}  name='password' onChange={handlechange}></input> 
                                   {errors.password&&<p  className='error'>{errors.password}</p>}
                                  
                                    <label>Country</label><br></br>
                                     
                                     <select className='select-option' value={inputFields.country}  name='country' onChange={handlechange}>
                                        <option>select Country</option>
                                        <option>India</option>
                                        <option>Isreal</option>
                                        <option>Russia</option>
                                        <option>France</option>
                                     </select>
                                     {errors.country&&<p  className='error'>{errors.country}</p>}
                                    <label>Last Name</label><br></br>
                                    <input type='text' value={inputFields.Lname}  name='Lname' onChange={handlechange}/>
                                    {errors.Lname&&<p  className='error'>{errors.Lname}</p>}

                                
                                    <label>Address Line 2</label><br></br>
                                    <input type='text' value={inputFields.Address1}  name='Address1' onChange={handlechange}/>
                                    {errors.Address1&&<p  className='error'>{errors.Address1}</p>}
                                    
                                    <label>City</label><br></br>
                                    <input type='text'value={inputFields.City}  name='City' onChange={handlechange}/>
                                    {errors.City&&<p  className='error'>{errors.City}</p>}
                                
                                    <label>Zipcode</label><br></br>
                                    <input type='text' value={inputFields.Zipcode}  name='Zipcode' onChange={handlechange}/>
                                    {errors.Zipcode&&<p  className='error'>{errors.Zipcode}</p>}
                             
                                </div>
                             
                             
                            </div>
                            <button className='form-btn form-btn2'>Create Account</button>
                         </form>
                        </div> 
                     
                </div>
            </div>
        </div>
        </div>

       </section>
    
    </>
  )
}

export default Resistor
