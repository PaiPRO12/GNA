import React from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '../components/Header';
import { DownloadIcon } from 'lucide-react';

const Payroll = () => {
  const payslips = [
    { id: 1, date: '2024-03-31', grossPay: 5000, deductions: 800, netPay: 4200 },
    { id: 2, date: '2024-02-29', grossPay: 5000, deductions: 800, netPay: 4200 },
    { id: 3, date: '2024-01-31', grossPay: 5000, deductions: 800, netPay: 4200 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Payroll Information</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Year-to-Date Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">K15,000</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Year-to-Date Taxes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">K2,400</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Next Payday</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">April 30, 2024</p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Payslips</CardTitle>
            <CardDescription>View and download your recent payslips</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Gross Pay</TableHead>
                  <TableHead>Deductions</TableHead>
                  <TableHead>Net Pay</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payslips.map((payslip) => (
                  <TableRow key={payslip.id}>
                    <TableCell>{payslip.date}</TableCell>
                    <TableCell>K{payslip.grossPay.toFixed(2)}</TableCell>
                    <TableCell>K{payslip.deductions.toFixed(2)}</TableCell>
                    <TableCell>K{payslip.netPay.toFixed(2)}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <DownloadIcon className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Payroll;
