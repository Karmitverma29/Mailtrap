import {
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
  } from '@chakra-ui/react';
  import {Link } from "react-router-dom";
function Price2(){
    return <div style={{height:"1200px",width:"70%",margin:"auto",borderRadius:"8px"}}>

<div style={{height:"250px",width:"100%",display:"grid",gridTemplateColumns:"repeat(7,1fr)",borderRadius:"8px"}}>
<div style={{backgroundColor:"#ffffff",borderRadius:"8px"}}></div>
<div style={{backgroundColor:"#ffffff"}}>
    <h1 style={{fontSize:"18px",fontWeight:"700",textAlign:"center",backgroundColor:"#ffffff"}}>Free</h1>
    <p style={{fontSize:"12px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>Evaluate Mailtrap or use <br /> it on a personal project</p>
    <h1 style={{fontSize:"36px",fontWeight:"600",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>$0</h1>
    <p style={{color:"#717d89",fontSize:"14px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>Forever</p>
    <button style={{height:"40px",width:"132px",backgroundColor:"#1a2e44",borderRadius:"8px",color:"#ffffff",marginTop:"10px"}}><Link to="/checkout">Try Free</Link></button>
</div>
<div style={{backgroundColor:"#ffffff"}}>
<h1 style={{fontSize:"18px",fontWeight:"700",textAlign:"center",backgroundColor:"#ffffff"}}>Individual 10K</h1>
    <p style={{fontSize:"12px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>For individual usage with <br /> higher testing limits</p>
    <h1 style={{fontSize:"36px",fontWeight:"600",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>$10</h1>
    <p style={{color:"#717d89",fontSize:"14px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>Per month</p>
    <button style={{height:"40px",width:"132px",backgroundColor:"#22d172",borderRadius:"8px",color:"#ffffff",marginTop:"10px"}}><Link to="/checkout">Buy Now</Link></button>
</div>

<div style={{backgroundColor:"#ffffff"}}>
<h1 style={{fontSize:"18px",fontWeight:"700",textAlign:"center",backgroundColor:"#ffffff"}}>Business 100K</h1>
    <p style={{fontSize:"12px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>For companies with <br /> multiple teams and  projects</p>
    <h1 style={{fontSize:"36px",fontWeight:"600",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>$85</h1>
    <p style={{color:"#717d89",fontSize:"14px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>Per month</p>
    <button style={{height:"40px",width:"132px",backgroundColor:"#22d172",borderRadius:"8px",color:"#ffffff",marginTop:"10px"}}><Link to="/checkout">Buy Now</Link></button>
</div>

<div style={{backgroundColor:"#ffffff",borderRadius:"8px"}}>
<h1 style={{fontSize:"18px",fontWeight:"700",textAlign:"center",backgroundColor:"#ffffff"}}>Enterprise 1,5M</h1>
    <p style={{fontSize:"12px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>For clients who want <br /> virtually no limits and  SSO</p>
    <h1 style={{fontSize:"36px",fontWeight:"600",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>$750</h1>
    <p style={{color:"#717d89",fontSize:"14px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>Per month</p>
    <button style={{height:"40px",width:"132px",backgroundColor:"#22d172",borderRadius:"8px",color:"#ffffff",marginTop:"10px"}}><Link to="/checkout">Buy Now</Link></button>
</div>
<div style={{backgroundColor:"#ffffff",borderRadius:"8px"}}>
<h1 style={{fontSize:"18px",fontWeight:"700",textAlign:"center",backgroundColor:"#ffffff"}}>Custom</h1>
    <p style={{fontSize:"12px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>Send a lot? Talk to our deliverability experts</p>
    <h1 style={{fontSize:"20px",fontWeight:"600",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>By Request</h1>
    <button style={{height:"40px",width:"132px",backgroundColor:"#22d172",borderRadius:"8px",color:"#ffffff",marginTop:"60px"}}><Link to="/checkout">Buy Now</Link></button>
</div>

</div>

<div>
<TableContainer>
  <Table  variant='striped' colorScheme='green'>
   
    <Tbody>
      <Tr>
        <Td>API and <br /> SMTP relay</Td>
        <Td>✅</Td>
        <Td >✅</Td>
        <Td>✅</Td>
        <Td>✅</Td>
        <Td >✅</Td>

      </Tr>
      <Tr>
      <Td>Email logs</Td>
        <Td>7</Td>
        <Td >15</Td>
        <Td>30</Td>
        <Td>60</Td>
        <Td >60</Td>
      </Tr>
      <Tr>
      <Td>Team members</Td>
        <Td>-</Td>
        <Td >-</Td>
        <Td>1000</Td>
        <Td>1000</Td>
        <Td >1000+</Td>
      </Tr>
      <Tr>
      <Td>Email Tracking <br /> and Analytics</Td>
        <Td>✅</Td>
        <Td >✅</Td>
        <Td>✅</Td>
        <Td>✅</Td>
        <Td >✅</Td>
      </Tr>
      <Tr>
      <Td>Suppression <br /> Management</Td>
        <Td>✅</Td>
        <Td >✅</Td>
        <Td>✅</Td>
        <Td>✅</Td>
        <Td >✅</Td>
      </Tr>
      <Tr>
      <Td>Deliverability Alerts</Td>
        <Td>✅</Td>
        <Td >✅</Td>
        <Td>✅</Td>
        <Td>✅</Td>
        <Td >✅</Td>
      </Tr>
      <Tr>
        <Td>Web Hooks</Td>
        <Td>✅</Td>
        <Td>✅</Td>
        <Td>✅</Td>
        <Td>✅</Td>
        <Td>✅</Td>

      </Tr>
    

      <Tr>
        <Td>Dedicated IP</Td>
        <Td>-</Td>
        <Td>-</Td>
        <Td>1</Td>
        <Td>1</Td>
        <Td>Multiple</Td>

      </Tr>

      <Tr>
        <Td>Additional Emails, <br />per 1,000</Td>
        <Td>100</Td>
        <Td>500</Td>
        <Td>2K</Td>
        <Td>5K</Td>
        <Td>10K</Td>

      </Tr>

      <Tr>
        <Td>Manual <br /> forwarding <br /> recepients</Td>
        <Td>-</Td>
        <Td>$1</Td>
        <Td>$0.88</Td>
        <Td>$0.55</Td>
        <Td>$0.55</Td>


      </Tr>


    </Tbody>
    
  </Table>
  <p style={{textAlign:"center"}}> <span style={{color:"#1bbd65"}}>Save 20%</span> with annual subscription! Contact us via <span style={{color:"#4c83ee"}}>support@mailtrap.io</span> </p>
</TableContainer>
</div>



    </div>
}
export default Price2;