import { useState } from 'react';
import { IoClose, IoRefresh } from 'react-icons/io5';
import { useTheme } from '../../context/ThemeContext';
import './theme-panel.css';

const colorLabels = {
    dark: 'Fondo principal',
    darkAlt: 'Fondo secundario',
    light: 'Texto principal',
    lightAlt: 'Texto secundario',
    highlight: 'Acento',
    highlightAlt: 'Acento secundario',
};

const ThemePanel = ({ isOpen, onClose }) => {
    const { theme, customColors, setCustomColors, resetColors } = useTheme();
    const [activeTab, setActiveTab] = useState('dark');

    const handleColorChange = (colorKey, value) => {
        setCustomColors(activeTab, colorKey, value);
    };

    const handleReset = () => {
        resetColors(activeTab);
    };

    if (!isOpen) return null;

    const currentColors = customColors[activeTab];

    return (
        <div className="theme-panel-overlay" onClick={onClose}>
            <div className="theme-panel" onClick={e => e.stopPropagation()}>
                <div className="theme-panel__header">
                    <h3>Personalizar Colores</h3>
                    <button className="theme-panel__close" onClick={onClose}>
                        <IoClose />
                    </button>
                </div>

                <div className="theme-panel__tabs">
                    <button
                        className={`theme-panel__tab ${activeTab === 'dark' ? 'active' : ''}`}
                        onClick={() => setActiveTab('dark')}
                    >
                        Modo Oscuro
                    </button>
                    <button
                        className={`theme-panel__tab ${activeTab === 'light' ? 'active' : ''}`}
                        onClick={() => setActiveTab('light')}
                    >
                        Modo Claro
                    </button>
                </div>

                <div className="theme-panel__colors">
                    {Object.entries(colorLabels).map(([key, label]) => (
                        <div className="theme-panel__color-row" key={key}>
                            <label htmlFor={`color-${key}`}>{label}</label>
                            <div className="theme-panel__color-input">
                                <input
                                    type="color"
                                    id={`color-${key}`}
                                    value={currentColors[key]}
                                    onChange={e => handleColorChange(key, e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={currentColors[key]}
                                    onChange={e => handleColorChange(key, e.target.value)}
                                    placeholder="#000000"
                                    maxLength={7}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="theme-panel__actions">
                    <button className="theme-panel__reset" onClick={handleReset}>
                        <IoRefresh /> Restablecer {activeTab === 'dark' ? 'Oscuro' : 'Claro'}
                    </button>
                </div>

                <div className="theme-panel__preview">
                    <span>Tema actual: <strong>{theme === 'dark' ? 'Oscuro' : 'Claro'}</strong></span>
                </div>
            </div>
        </div>
    );
};

export default ThemePanel;
