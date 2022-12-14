import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let data=JSON.parse(localStorage.getItem("Data"));

  const[loginn,setLoginn]=useState({
    email:"",
    password:"",
    
  })
  
  let navigate=useNavigate();
    let handlechange=(e)=>{
  
      setLoginn({...loginn,[e.target.name]:e.target.value});
    }
    let handlesubmit=(e)=>{
      e.preventDefault();
      if(loginn.email!==data.email||loginn.password!==data.password){

        alert("Details Not Matching");

      }
      else if(loginn.email===data.email&&loginn.password===data.password){
alert("Login Successful!");
navigate("/home")


      }
    }
  return <div style={{height:"1200px",display:"flex",alignItems:"center"}}>
  <div style={{height:"900px",margin:"auto",display:"flex",width:"60%"}}>
  <div style={{width:"50%"}}>
<h1 style={{textAlign:"center",fontSize:"32px",fontWeight:"600",}}>Log In</h1>
<button style={{height:"52px",width:"380px",backgroundColor:"#566583",borderRadius:"8px",marginTop:"20px",color:"#ffffff",marginLeft:"25px"}}>Use Google account</button>
<button style={{height:"52px",width:"380px",backgroundColor:"#566583",borderRadius:"8px",marginTop:"20px",color:"#ffffff",marginLeft:"25px"}}>Use Github account</button>
<button style={{height:"52px",width:"380px",backgroundColor:"#566583",borderRadius:"8px",marginTop:"20px",color:"#ffffff",marginLeft:"25px"}}>Use Office 365 account</button>
<p style={{textAlign:"center",marginRight:"30px",marginTop:"30px"}}>OR</p>
<form onSubmit={handlesubmit}>
<label style={{width:"380px",textAlign:"left",marginLeft:"25px"}}>Email</label>
<input  name="email" value={loginn.email} onChange={handlechange}   style={{height:"52px",border:"1px solid black",width:"380px",borderRadius:"8px",marginTop:"20px",color:"#ffffff",marginLeft:"25px"}} type="email" placeholder=""></input>
<label style={{width:"380px",textAlign:"left",marginLeft:"25px"}}>Password</label>
<input name="password" value={loginn.password} onChange={handlechange}  style={{height:"52px",border:"1px solid black",width:"380px",borderRadius:"8px",marginTop:"20px",color:"#ffffff",marginLeft:"25px"}} type="password" placeholder=""></input>

<button type="submit" style={{marginLeft:"30px",marginTop:"25px",height:"52px",width:"380px",borderRadius:"8px",backgroundColor:"#22d172",color:"#ffffff",fontSize:"14px",fontWeight:"600"}} >Log in</button>
<p style={{textAlign:"center",marginTop:"20px"}}>Haven't received the confirmation email yet? <br />
<span style={{color:"#4c83ee"}}>Resend the email</span> </p>
</form>
</div>
<div style={{width:"50%"}}>
<img style={{marginTop:"30px",marginLeft:"40px"}} src="https://assets.mailtrap.io/packs/assets/landing/login-fb2fcb15feb36d8e9356.svg" alt="img"/>
<p style={{marginLeft:"40px",fontSize:"15px",fontWeight:"600"}}>Mailtrap displays your email styles without any <br /> changes, so you can view email content as it is.</p>

</div>
  </div>
  
  </div>

}

export default Login;