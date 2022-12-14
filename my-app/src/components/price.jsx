import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react';
  import {Link } from "react-router-dom";
function Price(){
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
<h1 style={{fontSize:"18px",fontWeight:"700",textAlign:"center",backgroundColor:"#ffffff"}}>Individual</h1>
    <p style={{fontSize:"12px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>For individual usage with <br /> higher testing limits</p>
    <h1 style={{fontSize:"36px",fontWeight:"600",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>$14</h1>
    <p style={{color:"#717d89",fontSize:"14px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>Per month</p>
    <button style={{height:"40px",width:"132px",backgroundColor:"#22d172",borderRadius:"8px",color:"#ffffff",marginTop:"10px"}}><Link to="/checkout">Buy Now</Link></button>
</div>
<div style={{backgroundColor:"#ffffff"}}>
<h1 style={{fontSize:"18px",fontWeight:"700",textAlign:"center",backgroundColor:"#ffffff"}}>Team</h1>
    <p style={{fontSize:"12px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>For teams to collaborate <br /> and manage users</p>
    <h1 style={{fontSize:"36px",fontWeight:"600",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>$34</h1>
    <p style={{color:"#717d89",fontSize:"14px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>Per month</p>
    <button style={{height:"40px",width:"132px",backgroundColor:"#22d172",borderRadius:"8px",color:"#ffffff",marginTop:"10px"}}><Link to="/checkout">Buy Now</Link></button>
</div>
<div style={{backgroundColor:"#ffffff"}}>
<h1 style={{fontSize:"18px",fontWeight:"700",textAlign:"center",backgroundColor:"#ffffff"}}>Business</h1>
    <p style={{fontSize:"12px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>For companies with <br /> multiple teams and  projects</p>
    <h1 style={{fontSize:"36px",fontWeight:"600",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>$64</h1>
    <p style={{color:"#717d89",fontSize:"14px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>Per month</p>
    <button style={{height:"40px",width:"132px",backgroundColor:"#22d172",borderRadius:"8px",color:"#ffffff",marginTop:"10px"}}><Link to="/checkout">Buy Now</Link></button>
</div>
<div style={{backgroundColor:"#ffffff"}}>
<h1 style={{fontSize:"18px",fontWeight:"700",textAlign:"center",backgroundColor:"#ffffff"}}>Premium</h1>
    <p style={{fontSize:"12px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>For organizations that  need large-scale email testing</p>
    <h1 style={{fontSize:"36px",fontWeight:"600",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>$129</h1>
    <p style={{color:"#717d89",fontSize:"14px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>Per month</p>
    <button style={{height:"40px",width:"132px",backgroundColor:"#22d172",borderRadius:"8px",color:"#ffffff",marginTop:"10px"}}><Link to="/checkout">Buy Now</Link></button>
</div>
<div style={{backgroundColor:"#ffffff",borderRadius:"8px"}}>
<h1 style={{fontSize:"18px",fontWeight:"700",textAlign:"center",backgroundColor:"#ffffff"}}>Enterprise</h1>
    <p style={{fontSize:"12px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>For clients who want <br /> virtually no limits and  SSO</p>
    <h1 style={{fontSize:"36px",fontWeight:"600",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>$399</h1>
    <p style={{color:"#717d89",fontSize:"14px",textAlign:"center",marginTop:"10px",backgroundColor:"#ffffff"}}>Per month</p>
    <button style={{height:"40px",width:"132px",backgroundColor:"#22d172",borderRadius:"8px",color:"#ffffff",marginTop:"10px"}}><Link to="/checkout">Buy Now</Link></button>
</div>

</div>

<div>
<TableContainer>
  <Table variant='striped' colorScheme='green'>
   
    <Tbody>
      <Tr>
        <Td>Test emails <br /> per month</Td>
        <Td>100</Td>
        <Td >5,000</Td>
        <Td>15,000</Td>
        <Td>50,000</Td>
        <Td >100,000</Td>
        <Td >10,000,000</Td>

      </Tr>
      <Tr>
      <Td>Sending limits <br /> per 10s</Td>
        <Td>5</Td>
        <Td >10</Td>
        <Td>25</Td>
        <Td>50</Td>
        <Td >100</Td>
        <Td >150</Td>
      </Tr>
      <Tr>
      <Td>Inboxes </Td>
        <Td>1</Td>
        <Td >5</Td>
        <Td>15</Td>
        <Td>40</Td>
        <Td >80</Td>
        <Td >300</Td>
      </Tr>
      <Tr>
      <Td>Team members</Td>
        <Td>-</Td>
        <Td >-</Td>
        <Td>20</Td>
        <Td>40</Td>
        <Td >80</Td>
        <Td >999</Td>
      </Tr>
      <Tr>
      <Td>Max emails <br /> per inbox</Td>
        <Td>50</Td>
        <Td >200</Td>
        <Td>400</Td>
        <Td>600</Td>
        <Td >800</Td>
        <Td >1000</Td>
      </Tr>
      <Tr>
      <Td>API</Td>
        <Td>✅</Td>
        <Td >✅</Td>
        <Td>✅</Td>
        <Td>✅</Td>
        <Td >✅</Td>
        <Td >✅</Td>
      </Tr>
      <Tr>
        <Td>Inbox email <br /> address</Td>
        <Td>-</Td>
        <Td>-</Td>
        <Td>-</Td>
        <Td>✅</Td>
        <Td>✅</Td>
        <Td>✅</Td>

      </Tr>
      <Tr>
        <Td>Email size</Td>
        <Td>5MB</Td>
        <Td>7MB</Td>
        <Td>10MB</Td>
        <Td>15MB</Td>
        <Td>20MB</Td>
        <Td>25MB</Td>

      </Tr>

      <Tr>
        <Td>Tech info <br /> and Bcc</Td>
        <Td>-</Td>
        <Td>-</Td>
        <Td>✅</Td>
        <Td>✅</Td>
        <Td>✅</Td>
        <Td>✅</Td>

      </Tr>

      <Tr>
        <Td>Forwarded emails <br /> per month</Td>
        <Td>-</Td>
        <Td>100</Td>
        <Td>500</Td>
        <Td>2K</Td>
        <Td>5K</Td>
        <Td>10K</Td>

      </Tr>

      <Tr>
        <Td>Manual forwarding <br /> recepients</Td>
        <Td>-</Td>
        <Td>10</Td>
        <Td>25</Td>
        <Td>100</Td>
        <Td>300</Td>
        <Td>300</Td>


      </Tr>
      <Tr>
       <Td>Projects</Td>
       <Td>1</Td>
       <Td>5</Td>
       <Td>15</Td>
       <Td>40</Td>
       <Td>80</Td>
       <Td>300</Td>
       

      </Tr>

      <Tr>
       <Td>Priority Support </Td>
       
       <Td>-</Td>
       <Td>✅</Td>
       <Td>✅</Td>
       <Td>✅</Td>
       <Td>✅</Td>
       <Td>✅</Td>
      </Tr>
   

    </Tbody>
    
  </Table>
  <p style={{textAlign:"center"}}> <span style={{color:"#1bbd65"}}>Save 20%</span> with annual subscription! Contact us via <span style={{color:"#4c83ee"}}>support@mailtrap.io</span> </p>
</TableContainer>
</div>



    </div>
}
export default Price;