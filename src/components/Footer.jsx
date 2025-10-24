import React from 'react';
// Assuming 'Links.js' exports these components and the FooterStyles config
import { SocialLinks, QuickLinks, SocialSVGMap, YouTube} from './footerparts/Links';

// ====================================================================
//                             1. MAIN FOOTER STYLES CONFIGURATION 🎨
// ====================================================================
/**
 * Centralized styles object for the main Footer component wrapper.
 * This extends the styling control from the inner components to the wrapper.
 * NOTE: It pulls classes from the imported ComponentStyles for consistency.
 */
import { FOOTER_STYLES } from '../assets/constants/styles';

// ====================================================================
//                             2. DATA STRUCTURE DEFINITIONS 📝
// ====================================================================
// (Interfaces/TypeDefs remain the same, referenced from component file)

/**
 * Interface definition for all footer data.
 * @typedef {Object} FooterData
 * @property {Object} company - Company contact and identity information.
 * // ... other properties
 */


// ====================================================================
//                             3. MAIN FOOTER COMPONENT 🏠
// ====================================================================

/**
 * The main Footer component, accepting appearance and data props.
 * @param {Object} props
 * @param {boolean} props.isDark - Determines the color scheme.
 * @param {string} [props.heading] - Optional override for the main heading.
 * @param {FooterData} props.data - The complete data object to render.
 * @param {string} [props.businessName] - The name of the business for copyright and logo alt.
 * @param {string} [props.logoSrc] - The source URL for the company logo image.
 */
const Footer = ({ isDark, heading, data = {}, businessName = 'KNiHT Digital Solutions', logoSrc = "/kniht-final-logo-transparent.png" }) => {

    const theme = isDark ? FOOTER_STYLES.dark : FOOTER_STYLES.light;
    const { footerData } = data;
    const companyInfo = footerData?.company || {};
    const currentHeading = heading || companyInfo.heading;

    // Default classes to pass to child components
    const linkClass = FOOTER_STYLES.componentOverrides.linkText;
    const headingClass = FOOTER_STYLES.componentOverrides.heading;

    // Helper component for contact links to ensure consistent styling
    const ContactLink = ({ icon, href, text }) => (
        <div className="flex items-start space-x-2">
            <span className={`${theme.contactIcon} w-6 h-6 flex-shrink-0 mt-0.5`}>
                {icon}
            </span>
            <a
                href={href}
                className={`${theme.text} ${theme.linkHover} transition block break-words`}
                target={href.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
            >
                {text}
            </a>
        </div>
    );

    return (
        <footer className={`rounded-t-xl shadow-lg ${theme.bg} py-12 px-4 mt-16 transition-colors duration-300`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Company Info / Branding Section (Col 1) */}
                <div className="lg:col-span-2">
                    {/* LOGO */}
                    <img
                        src={logoSrc}
                        alt={`${businessName} Logo`}
                        className="w-40 h-40 mb-4 object-contain"
                    />
                    {/* HEADING AND TAGLINE */}
                    <h3 className={`text-2xl font-extrabold mb-3 ${theme.logo}`}>
                        {currentHeading}
                    </h3>
                    <p className={`${theme.text} mb-6 text-sm leading-relaxed`}>
                        {companyInfo.tagline}
                    </p>

                    {/* CONTACT LINKS */}
                    <div className="space-y-3 text-sm">
                        <ContactLink
                            icon={SocialSVGMap.mail}
                            href={`mailto:${companyInfo.email}`}
                            text={companyInfo.email}
                        />
                        <ContactLink
                            icon={SocialSVGMap.phone}
                            href={`tel:${companyInfo.phone?.replace(/\s/g, '')}`}
                            text={companyInfo.phone}
                        />
                        {/* Address is not a clickable link but uses the same styling structure */}
                        <div className="flex items-start space-x-2">
                            <span className={`${theme.contactIcon} w-6 h-6 flex-shrink-0 mt-0.5`}>
                                {SocialSVGMap.mapPin}
                            </span>
                            <span className={`${theme.text} block`}>
                                {companyInfo.address}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Quick Links Section (Col 2) - PASSING DYNAMIC STYLES */}
                <QuickLinks 
                    links={footerData?.quickLinks} 
                    linkClass={linkClass}
                    headingClass={headingClass}
                />
                
                {/* Latest from YouTube Section (Col 3) - PASSING DYNAMIC STYLES */}
                <YouTube 
                    data={data?.mockYoutubeData || []} 
                    headingClass={headingClass}
                />
            </div>

            {/* Social Links & Copyright (Full Width Bottom Section) */}
            <div className={`mt-10 pt-6 border-t border-gray-700/50 ${theme.separatorBg} rounded-lg p-5`}>
                <SocialLinks 
                    links={footerData?.socialLinks} 
                    businessName={businessName} 
                    headingClass={headingClass}
                />
            </div>
        </footer>
    );
};


export default Footer;