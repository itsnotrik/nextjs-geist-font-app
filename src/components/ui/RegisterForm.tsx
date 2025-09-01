import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle registration logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <h2 className="text-xl font-bold">Register</h2>
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input type="text" {...register('name')} className="border p-2 w-full" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input type="email" {...register('email')} className="border p-2 w-full" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Password</label>
        <input type="password" {...register('password')} className="border p-2 w-full" required />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">Register</button>
    </form>
  );
};

export default RegisterForm;
