import React from 'react';
import Header from '../components/ui/Header';
import RegisterForm from '../components/ui/RegisterForm';

const Register: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <RegisterForm />
      </main>
    </div>
  );
};

export default Register;
