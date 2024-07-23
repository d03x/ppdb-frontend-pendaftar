import { Button, Divider, Input, message } from "antd";
import { FormEvent, useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { Link } from "react-router-dom";
import AuthService, { UserRegisterEntity } from "../services/AuthService";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type anyType = any;

const Register = () => {
    const authService = new AuthService();
    const { setPageLoading, pageLoading } = useAppContext();
    const [nisn, setNisn] = useState<string>();
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();

    const onSubmit = (event: FormEvent) => {
        setPageLoading(true);
        event.preventDefault();

        if (password !== confirmPassword) {
            message.error("Passwords do not match!");
            setPageLoading(false);
            return;
        }

        const data: UserRegisterEntity = {
            nisn: nisn,
            name: name,
            email: email,
            password: password,
            password_confirmation : confirmPassword,
        }

        try {
            setTimeout(() => {
                authService.register(data);
                setPageLoading(false);
            }, 5000);
        } catch (error) {
            setPageLoading(false);
        }
    }

    return (
        <>
            <div className="h-screen bg-gray-200 w-screen pt-12 md:pt-6">
                <div className="max-w-md mx-2 sm:mx-auto md:max-w-sm">
                    <div className="shadow-lg bg-white lg:border-l-[0.2em] lg:border-b-[0.1em] border-b-gray-200 border-l-gray-100 rounded-lg">
                        <div className="p-6 sm:p-9">
                            <div>
                                <h1 className="text-lg font-bold tracking-tight">Create Account</h1>
                                <p className="text-sm leading-2 tracking-normal">
                                    Please register with your details or <Link className="text-blue-500 underline font-semibold" to={'/login'}>Login</Link> if you already have an account.
                                </p>
                            </div>
                            <Divider className="my-4" />
                            <div>
                                <form className="space-y-3 md:space-y-2" action="" onSubmit={onSubmit}>
                                    <div>
                                        <label className="text-sm leading-none tracking-tight text-gray-700" htmlFor="NISN">NISN</label>
                                        <Input count={{ 
                                            show: true,
                                            max : 10,
                                         }} onKeyUp={(data: anyType) => setNisn(data.target.value)} placeholder="NISN" size="large" className="rounded-md" />
                                    </div>
                                    <div>
                                        <label className="text-sm leading-none tracking-tight text-gray-700" htmlFor="Name">Name</label>
                                        <Input onKeyUp={(data: anyType) => setName(data.target.value)} placeholder="Name" size="large" className="rounded-md" />
                                    </div>
                                    <div>
                                        <label className="text-sm leading-none tracking-tight text-gray-700" htmlFor="Email">Email</label>
                                        <Input onKeyUp={(data: anyType) => setEmail(data.target.value)} placeholder="Email" size="large" className="rounded-md" />
                                    </div>
                                    <div>
                                        <label className="text-sm leading-none tracking-tight text-gray-700" htmlFor="Password">Password</label>
                                        <Input.Password onKeyUp={(data: anyType) => setPassword(data.target.value)} placeholder="Password" size="large" className="rounded-md" />
                                    </div>
                                    <div>
                                        <label className="text-sm leading-none tracking-tight text-gray-700" htmlFor="ConfirmPassword">Confirm Password</label>
                                        <Input.Password onKeyUp={(data: anyType) => setConfirmPassword(data.target.value)} placeholder="Confirm Password" size="large" className="rounded-md" />
                                    </div>
                                    <div>
                                        <Button className="mt-3 rounded-md" disabled={pageLoading} htmlType="submit" type="primary" size="large" block>Register</Button>
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

export default Register;
