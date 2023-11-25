import { createContext, useState } from "react";


const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);

    const value = {
        categories,
        setCategories,
    }

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };