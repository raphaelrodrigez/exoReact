import {useContext} from "react";
import { AuthContext } from "../AuthContext";
import { useAuth } from "./AuthContext";

export default function Dashboard(){
    const { user, login, logout } = useAuth();
    return (
        <div>
            <p>{user.mail}</p>
            <button onClick={logout}>Deconnexion</button>
        </div>
    )
}







































// import { useContext } from "react";
// import { AuthContext } from "./AuthContext";

// export default function Dashbord(){
//     const {user,login, logout} = useContext(AuthContext)

//     return(
//         <div>
//             <p>{user.mail}</p>
//             <button onClick={logout}>Deconnexion</button>
//         </div>
//     )
// }