import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import Header from '../components/Header';

const Benefits = () => {
  const healthInsurance = {
    provider: 'HealthCare Plus',
    planType: 'Family Coverage',
    deductible: 'K500',
    outOfPocketMax: 'K3,000',
  };

  const retirementPlan = {
    type: '401(k)',
    employeeContribution: '6%',
    employerMatch: '4%',
    vestingPeriod: '3 years',
    currentBalance: 'K45,000',
  };

  const otherBenefits = [
    { id: 1, name: 'Dental Insurance', description: 'Covers preventive care and basic procedures' },
    { id: 2, name: 'Vision Insurance', description: 'Annual eye exams and discounts on eyewear' },
    { id: 3, name: 'Life Insurance', description: '2x annual salary coverage' },
    { id: 4, name: 'Paid Time Off', description: '20 days per year' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Employee Benefits</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Health Insurance</CardTitle>
              <CardDescription>Your current health insurance plan details</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Provider</TableCell>
                    <TableCell>{healthInsurance.provider}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Plan Type</TableCell>
                    <TableCell>{healthInsurance.planType}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Deductible</TableCell>
                    <TableCell>{healthInsurance.deductible}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Out-of-Pocket Maximum</TableCell>
                    <TableCell>{healthInsurance.outOfPocketMax}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button className="mt-4">View Full Plan Details</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Retirement Plan</CardTitle>
              <CardDescription>Your 401(k) retirement savings plan</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Plan Type</TableCell>
                    <TableCell>{retirementPlan.type}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Your Contribution</TableCell>
                    <TableCell>{retirementPlan.employeeContribution}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Employer Match</TableCell>
                    <TableCell>{retirementPlan.employerMatch}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vesting Period</TableCell>
                    <TableCell>{retirementPlan.vestingPeriod}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4">
                <p className="font-medium mb-2">Current Balance: {retirementPlan.currentBalance}</p>
                <Progress value={75} className="w-full" />
                <p className="text-sm text-gray-500 mt-1">75% of the way to your retirement goal</p>
              </div>
              <Button className="mt-4">Manage Investments</Button>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Additional Benefits</CardTitle>
            <CardDescription>Overview of other employee benefits</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Benefit</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {otherBenefits.map((benefit) => (
                  <TableRow key={benefit.id}>
                    <TableCell className="font-medium">{benefit.name}</TableCell>
                    <TableCell>{benefit.description}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Learn More</Button>
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

export default Benefits;
