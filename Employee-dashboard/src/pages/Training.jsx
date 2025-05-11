import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import Header from '../components/Header';

const Training = () => {
  const availableCourses = [
    { id: 1, title: 'Introduction to Project Management', duration: '4 weeks', level: 'Beginner' },
    { id: 2, title: 'Advanced Data Analysis', duration: '6 weeks', level: 'Intermediate' },
    { id: 3, title: 'Effective Leadership Skills', duration: '3 weeks', level: 'Advanced' },
  ];

  const enrolledCourses = [
    { id: 1, title: 'Cybersecurity Fundamentals', progress: 75, dueDate: '2024-05-15' },
    { id: 2, title: 'Agile Methodologies', progress: 30, dueDate: '2024-07-30' },
  ];

  const completedCourses = [
    { id: 1, title: 'Time Management Essentials', completionDate: '2024-01-15', certificate: 'TM101' },
    { id: 2, title: 'Business Communication', completionDate: '2023-11-30', certificate: 'BC202' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Training and Development</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Available Courses</CardTitle>
              <CardDescription>Explore and enroll in new courses</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Title</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {availableCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>{course.title}</TableCell>
                      <TableCell>{course.duration}</TableCell>
                      <TableCell>{course.level}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">Enroll</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enrolled Courses</CardTitle>
              <CardDescription>Track your progress in current courses</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {enrolledCourses.map((course) => (
                  <li key={course.id}>
                    <div className="flex justify-between mb-1">
                      <span>{course.title}</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="w-full" />
                    <div className="text-sm text-gray-500 mt-1">Due: {course.dueDate}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Completed Courses</CardTitle>
            <CardDescription>View your training history and certificates</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Title</TableHead>
                  <TableHead>Completion Date</TableHead>
                  <TableHead>Certificate</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {completedCourses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>{course.title}</TableCell>
                    <TableCell>{course.completionDate}</TableCell>
                    <TableCell>{course.certificate}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Download Certificate</Button>
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

export default Training;