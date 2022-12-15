import React from "react";

export const Authcontext=React.createContext();


function Auth({children}){
    const[state,setState]=React.useState({
        isAuth:false
    })

    const Login=()=>{
        setState(true);
    }
    return <div>

<Authcontext.Provider value={{state,setState,Login}}>
    {children}
</Authcontext.Provider>
    </div>
}

export default Auth;
