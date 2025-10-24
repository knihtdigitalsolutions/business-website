import { GitCommit, X } from 'lucide-react';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/x'
import 'react-social-icons/linkedin'
import { generalDarkBgColor, generalLightBgColor } from '../assets/constants/colors';

const Footer = ({ isDark }) => {
  return (
    <footer className={`rounded-md ${ isDark ? `${generalDarkBgColor}` : `${generalLightBgColor}` }  text-black py-10 px-4 mt-16 dark:text-gray-100`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">KNIHT Technologies</h3>
          <p className="text-white/80 mb-4 text-sm sm:text-base">Empowering businesses with innovative digital solutions and expert guidance.</p>
          <div className="flex flex-wrap gap-2 mb-2 text-sm">
            <a href="mailto:info@knihttechnologies.com" className="hover:text-yellow-400 transition">info@knihttechnologies.com</a>
            <span className="hidden sm:inline">|</span>
            <a href="tel:+15551234567" className="hover:text-yellow-400 transition">+1 (555) 123-4567</a>
          </div>
          <p className="text-xs sm:text-sm">123 Tech Lane, Innovation City, 45678</p>
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="/services" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="/portfolio" className="hover:text-yellow-400 transition">Portfolio</a></li>
            <li><a href="/news" className="hover:text-yellow-400 transition">News</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex flex-wrap gap-2 mb-4 text-xs">
            <SocialIcon network="github" url='www.github.com'/>
            <SocialIcon network="linkedin" url='https://linkedin.com/in/nuwabiine-bonaventure'/>
            <SocialIcon network="x" url='https://x.com/knihttech'/>
            {/* <a href="#" className="hover:text-yellow-400 transition">Twitter</a>
            <a href="#" className="hover:text-yellow-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-yellow-400 transition"><SocialIcon /></a>
            <a href="#" className="hover:text-sky-500 text-black dark:text-white"><X size={24} /></a>
            <a href="#" className="hover:text-sky-500 text-black dark:text-white"><LinkedIn size={24} /></a>
            <a href="#" className="hover:text-sky-500 text-black dark:text-white"><SocialIcon network="github" url='www.github.com'/></a> */}
          </div>
          <div className="text-xs text-white/60">&copy; {new Date().getFullYear()} KNIHT Technologies. All rights reserved.</div>
        </div>
      </div>
        
    </footer>
  );
}

export default Footer;
