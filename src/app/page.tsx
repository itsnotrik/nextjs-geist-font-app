import React from 'react';
import Header from '../components/ui/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Welcome to MyApp</h1>
        <p className="mt-2">Your one-stop solution for managing your tasks.</p>
      </main>
    </div>
  );
};

export default Home;
