import clsx from 'clsx';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import React, { FormEvent, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { useToastContext } from '@/common/hooks/ToastContext';
interface FormData {
  username: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const toast = useToastContext();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = formData;

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (result?.ok) {
      toast.success({ heading: 'Success', message: 'Login Success' });
      router.push('/admin');
    } else {
      toast.error({ heading: 'Warning', message: 'Login Failed' });
    }
  };

  return (
    <div className="px-2">
      <h1 className="text-2xl font-medium">Login</h1>
      <p className="mt-2 text-sm">
        If you want to become a blog author, contact bellow
      </p>
      <form onSubmit={onSubmit}>
        <div className="pt-5">
          <label htmlFor="username" className="text-md">
            Username
          </label>
          <input
            type="text"
            id="username"
            className={clsx(
              'w-full rounded-md border  border-borderLight dark:border-borderDark',
              'focus:shadow-outline bg-white  focus:outline-none dark:bg-transparent',
              'px-1 py-2',
              'mt-2',
            )}
            name="username"
            placeholder="Enter your username"
            onChange={handleChange}
          />
        </div>
        <div className="relative pt-5">
          <label htmlFor="username" className="text-md">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            className={clsx(
              'w-full rounded-md border  border-borderLight dark:border-borderDark',
              'focus:shadow-outline bg-white  focus:outline-none dark:bg-transparent',
              'px-1 py-2',
              'mt-2',
            )}
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <div
            className="absolute inset-y-0 right-0 top-14 flex cursor-pointer items-center pr-3"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </div>
        </div>
        <div className="w-auto justify-center pt-5 text-center">
          <button
            type="submit"
            className="text-semibold rounded-md bg-white px-10 py-2 text-dark"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
