
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Chatbot from '../chatbot/Chatbot';

interface DashboardLayoutProps {
    onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ onLogout }) => {
    return (
        <div className="flex h-screen bg-light-bg dark:bg-dark-bg text-gray-800 dark:text-gray-200 font-sans">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header onLogout={onLogout} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
                    <Outlet />
                </main>
            </div>
            <Chatbot />
        </div>
    );
};

export default DashboardLayout;
