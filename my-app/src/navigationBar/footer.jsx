import React from "react";
import {
  
    Link,
    
  } from '@chakra-ui/react';
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
<div style={{height:"50%",display:"flex"}}>
<Link href="https://www.facebook.com/Mailtrap"><img style={{height:"30px",width:"30px",marginRight:"20px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAWlBMVEX///8AAACtra0lJSXNzc2SkpKamprV1dUHBwexsbH4+PjFxcUQEBDw8PCIiIiXl5dkZGTp6elra2s6OjpLS0ve3t4uLi4WFhYbGxu3t7dRUVGgoKA0NDR6enofZRe/AAABaUlEQVRoge3bj26CMBAG8KIIQgVEZeqY7/+aS4zLtsDVO3tXku37HoBfgEJ7/eOcRnpftYfjepfds/3OaVC5Pp06b98e7Ex2taXdF0dSvqe0s5v2HLazLDfDV89oQ70/MXAr3V84uJF+ZdlGOhc30UsubqEPbNxAr9+X1Ds+rq8P9G89gX4Q4Oo6v71b6KJb19ZrEa6tczo2O32/pN7IcGXdC3XdkVUr1BtVXfjaK1W8CQ9h9+PVlz+ie+euD9mtMjZJqGcfjW3nchr/MMdDH9xqUd2wZvpKReIX6ybnQn3M2h6HDh06dOh/XKf7OH09MJLhpYjAhQXjXCJKGVmlPpuIkWb0g4969NChQ4cOHTp06NC19OC0KC8xk3iCNUciUdsuxs3vdPQE+bnbTFIo7/lIWUlN859rWOjQoUOHDh06dOjQoUOHDh06dOjQoUOHDh16ep0+E5hCp3fv3xLozs8fnNjeXll++gRPBBrcxSrHdQAAAABJRU5ErkJggg==" alt="facebook"/></Link>
<Link href="https://twitter.com/mailtrap"><img  style={{height:"30px",width:"30px",marginRight:"20px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAaVBMVEX///8AAAClpaWNjY37+/vi4uJ1dXX09PTf39/FxcUjIyO+vr74+Pjv7+/Y2NiWlpafn5/o6Og4ODiHh4fQ0NCysrJZWVlKSkpeXl5ubm5SUlISEhJ8fHwLCwszMzM/Pz8bGxtmZmYrKysUB5wkAAAECUlEQVRoge2a25qqMAxGBUFElAJSlIMIvv9DbhlFOSTQtMVvX7BuRgX6T9M2TUI3m5WVlZWV/5jQ3u/t0Pq5LN8ZH6Kt+zNhy01yo8/h7CM3n7RKexcDoobU43qrUXl/BZUbzsfBve7zXrv7A2YcMUxUubF8t22LN/bZdR8ODRUrpFPST3h7Y1y8fgi7T7OnbWSVT/BId2k65sTbvPP1w/FgSIsLSBtGds4O32+9xe+O/x1RrERAuk9/3e8AWwhSkKUHKu3PdLN7ZOldv4EQuzCLQ5ZOP4++/vDvpStNe4eLTPY65Hf2+hR0Ll4cgrRPlW4G1drzpDKidxPn7uVoL64951QG5MHR9orLrfnYOrv+XM2F9z6b2OtDHbUfvbaN4agxQW1G1P4SfNoYzZiL0P5q3WWlO50D/APHJT+QZ1pL17ucgeupjWq2cOAxEXpOJIDuqMy5eG8rJ130GnHhm+4zE564wt4M3HmI3ZfEU9qZjLQ5bAW/NZvou8Q0v407A022lrs3DPYUtAGHjQz4m5LBbjaafAqiAlqxDjMP1RzwNnTtaNyIiHfM05E83eYZpB1WIo9etnF37OmRWgKOHeheIB47031nmVMzFKYGtR2SAfP7tWCc7luQkCwmNyQBFggLW12BANGWdM8kRg71g0hyo4Y3FjWCl6+rl9YGtqbcqAq38Rz0VUPiBsQjZXOhTJi7lwwHBKmAreRbsHjcltQugUlGzyXlgBKuXyztBiju/4lPM4ZJf7vIfkIOhiC/GfA7GHRLZxgkUkhaMtylguRZ08GiJrAsq15eOsNyrB+MOF5Bk8/jRcHLxceld+8SS2+ehMOqv2Ymi5ZoNqqH6fKVPZcZqQCmQ13xBcccDVFbTuQapTAClSu+UOCC+PJB15fZ0yaLJ1+c4KFd+iIm3eAz6ZIhzHyJ1mGm94SbLNW73MCcf8BSa0ykMi1bpZwB3T17Ri8X0Rab5It0XGhtbzbWEiMezuv+sUCaIPoWQrowjTO3gXXRHS4LetM/NM912mtOh14nxRHxaF1O+sxezb91GXDUFkIAhaVZuJ6gVe4QRaij68SXyl/2yuqlwqEmx6RXyDs8FA8OOS5Ls1IqfjyQpziAFcho52onhV6c5OrLFFeK4ckF7Bp6bePnsyYhnFtAkM0T7qLRAkoou5XXqqfy/EI2RB8dlqNxUvAqIqcVUEKzlhY2SukJbvm8UEqCSVGKH5h/BIwViWq0VBIdCteX9THyvnVietRrKX8SbtULHZm0/5Z2I28imbjsg2XKW/6qvmd5UvtGtdURIzSmJ6ahVeqqOdAuR19cPko95f1qiM/T2VeThySIKQcbKdheUGNHPxLm+fosjRH6ntmDx9qtvLKysrKig39C6jyX0TuymgAAAABJRU5ErkJggg==" alt="twitter"/></Link>
<Link href="https://www.linkedin.com/company/mailtrap/"><img  style={{height:"30px",width:"30px",marginRight:"20px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAYFBMVEX///8EAgQAAAB1dXXz8/MzMjMdHB3FxsXg3+CMjIz7+/v4+Pjj4+POzs7W1tZra2uCg4JVVVVKSko9Pj18fHxgYGDo6ejAwMCvr6+2trYlJSUUFBSWlpagoKBlZmUZGBnv1LoyAAADLklEQVRoge3b2ZKqMBAAUJIAouyL7Oj//+UgoCjQzZ1bnWAx9JNVQ+a0CYZsaNoYadYkIqkLz9Y2iCys+BBl4qnWvbB1WR+PFISjlM9f+DOF+0khLyZ8l0GujA9mutIEivm37xNwlfCpuci3CcS6Cl8AfJtArYC3lmu/85mCCjiDfJtAId+PMd+XzqcV5jPpvgs3/yMB6TdAgfGMS38QrfjSu6Av9y3ZPnr/cS59KIT//mLZ/Er/E8j3G9hX8gROS/j5o6D6Na2GfM4zFb4eQeOPmwpe0xxg/GWkavzlPoBX0vueMYFZJ9BOglTOQLzoowraCZCvqvL7sBv+moC1H2Ild/5H6Hk4TD+rROXc6z28U565aiv+iCOO2GdcdMvzPGeL5TzdbW7G0J+yKhaNq2Qtow/b9WM+DeNaLPesdn2GYlrACoALm/ermmh8lr0/UnkllqaTejnL9Vlx0xHICboyuow6m+NjDuE8A92ALjfnPnDlyz+V6Hy+TUFMbwRC305wvUvAcOn9uPOdcJVn84VNMt/DppIfCdQyfHwlB06AwjcumvfP/KQJSHwthf4LkIBL6pf69Tf8o8VsSt/AVlGXiwSEPvtF279KWIT+f8Rrdr2Rz7izsR9s7Ffppv5zd2E7/7qxbzqb+qxfX6P2x+Hb6pU+ud+yZhzehB/G5moK7WOL1n+sGxXDfMO28mglAX5PSX3Ok88Re4Y/lHm3vUPmz0aW7QwswUucCH0eLa0Ywru7bOiBiPy+MWdxQfcX6HxwrwAblvKGzk+WeeB0w1CopvJ5CS4bOgwudSbzkaMCyAGDgMjnd2S1HMk6ofKxrRIbvAPpfPSkBvgTpPPRgxI3sJig8tF9evAXSOeje0Xg5IjORzeL4B1GIp9zdNMC3OKl89HVxXz3PkPXeMEzFmR+9cd9E/Uz6X658ffH/a2///5947LkHj5ebD9+fPh/2o++2ncPf+d+iPGb++DW4OHvxL8e/hf74Cs+ZD5+Uvnw/3b7AwfMCX38Pa3D37svvtpPv9sHzz/O3sAAzz/i7Z9CxbpydiKASKar2p7/+fdHBG2c8VeVdV/MygV9uR9DmEbIFz2utwAAAABJRU5ErkJggg==" alt="linkedIn"/></Link>
</div>
</div>
</div>


    </div>
}
export default Footer;