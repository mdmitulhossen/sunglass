import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";


const useAuth = () => {
    const all = useContext(AuthContext);
    return all
};

export default useAuth;