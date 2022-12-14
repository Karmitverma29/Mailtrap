import React from "react";
function Footer(){
    return <div style={{height:"400px",width:"100%",display:"flex"}}>
<div style={{height:"100%",width:"30%"}} >
    <img style={{marginLeft:"180px",marginTop:"45px"}} src={process.env.PUBLIC_URL + '/footer.png'} alt="footer"/>
</div>
<div style={{height:"100%",width:"70%",display:"flex"}}>
<div style={{height:"100%",width:"60%"}}>
    <img style={{height:"100%",width:"100%"}} src={process.env.PUBLIC_URL + '/footData.png'} alt="tabs"/>
</div>
<div style={{height:"100%",width:"40%"}}>
<div style={{height:"50%"}}>
    <img src={process.env.PUBLIC_URL + '/mail.png'} alt="tabs"/>
</div>
<div style={{height:"50%"}}>

</div>
</div>
</div>


    </div>
}
export default Footer;