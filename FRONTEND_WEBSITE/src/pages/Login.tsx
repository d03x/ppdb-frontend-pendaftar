import { Button, Divider, Input } from "antd";
import { FormEvent, useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Link } from "react-router-dom";
import AuthService, { UserLoginEntity } from "../services/AuthService";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type anyType = any;
const Login = () => {
    const authService = new AuthService();
    const { setPageLoading, pageLoading } = useAppContext();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const onSubmit = (event: FormEvent) => {
        setPageLoading(true);
        event.preventDefault();
        const data: UserLoginEntity = {
            email: email,
            password: password,
        }

        try {
            setTimeout(() => {
                authService.login(data)
                setPageLoading(false);
            }, 5000);
        } catch (error) {
            setPageLoading(false);
        }

    }

    return (
        <>
            <div className="h-screen bg-gray-200 w-screen pt-12  md:pt-20">
                <div className="max-w-md mx-2 sm:mx-auto md:max-w-sm">
                    <div className="shadow-lg bg-white lg:border-l-[0.3em] lg:border-b-2 border-b-gray-200 border-l-gray-100  rounded-lg">
                        <div className="p-6 sm:p-9">
                            <div>
                                <h1 className="text-lg font-bold -tracking-tight">Wellcome Back!</h1>
                                <p className="text-sm leading-2 -tracking-normal">
                                    Silahkan login dengan akun terdaftar atau <Link className="text-blue-500 underline font-semibold" to={'/daftar'}>Daftar Akun</Link> jika belum punya akun
                                </p>
                            </div>
                            <Divider className="my-4" />
                            <div >
                                <form className="space-y-3 md:space-y-2" action="" onSubmit={onSubmit}>
                                    <div>
                                        <label className="text-sm leading-none tracking-tight text-gray-700" htmlFor="Email">Email / Nisn / Username</label>
                                        <Input onKeyUp={(data: anyType) => setEmail(data.target.value)} placeholder="Email" size="large" className="rounded-md" />
                                    </div>
                                    <div>
                                        <label className="text-sm leading-none tracking-tight text-gray-700" htmlFor="password">Password</label>
                                        <Input.Password onKeyUp={(data: anyType) => setPassword(data.target.value)} placeholder="Kata sandi" size="large" className="rounded-md" />
                                        <div className="">
                                            <Link className="text-blue-500 text-sm font-semibold float-end mt-1" to={'forgot-password'}>Lupa password?</Link>
                                        </div>
                                    </div>
                                    <div>
                                        <Button className="mt-3 rounded-md" disabled={pageLoading} htmlType="submit" type="primary" size="large" block>Login</Button>
                                        <Button className="mt-3 rounded-md" danger disabled={pageLoading} htmlType="submit" type="link" size="large" block>Login Dengan Google</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
