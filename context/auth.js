import React, {createContext, useState} from "react";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext();

function AuthProvider({children}){
    const [idn, setIdn] = useState({});
    return(
        <AuthContext.Provider value={{idn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;