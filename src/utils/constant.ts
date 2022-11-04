
export const _API= "http://172.20.10.6:1337/api";
export const AUTH_TOKEN= "jwt";
export const USER_TOKEN= 'user';
export const PW_TOKEN= 'password';
export const LOGINTYPE_TOKEN= 'logintype'


export const _USER= {
    register: _API+"/auth/local/register",
    callback: _API+"/auth/local"
}