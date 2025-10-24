import React, { useState } from 'react'

const AdminNav = () => {
    const [activeTab, setActiveTab] = useState('slider');
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="flex gap-4 mb-8">
                <button onClick={() => setActiveTab('slider')} className={`px-4 py-2 rounded ${activeTab==='slider'?'bg-sky-500 text-white':'bg-gray-200 dark:bg-gray-800'}`}>Slider Settings</button>
                <button onClick={() => setActiveTab('blog')} className={`px-4 py-2 rounded ${activeTab==='blog'?'bg-sky-500 text-white':'bg-gray-200 dark:bg-gray-800'}`}>Blog Manager</button>
                <button onClick={() => setActiveTab('theme')} className={`px-4 py-2 rounded ${activeTab==='theme'?'bg-sky-500 text-white':'bg-gray-200 dark:bg-gray-800'}`}>Theme Settings</button>
            </div>
        </div>
    )
}

export default AdminNav
