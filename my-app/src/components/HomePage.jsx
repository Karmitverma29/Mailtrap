import React from "react";
import {Link} from "react-router-dom";

function HomePage(){


    return <div >
<div style={{height:"1200px",width:"100%",fontFamily:"Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",backgroundColor:"888888"}}>
<h1 style={{textAlign:"center",fontSize:"42px",
fontWeight:"700",marginTop:"50px"
}}>Email Sandbox</h1>

<p style={{textAlign:"center",fontWeight:"500",fontSize:"19px",marginTop:"30px"}}>Capture SMTP traffic from staging and dev environments</p>
<p style={{textAlign:"center",fontWeight:"500",fontSize:"19px",marginTop:"20px"}}>Automate test flows and scenarios with flexible API</p>
<p style={{textAlign:"center",fontWeight:"500",fontSize:"19px",marginTop:"20px"}}>Analyze email content for spam score and validate HTML/CSS</p>
<button style={{marginLeft:"45%",marginTop:"25px",height:"44px",width:"150px",borderRadius:"8px",backgroundColor:"#22d172",color:"#ffffff",fontSize:"14px",fontWeight:"600"}} ><Link to="/signup">Sign Up For Free</Link></button>
<div style={{height:"90px",width:"80%",margin:"auto",marginTop:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>
<img style={{height:"25px",width:"86px",marginRight:"60px"}} src="https://mailtrap.io/wp-content/uploads/2021/04/Rails.svg" alt="logo"/>
<img style={{height:"25px",width:"86px",marginRight:"60px"}} src="https://mailtrap.io/wp-content/uploads/2021/04/Python.svg" alt="logo"/>
<img style={{height:"25px",width:"86px",marginRight:"60px"}} src="https://mailtrap.io/wp-content/uploads/2021/04/NET.svg" alt="logo"/>
<img style={{height:"25px",width:"86px",marginRight:"60px"}} src="https://mailtrap.io/wp-content/uploads/2021/04/Symfony.svg" alt="logo"/>
<img style={{height:"25px",width:"86px",marginRight:"60px"}} src="https://mailtrap.io/wp-content/uploads/2021/04/Laravel.svg" alt="logo"/>


</div>
<div style={{height:"600px",width:"80%",marginTop:"40px",margin:"auto"}}>
<img style={{height:"80%",width:"80%",marginLeft:"120px"}}   src={process.env.PUBLIC_URL + '/banner.png'} alt="banner"/>

</div>
</div>

<div style={{height:"700px",width:"100%"}}>
<h1 style={{textAlign:"center",fontSize:"32px",
fontWeight:"700",marginTop:"50px"
}}>Email testing challenges that <br /> Mailtrap Sandbox solves</h1>
<div style={{height:"450px",width:"60%",margin:"auto",display:"grid",gridTemplateColumns:"repeat(2,1fr)",marginTop:"30px"}}>
<div style={{display:"flex"}}>
<div style={{height:"100%",width:"20%"}}><img src="https://mailtrap.io/wp-content/uploads/2021/03/icon4.svg" alt=""/></div>
<div style={{height:"100%",width:"80%"}}>
    <h1 style={{textAlign:"left",fontWeight:"600",fontSize:"18px",marginTop:"15px"}}>Configure your testing environment in 5 minutes</h1>
    <p style={{fontSize:"14px",marginTop:"15px"}}>Each account comes with an individual testing environment. Integrate it with your app in just a few clicks.</p>
</div>

</div>
<div style={{display:"flex"}}>
<div style={{height:"100%",width:"20%"}}><img src="https://mailtrap.io/wp-content/uploads/2021/03/icon__mail.svg" alt=""/></div>
<div style={{height:"100%",width:"80%"}}>
<h1 style={{textAlign:"left",fontWeight:"600",fontSize:"18px",marginTop:"15px"}}>Keep all testing data organized in one place</h1>
    <p style={{fontSize:"14px",marginTop:"15px"}}>Create individual inboxes for different environments or review servers and group them into relevant projects.</p>
</div>
</div>
<div style={{display:"flex"}}>
<div style={{height:"100%",width:"20%"}}><img src="https://mailtrap.io/wp-content/uploads/2021/01/icon_work.svg" alt=""/></div>
<div style={{height:"100%",width:"80%"}}>
<h1 style={{textAlign:"left",fontWeight:"600",fontSize:"18px",marginTop:"15px"}}>Quickly integrate with Sandbox API</h1>
    <p style={{fontSize:"14px",marginTop:"15px"}}>Get started quickly with our well-documented API and configure automated testing with unlimited API calls.</p>
</div>
</div>
<div style={{display:"flex"}}>
<div style={{height:"100%",width:"20%"}}><img src="https://mailtrap.io/wp-content/uploads/2021/03/icon2.svg" alt=""/></div>
<div style={{height:"100%",width:"80%"}}>
<h1 style={{textAlign:"left",fontWeight:"600",fontSize:"18px",marginTop:"15px"}}>Dig into both the content and source of your emails</h1>
    <p style={{fontSize:"14px",marginTop:"15px"}}>View messages, check spam scores, validate headers, analyze the HTML support across email clients, and more.</p>
</div>
</div>

</div>
</div>

<div style={{height:"620px",width:"100%"}}>
<img style={{height:"100%",width:"100%"}} src={process.env.PUBLIC_URL + '/setup.png'} alt="banner" />
</div>

<div style={{height:"1000px",width:"100%"}}>
<h1 style={{textAlign:"center",fontSize:"32px",
fontWeight:"700",marginTop:"50px"
}}>How different teams <br /> use Email Sandbox</h1>
<div style={{height:"377px",width:"60%",marginTop:"30px",margin:"auto"}}>
<img style={{height:"100%",width:"100%"}} src="https://mailtrap.io/wp-content/uploads/2021/03/img_team.svg" alt="content"/>

</div>
<div style={{height:"300px",width:"60%",marginTop:"40px",margin:"auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
<div >
<h1 style={{textAlign:"left",fontSize:"18px",fontWeight:"600"}}>Developers</h1>
<br />
<ul>
    <li>Experiment with the email sending functionality</li>
    <br />
<li>Cover code with tests to run automated checks via Sandbox API</li>
<br />
<li>Verify different email aspects, debug sending script and HTML template</li>

</ul>
</div>
<div >
<h1 style={{textAlign:"left",fontSize:"18px",fontWeight:"600"}}>QAs</h1>
<br />
<ul>
<li>Run safe email tests in staging and/or testing environment</li>
<br />
<li>Integrate Sandbox API with automated testing tools</li>
<br />
<li>Compare revised emails with their previous versions</li>
</ul>

</div>
<div >
<h1 style={{textAlign:"left",fontSize:"18px",fontWeight:"600"}}>Marketers and managers</h1>
<br />
<ul>
<li>Smoothly collaborate with development and QA teams</li>
<br />
<li>View test emails in shared inboxes or forward to recipients</li>
<br />
<li>Send emails to Sandbox inboxes from CRMs and common sending tools</li>
</ul>

</div>

</div>
<button style={{marginLeft:"45%",marginTop:"25px",height:"44px",width:"150px",borderRadius:"8px",backgroundColor:"#22d172",color:"#ffffff",fontSize:"14px",fontWeight:"600"}} ><Link to="/signup">Sign Up For Free</Link></button>

</div>

<div style={{height:"500px",width:"100%"}}>
<h1 style={{textAlign:"center",fontSize:"32px",
fontWeight:"700",marginTop:"50px"
}}>From our #BestClientEver</h1>

<div style={{height:"60%",width:"60%",margin:"auto",marginTop:"40px"}} id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"100%",width:"100%"}} class="d-block w-100" src={process.env.PUBLIC_URL + '/slide1.png'} alt="banner"/>
    </div>
    <div class="carousel-item">
      <img style={{height:"100%",width:"100%"}} class="d-block w-100" src={process.env.PUBLIC_URL + '/slide2.png'} alt="banner"/>
    </div>
    <div class="carousel-item">
      <img style={{height:"100%",width:"100%"}} class="d-block w-100" src={process.env.PUBLIC_URL + '/slide3.png'} alt="banner"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>

<div style={{height:"400px",width:"100%"}}>
<h1 style={{textAlign:"center",fontSize:"32px",
fontWeight:"700",marginTop:"50px"
}}>Trusted by 150,000+ monthly active <br /> users</h1>
<div style={{height:"90px",width:"80%",margin:"auto",marginTop:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>
<img style={{height:"30px",width:"90px",marginRight:"60px"}} src="https://mailtrap.io/wp-content/uploads/2021/04/Adobe.svg" alt="logo"/>
<img style={{height:"30px",width:"90px",marginRight:"60px"}} src="https://mailtrap.io/wp-content/uploads/2021/04/Atlassian.svg" alt="logo"/>
<img style={{height:"30px",width:"90px",marginRight:"60px"}} src="https://mailtrap.io/wp-content/uploads/2021/04/Calendly.svg" alt="logo"/>
<img style={{height:"30px",width:"90px",marginRight:"60px"}} src="https://mailtrap.io/wp-content/uploads/2021/04/Yelp.svg" alt="logo"/>
<img style={{height:"30px",width:"90px",marginRight:"60px"}} src="https://mailtrap.io/wp-content/uploads/2021/04/UserTesting.svg" alt="logo"/>


</div>
</div>

<div style={{height:"800px",width:"100%"}}>
<img style={{height:"100%",width:"100%"}} src={process.env.PUBLIC_URL + '/faq.png'} alt="banner"/>
</div>
<div style={{height:"368px",width:"100%",fontFamily:"Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
display:"flex",backgroundColor:"#1a2e44"}}>

<div style={{height:"100%",width:"60%",backgroundColor:"#1a2e44"}}>
    <h1 style={{fontSize:"24px",fontWeight:"700",textAlign:"center",backgroundColor:"#1a2e44",color:"#ffffff",marginTop:"100px"}}>Create Your Free Account</h1>
    <h1 style={{fontSize:"60px",fontWeight:"600",textAlign:"center",backgroundColor:"#1a2e44",color:"#ffffff"}}>In 3 Clicks</h1>
    <button style={{marginLeft:"35%",marginTop:"25px",height:"44px",width:"150px",borderRadius:"8px",backgroundColor:"#22d172",color:"#ffffff",fontSize:"14px",fontWeight:"600"}} ><Link to="/signup">Sign Up For Free</Link></button>

</div>
<div style={{height:"100%",width:"40%",backgroundColor:"#1a2e44"}}>
    <img style={{height:"100%",width:"100%"}} src={process.env.PUBLIC_URL + '/box.png'} alt="banner"/>
</div>
</div>

    </div>
}
export default HomePage;