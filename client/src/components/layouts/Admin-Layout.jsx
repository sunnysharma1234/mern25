import { Navigate, NavLink, Outlet } from "react-router-dom"
import {FaUser, FaRegListAlt, FaHome} from "react-icons/fa"
import {FaMessage} from "react-icons/fa6"
import { useAuth } from "../../store/auth"

export const AdminLayout = ()=>{
    const {user,isLoading} = useAuth();
    console.log("admin layout", user);

    if(isLoading){
        return <h1>Loading</h1>

    }

    if(!user.isAdmin){
        return <Navigate to="/" />
    }
    
    return (
        <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li> <NavLink to="/admin/users"> <FaUser /> users </NavLink></li>
                        <li> <NavLink to="/admin/contacts"><FaMessage />  contacts</NavLink> </li>
                        <li> <NavLink to="/service">  <FaRegListAlt /> services </NavLink></li>
                        <li> <NavLink to="/" > <FaHome/>  Home </NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet/>
        </>
    )
    //  <h1>admin navbar</h1>
}