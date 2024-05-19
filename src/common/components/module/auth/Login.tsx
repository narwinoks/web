import axios from 'axios';
import clsx from 'clsx';
import React, { FormEvent, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        try {
            const response = await axios.post('/api/login', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("response", JSON.stringify(response.data));
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="px-2">
            <h1 className="font-medium text-2xl">Login</h1>
            <p className="text-sm mt-2">If you want to become a blog author, contact bellow</p>
            <form onSubmit={onSubmit}>
                <div className="pt-5">
                    <label htmlFor="username" className="text-md">Username</label>
                    <input type="text" id='username' className={clsx('border dark:border-borderDark border-borderLight  rounded-md w-full'
                        , 'dark:bg-transparent bg-white  focus:outline-none focus:shadow-outline', 'py-2 px-1', 'mt-2')} name="username" placeholder="Enter your username" />
                </div>
                <div className="pt-5 relative">
                    <label htmlFor="username" className="text-md">Password</label>
                    <input type={showPassword ? 'text' : 'password'} name="password" id="password" className={clsx('border dark:border-borderDark border-borderLight  rounded-md w-full'
                        , 'dark:bg-transparent bg-white  focus:outline-none focus:shadow-outline', 'py-2 px-1', 'mt-2')} placeholder="Enter your password" />
                    <div
                        className="absolute inset-y-0 right-0 top-14 pr-3 flex items-center cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                    </div>
                </div>
                <div className="pt-5 justify-center text-center w-auto">
                    <button type="submit" className="bg-white text-dark px-10 rounded-md text-semibold py-2">Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login