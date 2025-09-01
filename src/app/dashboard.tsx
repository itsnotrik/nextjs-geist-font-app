import React from 'react';
import Header from '../components/ui/Header';
import Dashboard from '../components/ui/Dashboard';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <Dashboard />
      </main>
    </div>
  );
};

export default DashboardPage;
