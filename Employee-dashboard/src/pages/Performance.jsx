import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import Header from '../components/Header';

const Performance = () => {
  const goals = [
    { id: 1, title: 'Complete Project X', progress: 75, dueDate: '2024-06-30' },
    { id: 2, title: 'Improve Customer Satisfaction', progress: 60, dueDate: '2024-12-31' },
    { id: 3, title: 'Learn New Technology Y', progress: 40, dueDate: '2024-09-30' },
  ];

  const reviews = [
    { id: 1, date: '2023-12-31', overallRating: 4.5, status: 'Completed' },
    { id: 2, date: '2023-06-30', overallRating: 4.2, status: 'Completed' },
    { id: 3, date: '2022-12-31', overallRating: 4.0, status: 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Performance Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Current Goals</CardTitle>
              <CardDescription>Track your progress on assigned goals</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {goals.map((goal) => (
                  <li key={goal.id}>
                    <div className="flex justify-between mb-1">
                      <span>{goal.title}</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="w-full" />
                    <div className="text-sm text-gray-500 mt-1">Due: {goal.dueDate}</div>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-4">Add New Goal</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Performance Reviews</CardTitle>
              <CardDescription>View your past performance reviews</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Overall Rating</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reviews.map((review) => (
                    <TableRow key={review.id}>
                      <TableCell>{review.date}</TableCell>
                      <TableCell>{review.overallRating}</TableCell>
                      <TableCell>{review.status}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Skill Development</CardTitle>
            <CardDescription>Track your progress in key skill areas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Communication</span>
                  <span>80%</span>
                </div>
                <Progress value={80} className="w-full" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Technical Skills</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="w-full" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Leadership</span>
                  <span>60%</span>
                </div>
                <Progress value={60} className="w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Performance;