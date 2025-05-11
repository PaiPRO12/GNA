import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Header from '../components/Header';
import { CalendarIcon, ClockIcon, FileTextIcon, GraduationCapIcon, HeartPulseIcon, LineChartIcon, UserIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const DashboardCard = ({ title, value, icon, imageSrc }) => (
  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
    <Card className="h-full shadow-custom">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {imageSrc && <img src={imageSrc} alt={title} className="mt-2 w-full h-32 object-cover rounded-md" />}
      </CardContent>
    </Card>
  </motion.div>
);

const QuickLinkCard = ({ title, description, to, icon, imageSrc }) => (
  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
    <Card className="h-full shadow-custom">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {imageSrc && <img src={imageSrc} alt={title} className="mb-4 w-full h-32 object-cover rounded-md" />}
        <Link to={to}>
          <Button className="w-full bg-primary hover:bg-primary-dark text-white">Access</Button>
        </Link>
      </CardContent>
    </Card>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mb-8 text-primary"
        >
          Welcome, Ignitious Sakala
        </motion.h1>
        
        <section className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-semibold mb-6 text-secondary"
          >
            Dashboard
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCard title="Leave Balance" value="15 days" icon={<CalendarIcon className="h-4 w-4 text-primary" />} imageSrc="/leave-balance.jpg" />
            <DashboardCard title="Next Payday" value="15 Apr 2024" icon={<ClockIcon className="h-4 w-4 text-primary" />} imageSrc="/payday.jpg" />
            <DashboardCard title="Performance Score" value="4.5 / 5" icon={<LineChartIcon className="h-4 w-4 text-primary" />} imageSrc="/performance.jpg" />
            <DashboardCard title="Training Completed" value="3 / 5" icon={<GraduationCapIcon className="h-4 w-4 text-primary" />} imageSrc="/training.jpg" />
          </div>
        </section>
        
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-semibold mb-6 text-secondary"
          >
            Quick Links
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickLinkCard
              title="Personal Information"
              description="View and update your personal details"
              to="/personal-info"
              icon={<UserIcon className="h-5 w-5 text-primary" />}
              imageSrc="/personal-info.jpg"
            />
            <QuickLinkCard
              title="Leave Management"
              description="Request and track your leave"
              to="/leave-management"
              icon={<CalendarIcon className="h-5 w-5 text-primary" />}
              imageSrc="/leave-management.jpg"
            />
            <QuickLinkCard
              title="Payroll"
              description="View your pay slips and tax information"
              to="/payroll"
              icon={<FileTextIcon className="h-5 w-5 text-primary" />}
              imageSrc="/payroll.jpg"
            />
            <QuickLinkCard
              title="Performance"
              description="Set goals and view performance reviews"
              to="/performance"
              icon={<LineChartIcon className="h-5 w-5 text-primary" />}
              imageSrc="/performance-review.jpg"
            />
            <QuickLinkCard
              title="Training"
              description="Enroll in courses and track your learning"
              to="/training"
              icon={<GraduationCapIcon className="h-5 w-5 text-primary" />}
              imageSrc="/training-courses.jpg"
            />
            <QuickLinkCard
              title="Benefits"
              description="View and manage your employee benefits"
              to="/benefits"
              icon={<HeartPulseIcon className="h-5 w-5 text-primary" />}
              imageSrc="/benefits.jpg"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
