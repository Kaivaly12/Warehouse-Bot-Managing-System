
import React, { createContext, useState, useEffect, useMemo } from 'react';

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (storedTheme) {
            return storedTheme;
        }
        if (userMedia.matches) {
            return 'dark';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };
    
    const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
