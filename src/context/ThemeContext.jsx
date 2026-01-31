import { createContext, useContext, useState, useEffect } from 'react';
import { defaultColors } from '../config/themeColors.js';

const ThemeContext = createContext();

const applyColors = (colors) => {
    const root = document.documentElement;
    root.style.setProperty('--color-dark', colors.dark);
    root.style.setProperty('--color-dark-alt', colors.darkAlt);
    root.style.setProperty('--color-light', colors.light);
    root.style.setProperty('--color-light-alt', colors.lightAlt);
    root.style.setProperty('--color-highlight', colors.highlight);
    root.style.setProperty('--color-highlight-alt', colors.highlightAlt);
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('venkra-theme');
        return saved || 'dark';
    });

    const [customColors, setCustomColorsState] = useState(() => {
        const saved = localStorage.getItem('venkra-custom-colors');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch {
                return { ...defaultColors };
            }
        }
        return { ...defaultColors };
    });

    useEffect(() => {
        localStorage.setItem('venkra-theme', theme);
        localStorage.setItem('venkra-custom-colors', JSON.stringify(customColors));
        document.documentElement.setAttribute('data-theme', theme);
        applyColors(customColors[theme]);
    }, [theme, customColors]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const setCustomColors = (themeMode, colorKey, value) => {
        setCustomColorsState(prev => ({
            ...prev,
            [themeMode]: {
                ...prev[themeMode],
                [colorKey]: value,
            },
        }));
    };

    const resetColors = (themeMode) => {
        setCustomColorsState(prev => ({
            ...prev,
            [themeMode]: { ...defaultColors[themeMode] },
        }));
    };

    const resetAllColors = () => {
        setCustomColorsState({ ...defaultColors });
    };

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme,
            customColors,
            setCustomColors,
            resetColors,
            resetAllColors,
            defaultColors,
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
