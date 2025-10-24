import { Home, User, Briefcase, Newspaper, Mail, NewspaperIcon, PaintbrushIcon, HomeIcon, Image } from 'lucide-react';

export const homeNavLinks = [
  { id: 1, name: 'Home', path: '/home', anchor: 'home', icon: <Home size={20} /> },
  { id: 2, name: 'About', path: '/about', anchor: 'about', icon: <User size={20} /> },
  { id: 3, name: 'Services', path: '/services', anchor: 'services', icon: <Briefcase size={20} /> },
  { id: 4, name: 'Portfolio', path: '/portfolio', anchor: 'portfolio', icon: <Newspaper size={20} /> },
  { id: 5, name: 'Contact', path: '/contact', anchor: 'contact', icon: <Mail size={20} /> },
];
// for the side bar navigation items
export const navItems = {
  Admin: [
    { label: 'Dashboard', component: 'Dash', icon: HomeIcon },
    {
      label: 'Slider Settings',
      component: 'SliderSettings',
      icon: Image,
      children: [
        // { label: 'Slider Settings', component: 'CheckIn', icon: MapPinIcon, parent: 'TrackingDash' },
      ],
    },
    { label: 'Blog Manager', component: 'BlogManager', icon: NewspaperIcon },
    { label: 'Theme Settings', component: 'ThemeSettings', icon: PaintbrushIcon },
    // { label: 'User Management', component: 'UserManagement', icon: UsersIcon },
  ],
};