import { HomeIcon, UserIcon, CalendarIcon, DollarSignIcon, LineChartIcon, GraduationCapIcon, HeartPulseIcon } from "lucide-react";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "Personal Info",
    to: "/personal-info",
    icon: <UserIcon className="h-4 w-4" />,
  },
  {
    title: "Leave Management",
    to: "/leave-management",
    icon: <CalendarIcon className="h-4 w-4" />,
  },
  {
    title: "Payroll",
    to: "/payroll",
    icon: <DollarSignIcon className="h-4 w-4" />,
  },
  {
    title: "Performance",
    to: "/performance",
    icon: <LineChartIcon className="h-4 w-4" />,
  },
  {
    title: "Training",
    to: "/training",
    icon: <GraduationCapIcon className="h-4 w-4" />,
  },
  {
    title: "Benefits",
    to: "/benefits",
    icon: <HeartPulseIcon className="h-4 w-4" />,
  },
];
