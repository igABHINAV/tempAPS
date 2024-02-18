import { Outlet, Navigate } from "react-router-dom";
import React, { useContext } from 'react'
import AuthContext from "../providers/AuthContext";

const SuperuserRouter = () => {
    const { userauth, superuser } = useContext(AuthContext);
    return (
        (userauth && !superuser) ? <Outlet /> : <Navigate to='/login' />
    )
}

export default SuperuserRouter
