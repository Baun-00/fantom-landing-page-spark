
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

const summaryData = [
  {
    title: 'Total Loan Amount',
    value: 'Ksh 150,750.00',
    change: '+5.2% vs last month',
    positive: true,
  },
  {
    title: 'Active Deposit Accounts',
    value: '12',
    change: '+1 account this week',
    positive: true,
  },
  {
    title: 'Pending Withdrawals',
    value: 'ksh 5,230.00',
    change: '-2.0% vs last month',
    positive: false,
  },
  {
    title: 'Total Employees',
    value: '45',
    change: '+2 new hires',
    positive: true,
  },
];

export const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryData.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {item.value}
            </div>
            <div className={`flex items-center text-sm ${
              item.positive ? 'text-green-600' : 'text-red-600'
            }`}>
              {item.positive ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              {item.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
