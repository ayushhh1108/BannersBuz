export const saveUser = (user) => {
    localStorage.setItem("USER", JSON.stringify(user));
}

export const removeUser = () => {
    localStorage.removeItem("USER");
}

export const getUser = () => {
    if(localStorage.getItem("USER")){
        return JSON.parse(localStorage.getItem("USER"));
    } else {
        return null;
    }
}