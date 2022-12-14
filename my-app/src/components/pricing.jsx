import Price from "../components/price";
import Tabes from "./tabs";
function Pricing(){
    return <div>

        <div style={{height:"180px",width:"100%"}}>
     <h1 style={{fontSize:"32px",fontWeight:"700",textAlign:"center"}}>Power up your email capabilities</h1>
     <p style={{color:"#a3abb4",fontSize:"16px",fontWeight:"500",textAlign:"center",marginTop:"20px"}}>Trusted by</p>
     <div style={{height:"60px",width:"60%",margin:"auto",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <img  src="https://mailtrap.io/wp-content/uploads/2022/11/Yelp-2.svg" alt="logo"/>
        <img src="https://mailtrap.io/wp-content/uploads/2022/11/UserTesting-1.svg" alt="logo"/>
        <img src="https://mailtrap.io/wp-content/uploads/2022/11/PayPal-2.svg" alt="logo"/>
        <img src="https://mailtrap.io/wp-content/uploads/2022/11/Calendly-2.svg" alt="logo"/>
        <img src="https://mailtrap.io/wp-content/uploads/2022/11/Atlassian-2.svg" alt="logo"/>
        <img src="https://mailtrap.io/wp-content/uploads/2022/11/Adobe-2.svg" alt="logo"/>

     </div>
        </div>
        <div style={{height:"30px",width:"100%", display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src="https://mailtrap.io/wp-content/uploads/2022/11/11111.svg" alt="mail"/>
        <h1 style={{fontSize:"16px",fontWeight:"600"}}>Email Sandbox</h1>

        </div>
        <div>
            <Tabes/>
        </div>
    </div>
}

export default Pricing;