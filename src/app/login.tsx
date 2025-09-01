import React from 'react';
import Header from '../components/ui/Header';
import LoginForm from '../components/ui/LoginForm';

const Login: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
