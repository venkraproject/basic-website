// Single source of truth for all theme colors
// Used by: React app, Vite plugins (redirect pages, linktree), CSS injection

export const defaultColors = {
    dark: {
        dark: '#143425',
        darkAlt: '#324e41',
        light: '#EFEBE6',
        lightAlt: '#cac6c1',
        highlight: '#EFEBE6',
        highlightAlt: '#84775e',
    },
    light: {
        dark: '#EFEBE6',
        darkAlt: '#cac6c1',
        light: '#143425',
        lightAlt: '#324e41',
        highlight: '#c4b28a',
        highlightAlt: '#a89a7d',
    },
};

// Main theme used for static pages (linktree, redirects)
export const mainTheme = defaultColors.dark;
