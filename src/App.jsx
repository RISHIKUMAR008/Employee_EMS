import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginLanding from "./pages/LoginLanding";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Payslips from "./pages/Payslip";
import Printpayslip from "./pages/Printpayslip";
import Loginform from "./components/Loginform";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<LoginLanding />} />
        <Route
          path="/login/admin"
          element={
            <Loginform
              role="admin"
              title="Admin Portal"
              subtitle="Manage your organization's administrative tasks"
            />
          }
        />
        <Route
          path="/login/employee"
          element={
            <Loginform
              role="Employee"
              title="Employee Portal"
              subtitle="Access your employee resources and information"
            />
          }
        />

        {/* Layout Wrapper */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leaves" element={<Leave />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/settings" element={<Setting />} />
        </Route>

        {/* Standalone Route */}
        <Route path="/print/payslips/:id" element={<Printpayslip />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
};

export default App;
