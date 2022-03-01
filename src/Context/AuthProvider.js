import { createContext } from "react";
import useBook from "../Hook/useBook";

export const AuthContext= createContext();
const AuthProvider=()=>{
    const allBooks=useBook()
    return(
        <AuthContext.Provider value={allBooks}>
        </AuthContext.Provider>

    )
}
export default AuthProvider;