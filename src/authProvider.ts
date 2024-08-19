import { permission } from "process";
import { AuthProvider } from "react-admin";

const apiUrl = import.meta.env.VITE_SIMPLE_REST_URL;
const authProvider: AuthProvider = {
    login: ({ username, password }) =>  {
        const request = new Request(`${apiUrl}/auth/login`, {
            method: 'POST',
            body: `username=${username}&password=${password}` ,
            headers: new Headers({ 'Accept-Encoding':'gzip, deflate, br, zstd','Content-Type': 'application/x-www-form-urlencoded' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('token', auth["access_token"]);
                
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            // localStorage.removeItem('token');
            return Promise.reject({ redirectTo: '/unauthorized', logoutUser: false });
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ message: 'Por favor, Inicie Sesión' }),
        
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    
    getIdentity: () => {
        const token = localStorage.getItem('token')
        const request = new Request(`${apiUrl}/users/me`, {
            method: 'GET',
            headers: new Headers({ 'Authorization': `Bearer ${token}` }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((user)=> {
                return Promise.resolve({
                    id:user.id,
                    fullName: user.email,
                });
            })
            .catch(() => { 
                return Promise.reject({message: "Token inválido, vuelva a iniciar sesión"})
            }); 
    },
    getPermissions: () => {
        const token = localStorage.getItem('token')
        const request = new Request(`${apiUrl}/users/me`, {
            method: 'GET',
            headers: new Headers({'Authorization': `Bearer ${token}` }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((user)=> {
                const permissions: any[] = []
                user.roles.map((role: any)=> permissions.concat(role.permissions))
                permissions.concat(user.permissions)
                return Promise.resolve(permissions);
            })
            .catch(() => { 
                return Promise.reject({message: "Token inválido, vuelva a iniciar sesión"})
            }); 
    },
};

export default authProvider;