const generalLightBgColor = 'bg-gradient-to-r from-cyan-200 via-gray-300 to-cyan-200';
const generalDarkBgColor = 'dark:bg-gradient-to-r dark:from-cyan-900 dark:via-gray-900 dark:to-cyan-900';
const generalBgColor = `${generalLightBgColor} ${generalDarkBgColor}`;
export { 
    generalLightBgColor,
    generalDarkBgColor,
    generalBgColor
 };

export const FOOTER_STYLES = {
    // Shared text styles
    heading: "text-base sm:text-lg font-semibold mb-3",
    linkText: "text-cyan-500 hover:text-yellow-600 transition duration-200 block",
    paragraphText: "text-sm sm:text-base text-gray-800 dark:text-gray-300",
    // --- Theme Variables ---
    dark: {
        bg: 'bg-gray-900 text-gray-100',
        text: 'text-gray-300',
        logo: 'text-cyan-300', // For main heading/logo text
        linkHover: 'hover:text-cyan-400',
        separatorBg: 'bg-gradient-to-br from-gray-800 via-gray-700 to-cyan-900',
        contactIcon: 'text-cyan-200',
    },
    light: {
        bg: 'bg-gray-100 text-gray-900',
        text: 'text-gray-600',
        logo: 'text-cyan-500', // For main heading/logo text
        linkHover: 'hover:text-cyan-700',
        separatorBg: 'bg-gradient-to-br from-cyan-200 via-gray-200 to-cyan-300',
        contactIcon: 'text-cyan-800',
    },

    // Company Contact Icons (for main layout, not components)
    contactIcons: {
        base: "flex items-center space-x-2 text-sm sm:text-base text-gray-800 dark:text-gray-300",
        iconSize: "w-5 h-5 flex-shrink-0 text-cyan-500",
    },
    // --- Component Class Overrides (to pass down) ---
    // Override general classes for nested components to maintain theme consistency
    componentOverrides: {
        // Example: Apply the main text color to the link hover in the inner component
        linkText: `${ComponentStyles.paragraphText} hover:!text-cyan-400 dark:hover:!text-cyan-400`,
        heading: 'text-xl font-bold mb-3', // Larger heading for the footer sections
    },
    // Quick Links component colors
    quickLinks: {
        headingColor: "text-cyan-800 dark:bg-cyan-200",
    },
    
    // Social Links component colors
    socialLinks: {
        headingColor: "text-cyan-800 dark:bg-cyan-200",
        iconContainer: "w-10 h-10 rounded-full border border-gray-700 hover:border-cyan-500 bg-gray-700 text-gray-400 hover:text-cyan-400 flex items-center justify-center transition duration-200 shadow-md",
        copyrightColor: "text-sm text-cyan-600 dark:text-cyan-300",
    },

    // YouTube component colors
    youTube: {
        headingColor: "text-cyan-800 dark:bg-cyan-200",
        link: "text-cyan-500 hover:text-yellow-600 transition duration-200 block truncate",
        loadingText: "text-gray-400",
        errorText: "text-red-400 text-sm",
    },
};
//
export const FooterStyles = {
    // Shared text styles
    heading: "text-base sm:text-lg font-semibold mb-3",
    linkText: "text-cyan-500 hover:text-yellow-600 transition duration-200 block",
    paragraphText: "text-sm sm:text-base text-gray-800 dark:text-gray-300",
    
    // Quick Links component colors
    quickLinks: {
        headingColor: "text-cyan-800 dark:bg-cyan-200",
    },
    
    // Social Links component colors
    socialLinks: {
        headingColor: "text-cyan-800 dark:bg-cyan-200",
        iconContainer: "w-10 h-10 rounded-full border border-gray-700 hover:border-cyan-500 bg-gray-700 text-gray-400 hover:text-cyan-400 flex items-center justify-center transition duration-200 shadow-md",
        copyrightColor: "text-sm text-cyan-600 dark:text-cyan-300",
    },

    // YouTube component colors
    youTube: {
        headingColor: "text-cyan-800 dark:bg-cyan-200",
        link: "text-cyan-500 hover:text-yellow-600 transition duration-200 block truncate",
        loadingText: "text-gray-400",
        errorText: "text-red-400 text-sm",
    },

    // Company Contact Icons (for main layout, not components)
    contactIcons: {
        base: "flex items-center space-x-2 text-sm sm:text-base text-gray-800 dark:text-gray-300",
        iconSize: "w-5 h-5 flex-shrink-0 text-cyan-500",
    }
};