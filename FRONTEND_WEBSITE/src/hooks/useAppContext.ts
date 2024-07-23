import { useContext } from "react"
import { AppContext } from "../contexts/AppContextProvider"
export const useAppContext = () => {
    return useContext(AppContext);
}