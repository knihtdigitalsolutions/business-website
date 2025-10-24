import React from 'react';

// ====================================================================
//                             1. STYLES CONFIGURATION 🎨
// ====================================================================
/**
 * Centralized styles object for all components.
 * This makes styling dynamic and easy to change in one place.
 * Tailwind CSS classes are used for brevity and ease of integration.
 */
import { FOOTER_STYLES } from '../../assets/constants/styles';

// ====================================================================
//                             2. DATA STRUCTURE DEFINITIONS 📝
// ====================================================================
// (Interfaces/TypeDefs remain the same, good job keeping them clean)

/**
 * Interface definition for a single quick link.
 * @typedef {Object} QuickLink
 * @property {string} title - The display text for the link.
 * @property {string} href - The target URL.
 */

/**
 * Interface definition for a single social link.
 * @typedef {Object} SocialLink
 * @property {string} network - The name of the social network (used by react-social-icons).
 * @property {string} url - The profile URL.
 */

// ====================================================================
//                             3. SVG & ICON MAPS 🖼️
// ====================================================================

/**
 * Map of network string keys to their corresponding SVG elements.
 * Extracted for a cleaner component file structure.
 * @type {Object.<string, JSX.Element>}
 */
export const SocialSVGMap = {
    github: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-1-3.41.28-1.12.28-2.32 0-3.44 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.16-.3 2.36 0 3.44-.73.97-1.18 2.16-1 3.41 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
    ),
    linkedin: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
        </svg>
    ),
    x: ( // X (formerly Twitter)
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    ),
    // Contact SVGs (used if rendering company details separately)
    mail: ( 
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7"/>
        </svg>
    ),
    phone: ( 
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-4.72-4.72 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
    ),
    mapPin: ( 
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
            <path d="M12 18s-4-4.5-4-8a4 4 0 0 1 8 0c0 3.5-4 8-4 8z"/>
            <circle cx="12" cy="10" r="2"/>
        </svg>
    ),
};


// ====================================================================
//                             4. REUSABLE COMPONENTS 🛠️
// ====================================================================

/**
 * Component for rendering quick navigation links with dynamic styles.
 * @param {Object} props
 * @param {QuickLink[]} props.links - The array of links to display.
 * @param {Object} [props.styles=FOOTER_STYLES.quickLinks] - Style overrides.
 * @param {string} [props.headingClass] - Class for the section heading.
 * @param {string} [props.linkClass] - Class for the individual links.
 */
export const QuickLinks = ({ 
    links, 
    styles = FOOTER_STYLES.quickLinks, 
    headingClass = FOOTER_STYLES.heading, 
    linkClass = FOOTER_STYLES.linkText 
}) => (
    <div>
        <h4 className={`${headingClass} ${styles.headingColor}`}>Quick Links</h4>
        <ul className="space-y-3 text-sm sm:text-base">
            {links.map((link) => (
                <li key={link.title}>
                    <a
                        href={link.href}
                        className={linkClass}
                    >
                        {link.title}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

/**
 * Component for rendering social media links with dynamic styles.
 * @param {Object} props
 * @param {SocialLink[]} props.links - The array of social links to display.
 * @param {string} [props.businessName='KNiHT Digital Solutions'] - Name for the copyright.
 * @param {Object} [props.styles=FOOTER_STYLES.socialLinks] - Style overrides.
 * @param {string} [props.headingClass] - Class for the section heading.
 */
export const SocialLinks = ({ 
    links, 
    businessName = 'KNiHT Digital Solutions', 
    styles = FOOTER_STYLES.socialLinks, 
    headingClass = FOOTER_STYLES.heading 
}) => {
    
    // Renders a single icon wrapped in its link tag
    const renderSVGIcon = (network, url) => {
        const SvgComponent = SocialSVGMap[network];

        if (!SvgComponent) {
            return null; // Fallback if SVG for a network is not defined
        }

        return (
            <a 
                key={network}
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.iconContainer} // Dynamic style applied here
                title={`Follow us on ${network}`}
            >
                {SvgComponent}
            </a>
        );
    };

    return (
        <div className="flex flex-col items-center">
            <h4 className={`${headingClass} ${styles.headingColor}`}>
                Follow Us
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
                {links.map((link) => renderSVGIcon(link.network, link.url))}
            </div>
            <div className={styles.copyrightColor}> {/* Dynamic style applied here */}
                &copy; {new Date().getFullYear()} {businessName} | All rights reserved.
            </div>
        </div>
    );
};

/**
 * Component for rendering the latest videos fetched from a simulated API call with dynamic styles.
 * NOTE: The API fetch logic remains for demonstration but is simplified to focus on styling.
 * @param {Object} props
 * @param {Object[]} props.data - Initial mock data for the YouTube videos.
 * @param {Object} [props.styles=FOOTER_STYLES.youTube] - Style overrides.
 * @param {string} [props.headingClass] - Class for the section heading.
 */
export const YouTube = ({ 
    data: initialData, 
    styles = FOOTER_STYLES.youTube,
    headingClass = FOOTER_STYLES.heading
}) => {
    const [videos, setVideos] = React.useState(initialData);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    // Placeholder for the fetchVideos function (removed complex logic for brevity)
    // In a real app, this function would be called via a useEffect hook.
    // const fetchVideos = () => { /* ... fetch logic ... */ };

    return (
        <div>
            <h4 className={`${headingClass} ${styles.headingColor}`}>Latest from YouTube</h4>
            
            {/* Dynamic Loading/Error states */}
            {loading && <p className={styles.loadingText}>Loading videos...</p>}
            {error && <p className={styles.errorText}>{error}</p>}
            
            <ul className="space-y-3 text-sm sm:text-base">
                {videos.map((video, index) => (
                    <li key={index}>
                        <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link} // Dynamic style applied here
                            title={video.title}
                        >
                            {video.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};