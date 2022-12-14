import React from "react";

function LoginSuccess(){

let data=JSON.parse(localStorage.getItem("Data"));
console.log(data)

    return <div style={{height:"330px",width:"60%",margin:"auto",marginTop:"12%",display:"flex"}}>

<div style={{height:"100%",width:"50%"}}>
<h1 style={{fontSize:"32px",fontWeight:"600"}}>Thank You For <br />
Signing Up!</h1>

<p>Check the confirmation email at  <br /> <span style={{fontWeight:"700"}}>{data.email}</span>   </p>
<p>Note: If you do not receive the email in few minutes:</p>
<ul>
    <li style={{marginLeft:"20px"}}>check spam folder</li>
    <li style={{marginLeft:"20px"}}>verify if you typed your email correctly</li>
    <li style={{marginLeft:"20px"}}>if you can't resolve the issue, please contact <span style={{color:"#4c83ee"}}>support@mailtrap.io.</span> </li>

</ul>
</div>

<div style={{height:"100%",width:"50%"}}>
<img src="https://assets.mailtrap.io/packs/assets/landing/signup-success-1edd7e1c8ae475e9df05.svg" alt="pack"/>
</div>




    </div>
    
    
    
    
}
export default LoginSuccess;