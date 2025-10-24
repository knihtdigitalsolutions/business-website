import React, { useState } from 'react';

export default function ThemeSettings() {
  const [theme, setTheme] = useState('light');
  const [primaryColor, setPrimaryColor] = useState('#0ea5e9'); // sky blue
  const [accentColor, setAccentColor] = useState('#111827'); // black
  const [backgroundColor, setBackgroundColor] = useState('#f3f4f6'); // gray

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Theme Settings</h2>
      <div className="mb-4">
        <label className="block mb-2">Theme Mode</label>
        <select value={theme} onChange={e => setTheme(e.target.value)} className="p-2 rounded">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Primary Color</label>
        <input type="color" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Accent Color</label>
        <input type="color" value={accentColor} onChange={e => setAccentColor(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Background Color</label>
        <input type="color" value={backgroundColor} onChange={e => setBackgroundColor(e.target.value)} />
      </div>
      <button className="bg-sky-500 text-white px-4 py-2 rounded">Save Theme</button>
    </div>
  );
}
