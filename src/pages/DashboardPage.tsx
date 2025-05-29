
import React from 'react';
import { DashboardSidebar } from '@/components/Dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/Dashboard/DashboardHeader';
import { SummaryCards } from '@/components/Dashboard/SummaryCards';
import { AccountOverviews } from '@/components/Dashboard/AccountOverviews';
import { ChartPlaceholders } from '@/components/Dashboard/ChartPlaceholders';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 space-y-6">
          <SummaryCards />
          <AccountOverviews />
          <ChartPlaceholders />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
