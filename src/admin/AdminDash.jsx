import React, { useState } from 'react';
import SliderSettings from './SliderSettings';
import BlogManager from './BlogManager';
import ThemeSettings from './ThemeSettings';
import { AdminLayout } from '../layouts/Layout';

const AdminDash = () => {
  const [activeTab, setActiveTab] = useState('slider');
  return (
    <section className="flex-1 w-full">
      <div>
        {activeTab === 'slider' && <SliderSettings />}
        {activeTab === 'blog' && <BlogManager />}
        {activeTab === 'theme' && <ThemeSettings />}
      </div>
    </section>
  );
}

export default AdminDash;