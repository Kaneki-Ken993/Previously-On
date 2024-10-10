export const IsLoggedIn = () => { 
    let token = localStorage.getItem('token');
    let login = localStorage.getItem('Login');
    let id = localStorage.getItem('Id');

    if (token && login && id) {
        return true;
    } else {
        return false;
    }
 }