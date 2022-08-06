
const TOKEN_KEY = "md5";


// Set Api Key Token At LocalStore \\
export const SetMd5 = (md5) => {
    localStorage.setItem(TOKEN_KEY, md5);
}

// Remove Api Key Token From LocalStorage \\
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

// Check if Token Exists \\
export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
    return false;
    
}