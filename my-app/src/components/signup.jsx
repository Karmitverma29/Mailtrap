import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
function Signup() {
const[login,setLogin]=useState({
  email:"",
  password:"",
  
})

// const[store,setStore]=useState({});

  let handlechange=(e)=>{

    setLogin({...login,[e.target.name]:e.target.value});
  }
console.log( typeof login, login)

  let handlesubmit=(e)=>{
    e.preventDefault();


  }
  useEffect(()=>{
    localStorage.setItem("Data",JSON.stringify(login));

  },[login])
 
  return  <div style={{height:"1200px",display:"flex",alignItems:"center"}}>

    <div style={{height:"900px",margin:"auto",display:"flex",width:"60%"}}>
    <div style={{width:"50%"}}>
<h1 style={{textAlign:"center",fontSize:"32px",fontWeight:"600",}}>Create Free Account</h1>
<button style={{height:"52px",width:"380px",backgroundColor:"#566583",borderRadius:"8px",marginTop:"20px",color:"#ffffff",marginLeft:"25px"}}>Use Google account</button>
<button style={{height:"52px",width:"380px",backgroundColor:"#566583",borderRadius:"8px",marginTop:"20px",color:"#ffffff",marginLeft:"25px"}}>Use Github account</button>
<button style={{height:"52px",width:"380px",backgroundColor:"#566583",borderRadius:"8px",marginTop:"20px",color:"#ffffff",marginLeft:"25px"}}>Use Office 365 account</button>
<p style={{textAlign:"center",marginRight:"30px",marginTop:"30px"}}>OR</p>
<form onSubmit={handlesubmit}>
  <label style={{width:"380px",textAlign:"left",marginLeft:"25px"}}>Email</label>
  <input  name="email" value={login.email} onChange={handlechange}   style={{height:"52px",border:"1px solid black",width:"380px",borderRadius:"8px",marginTop:"20px",color:"#ffffff",marginLeft:"25px"}} type="email" placeholder=""></input>
  <label style={{width:"380px",textAlign:"left",marginLeft:"25px"}}>Password</label>
  <input name="password" value={login.password} onChange={handlechange}  style={{height:"52px",border:"1px solid black",width:"380px",borderRadius:"8px",marginTop:"20px",color:"#ffffff",marginLeft:"25px"}} type="password" placeholder=""></input>

  <p style={{textAlign:"center",marginTop:"30px"}}>You will receive the confirmation email after submitting this <br /> form.</p>
  <button type="submit" style={{marginLeft:"30px",marginTop:"25px",height:"52px",width:"380px",borderRadius:"8px",backgroundColor:"#22d172",color:"#ffffff",fontSize:"14px",fontWeight:"600"}} ><Link to="/success">Sign Up</Link></button>
<p style={{textAlign:"center",marginTop:"20px"}}>By creating a Mailtrap account, you agree to our <br />
<span style={{color:"#4c83ee"}}>Terms of Service</span>  and <span style={{color:"#4c83ee"}}>Privacy Policy</span>. <br />

We'll occasionally send you account related emails.</p>
</form>
</div>
<div style={{width:"50%"}}>
<img style={{marginTop:"30px",marginLeft:"40px"}} src="https://assets.mailtrap.io/packs/assets/landing/signup-29d04f096f43afe622ed.svg" alt="img"/>
<div style={{display:"flex",marginLeft:"100px",marginTop:"20px"}}>
  <img style={{marginRight:"10px"}} src="https://assets.mailtrap.io/packs/assets/landing/no-cc-f64815040928cb2cd45e.svg" alt=""/>
<h1 style={{fontSize:"15px",fontWeight:"600"}}>No credit card needed</h1>
</div>
<div style={{display:"flex",marginLeft:"100px",marginTop:"20px"}}>
<img style={{marginRight:"10px"}} src="https://assets.mailtrap.io/packs/assets/landing/no-contract-6c7fcc24afc64e708f1d.svg" alt=""/>

<h1 style={{fontSize:"15px",fontWeight:"600"}}>No contract needed</h1>

</div>

</div>
    </div>
    
    
     
      
    
    </div>

}

export default Signup;