import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '../components/Header';

const LeaveManagement = () => {
  const leaveHistory = [
    { id: 1, type: 'Annual Leave', startDate: '2024-03-15', endDate: '2024-03-20', status: 'Approved' },
    { id: 2, type: 'Sick Leave', startDate: '2024-02-10', endDate: '2024-02-11', status: 'Approved' },
    { id: 3, type: 'Personal Leave', startDate: '2024-04-05', endDate: '2024-04-05', status: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Leave Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Leave Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Annual Leave: 15 days</p>
              <p>Sick Leave: 10 days</p>
              <p>Personal Leave: 3 days</p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Request Leave</CardTitle>
              <CardDescription>Submit a new leave request</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="leaveType">Leave Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select leave type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="annual">Annual Leave</SelectItem>
                      <SelectItem value="sick">Sick Leave</SelectItem>
                      <SelectItem value="personal">Personal Leave</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input id="startDate" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="endDate">End Date</Label>
                    <Input id="endDate" type="date" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="reason">Reason (Optional)</Label>
                  <Input id="reason" placeholder="Reason for leave" />
                </div>
                <Button className="w-full">Submit Leave Request</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Leave History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaveHistory.map((leave) => (
                  <TableRow key={leave.id}>
                    <TableCell>{leave.type}</TableCell>
                    <TableCell>{leave.startDate}</TableCell>
                    <TableCell>{leave.endDate}</TableCell>
                    <TableCell>{leave.status}</TableCell>
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

export default LeaveManagement;
