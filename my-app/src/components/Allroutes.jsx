import React from "react";
import {Routes,Route} from "react-router-dom";
import Automation from "../components/auto";
import Login from "../components/login";
import Signup from "../components/signup";
import Email from "../components/email";
import WithSubnavigation from "../navigationBar/nav";
import HomePage from "../components/HomePage";
import Footer from "../navigationBar/footer";
import LoginSuccess from "../components/loginSuccess";
import Pricing from "./pricing";
import Checkout from "./checkout";
import Otp from "./otp";
import FurtherCheckout from "./furthercheckout";
import Loading from "./loading";
function Allroutes(){

    return <div>
        <WithSubnavigation/>
     
        <Routes>
    <Route path="/auto" element={<Automation/>}/>
    <Route path="/email" element={<Email/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/success" element={<LoginSuccess/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/otp" element={<Otp/>}/>
    <Route path="/furtherCheckout" element={<FurtherCheckout/>}/>
    <Route path="/loading" element={<Loading/>}/>
</Routes>
        <Footer/>


 



    </div>
}
export default Allroutes;