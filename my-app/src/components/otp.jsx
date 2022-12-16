import React from "react";
import { PinInput, PinInputField,HStack ,Button,Link} from '@chakra-ui/react'
function Otp(){
    return <div style={{height:"500px",width:"100%"}}>
        <h1 style={{textAlign:"center",fontSize:"42px",fontWeight:"600",marginTop:"60px"}}>Enter OTP</h1>
        <div  style={{height:"200px",width:"400px",padding:"12px",borderRadius:"8px",boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",margin:"auto",marginTop:"30px"}}>

        <HStack style={{marginLeft:"28%"}}>
  <PinInput  otp>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
<Link href="/furtherCheckout">
<Button
bg={'#4c83ee'}
color={'white'}
_hover={{
 bg: 'blue.500',
}} style={{marginLeft:"148px",marginTop:"40px"}}>
    
                  Proceed
                </Button>
                </Link>



        </div>

    </div>
}

export default Otp;