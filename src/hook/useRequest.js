import { useContext } from "react"
import { DataContext } from "../context/dataContext"
import { API } from "../utils/api"

export const useRequest = () => {

    const dataContext = useContext(DataContext);

    const getCategories = () => {
        API("/mainCategory", "get", "", "")
            .then(res => {
                console.log("categories res: ", res?.data);
                dataContext?.setCategories(res?.data);
            })
            .catch(error => {
                console.log("Error - categories: ", error);
            })
    }

    return {
        getCategories
    }
}   