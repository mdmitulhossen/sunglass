import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";


const useAuth = () => {
    const all = useContext(AuthContext);
    console.log("useAutj---->",all)
    return all
};

export default useAuth;