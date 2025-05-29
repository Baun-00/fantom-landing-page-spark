
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const loanAccounts = [
  {
    productName: 'Personal Loan',
    accountNo: 'L0012345',
    loanAmount: 'ksh 25,000',
    balance: '$18,500',
  },
  {
    productName: 'Mortgage',
    accountNo: 'L0023456',
    loanAmount: 'ksh 150,000',
    balance: 'ksh 132,250',
  },
];

const depositAccounts = [
  {
    productName: 'Fan Current',
    accountNo: '020007911',
    balance: '-KES 35.00',
    isOverdraft: true,
  },
  {
    productName: 'Savings Max',
    accountNo: '020007912',
    balance: 'KES 12,450.00',
    isOverdraft: false,
  },
];

export const AccountOverviews = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Loan Accounts Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Loan Accounts Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {loanAccounts.map((account, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div>
                    <p className="font-medium">{account.productName}</p>
                    <p className="text-sm text-gray-600">Account: {account.accountNo}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Loan Amount: {account.loanAmount}</p>
                    <p className="font-medium">Balance: {account.balance}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Statement
                </Button>
              </div>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-fantom-green hover:bg-fantom-green/90">
                Apply New Loan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Deposit Accounts Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Deposit Accounts Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {depositAccounts.map((account, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium">{account.productName}</p>
                    <p className="text-sm text-gray-600">Account: {account.accountNo}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${account.isOverdraft ? 'text-red-600' : 'text-green-600'}`}>
                      {account.balance}
                    </p>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Button 
                  className={account.isOverdraft ? 'bg-fantom-green hover:bg-fantom-green/90' : ''}
                  variant={account.isOverdraft ? 'default' : 'outline'} 
                  size="sm"
                >
                  {account.isOverdraft ? 'Apply Overdraft' : 'View Details'}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
