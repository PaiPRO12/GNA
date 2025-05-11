import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/theme-provider';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Index from './pages/Index';
import PersonalInfo from './pages/PersonalInfo';
import LeaveManagement from './pages/LeaveManagement';
import Payroll from './pages/Payroll';
import Performance from './pages/Performance';
import Training from './pages/Training';
import Benefits from './pages/Benefits';

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const Layout = ({ children }) => (
  <div className="flex min-h-screen">
    <Sidebar />
    <div className="flex-1 ml-64">
      <Header />
      <main className="pt-24 px-6 py-8">
        {children}
      </main>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <AuthProvider>
          <BrowserRouter>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
                <Route path="/logout" element={<PageWrapper><Logout /></PageWrapper>} />
                <Route path="/" element={<ProtectedRoute><Layout><PageWrapper><Index /></PageWrapper></Layout></ProtectedRoute>} />
                <Route path="/personal-info" element={<ProtectedRoute><Layout><PageWrapper><PersonalInfo /></PageWrapper></Layout></ProtectedRoute>} />
                <Route path="/leave-management" element={<ProtectedRoute><Layout><PageWrapper><LeaveManagement /></PageWrapper></Layout></ProtectedRoute>} />
                <Route path="/payroll" element={<ProtectedRoute><Layout><PageWrapper><Payroll /></PageWrapper></Layout></ProtectedRoute>} />
                <Route path="/performance" element={<ProtectedRoute><Layout><PageWrapper><Performance /></PageWrapper></Layout></ProtectedRoute>} />
                <Route path="/training" element={<ProtectedRoute><Layout><PageWrapper><Training /></PageWrapper></Layout></ProtectedRoute>} />
                <Route path="/benefits" element={<ProtectedRoute><Layout><PageWrapper><Benefits /></PageWrapper></Layout></ProtectedRoute>} />
              </Routes>
            </AnimatePresence>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
