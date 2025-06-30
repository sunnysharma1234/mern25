// import Server from "next/dist/server/base-server";
import { createContext,useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export  const AuthProvider = ({ children }) => {

    const [token , setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    const [services,setServices]= useState([])
    const authorizationToken = `Bearer ${token}`;

    const storeTokenInLS = (ServerToken) => {
        setToken(ServerToken);
        return localStorage.setItem("token", ServerToken);

    }

    let isLoggedIn = !!token;


    // tackling logout functionality
    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    }




    // jwt authentication logged in user data

    const userAuthentication = async () => {
        try{
            setIsLoading(true);
            const response = await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization: authorizationToken,
                }
            })

            if(response.ok){
                const data = await response.json();
                console.log("user data", data.userData);
                // setToken(data.token);
                setUser(data.userData);
                setIsLoading(false);
            }else{
                console.error("error fetching user data")
                setIsLoading(false)
            }

        }catch(error){
            console.log(error)
            console.log("error fetching data")
        }
    }

    // to fetch the services from the databsae

    const getServices = async()=>{
        try{
            const response = await fetch("http://localhost:5000/api/data/service",{
                method:"GET",

            })

            if(response.ok){
                const data = await response.json()
                console.log(data.msg);
                setServices(data.msg)
            }
        }catch(error){
            console.log(`services error:${error}`)
        }
    }

    useEffect(()=>{
        getServices();
        userAuthentication();
    },[])


  return <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services,authorizationToken,isLoading}}>{children} </AuthContext.Provider>;
};


export const useAuth =()=>{
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provider");
    }

    return authContextValue;
}