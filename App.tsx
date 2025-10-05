
import React, { useState, useMemo } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import LoginPage from './pages/LoginPage';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import InventoryPage from './pages/InventoryPage';
import DemandForecastPage from './pages/DemandForecastPage';
import BotManagementPage from './pages/BotManagementPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <ThemeProvider>
            <HashRouter>
                <Routes>
                    <Route path="/login" element={!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : <Navigate to="/" />} />
                    <Route path="/" element={isLoggedIn ? <DashboardLayout onLogout={handleLogout} /> : <Navigate to="/login" />}>
                        <Route index element={<DashboardPage />} />
                        <Route path="inventory" element={<InventoryPage />} />
                        <Route path="demand-forecast" element={<DemandForecastPage />} />
                        <Route path="bot-control" element={<BotManagementPage />} />
                        <Route path="reports" element={<ReportsPage />} />
                        <Route path="settings" element={<SettingsPage />} />
                    </Route>
                    <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
                </Routes>
            </HashRouter>
        </ThemeProvider>
    );
};

export default App;
