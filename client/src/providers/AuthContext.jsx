import { createContext, useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [userauth, setuserauth] = useState(() => localStorage.getItem('authTokens') ? true : false);
    const [superuser, setsuperuser] = useState(false);
    const navigate = useNavigate();
    const [superusercreated, setsuperusercreated] = useState(false);

    const loginuser = async (e) => {
        e.preventDefault();
        let response = await fetch('http://localhost:5000/user/login/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password })
        });
        let data = await response.json();
        if (response.status === 200) {
            localStorage.setItem('authTokens', JSON.stringify(data.token));
            setuserauth(true);
            if (data.user.status === 'superuser') {
                
                setuserauth(true);
                navigate("/add");
            } else {
                
                navigate("/page")
            }
        } else {
            alert('something went wrong!');
        }
    };

    const signupsuperuser = async () => {
        try {
            const res = await fetch("http://localhost:5000/superuser/signup/");
            if (res.status(400)) setsuperusercreated(true);
            if (res.status(201)) setsuperusercreated(true);

        } catch (error) {
            alert('something went wrong!');
        }
    }

    let logoutuser = () => {
        setAuthTokens(null);
        setuserauth(false);
        localStorage.removeItem('authTokens');
        setsuperuser(false);
    }


    const contextData = {
        username: username,
        setusername: setusername,
        password: password,
        setpassword: setpassword,
        loginuser: loginuser,
        logoutuser: logoutuser,
        authTokens: authTokens,
        setAuthTokens: setAuthTokens,
        userauth: userauth,
        setuserauth: setuserauth,
        superuser: superuser,
        setsuperuser: setsuperuser,
        superusercreated: superusercreated ,
        setsuperusercreated : setsuperusercreated ,
        signupsuperuser : signupsuperuser

    }

    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )

}