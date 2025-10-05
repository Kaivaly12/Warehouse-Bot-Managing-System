
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { SunIcon, MoonIcon } from '../icons/Icons';

interface HeaderProps {
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-xl sticky top-4 mx-4 z-10 rounded-2xl border border-white/20 dark:border-white/10">
            <div className="flex items-center justify-between p-4">
                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="w-full max-w-xs pl-10 pr-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 border-transparent focus:border-neon-blue focus:ring-0"
                    />
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>

                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        {theme === 'dark' ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-700" />}
                    </button>
                    
                    {/* Notifications */}
                    <div className="relative">
                        <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-neon-blue ring-2 ring-white dark:ring-dark-bg"></span>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-2">
                           <img src="https://picsum.photos/100/100" alt="User" className="w-9 h-9 rounded-full object-cover" />
                            <div className="text-left hidden md:block">
                                <p className="font-semibold text-sm text-gray-800 dark:text-white">Admin User</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Warehouse Manager</p>
                            </div>
                        </button>
                         <div className="absolute right-0 mt-2 w-48 bg-light-card dark:bg-dark-card rounded-lg shadow-lg py-1 border border-white/20 dark:border-white/10 hidden group-hover:block">
                            <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5">Profile</a>
                            <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5">Settings</a>
                            <button onClick={onLogout} className="w-full text-left block px-4 py-2 text-sm text-red-500 hover:bg-black/5 dark:hover:bg-white/5">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
