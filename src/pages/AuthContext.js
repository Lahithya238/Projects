import { createContext, useContext, useState } from "react";
import axios from 'axios'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const isInitiallogin = !!localStorage.getItem('token')
    const [islogin, setislogin] = useState(isInitiallogin);

    const login = (logindetails) => {
        console.log('logindetails', logindetails)
        fetchData(logindetails);
    }

    const fetchData = async (logindetails) => {
        const response = await axios.post('https://fakestoreapi.com/auth/login', logindetails)
        console.log('fetchedone', response.data)
        localStorage.setItem('token', response.data.token);
        setislogin(true);
    }


    const logout = () => {
        localStorage.clear('token')
        setislogin(false);

    }
    return (
        <AuthContext.Provider value={{ islogin, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UseAuth = () => useContext(AuthContext);