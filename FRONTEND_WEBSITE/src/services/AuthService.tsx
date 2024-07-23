export type UserLoginEntity = {
    email: string | undefined,
    password: string | undefined,
}
export type UserRegisterEntity = {
    nisn: string|undefined,
    email: string|undefined,
    name: string|undefined,
    password: string|undefined,
    password_confirmation : string|undefined,
}
class AuthService {
    /**
     * login
     */
    public login(data: UserLoginEntity) {
        console.log(data);
    }
    public register(data: UserRegisterEntity) {
        console.log(data);
        
    }
}

export default AuthService;