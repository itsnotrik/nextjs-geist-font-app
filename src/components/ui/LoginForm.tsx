import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <h2 className="text-xl font-bold">Login</h2>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input type="email" {...register('email')} className="border p-2 w-full" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Password</label>
        <input type="password" {...register('password')} className="border p-2 w-full" required />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
    </form>
  );
};

export default LoginForm;
