import React, { useState } from 'react';

export default function SliderSettings() {
  const [slides, setSlides] = useState([
    { title: 'Innovate with Us', description: 'Empowering your business.', image: '' },
    { title: 'Web & Mobile Development', description: 'Custom applications.', image: '' },
  ]);
  const [transition, setTransition] = useState('fade');
  const [autoPlay, setAutoPlay] = useState(true);
  const [autoPlayInterval, setAutoPlayInterval] = useState(4000);

  const handleSlideChange = (idx, field, value) => {
    setSlides(slides.map((slide, i) => i === idx ? { ...slide, [field]: value } : slide));
  };
  const addSlide = () => setSlides([...slides, { title: '', description: '', image: '' }]);
  const removeSlide = idx => setSlides(slides.filter((_, i) => i !== idx));

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Slider Settings</h2>
      <div className="mb-4">
        <label className="block mb-2">Transition Type</label>
        <select value={transition} onChange={e => setTransition(e.target.value)} className="p-2 rounded">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
      </div>
      <div className="mb-4 flex gap-4 items-center">
        <label>Autoplay</label>
        <input type="checkbox" checked={autoPlay} onChange={e => setAutoPlay(e.target.checked)} />
        <label>Interval (ms)</label>
        <input type="number" value={autoPlayInterval} onChange={e => setAutoPlayInterval(Number(e.target.value))} className="p-2 rounded w-24" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Slides</h3>
      {slides.map((slide, idx) => (
        <div key={idx} className="border p-4 rounded mb-2 flex flex-col gap-2">
          <input type="text" value={slide.title} onChange={e => handleSlideChange(idx, 'title', e.target.value)} placeholder="Title" className="p-2 rounded" />
          <input type="text" value={slide.description} onChange={e => handleSlideChange(idx, 'description', e.target.value)} placeholder="Description" className="p-2 rounded" />
          <input type="text" value={slide.image} onChange={e => handleSlideChange(idx, 'image', e.target.value)} placeholder="Image URL" className="p-2 rounded" />
          <button onClick={() => removeSlide(idx)} className="bg-red-500 text-white px-2 py-1 rounded self-end">Remove</button>
        </div>
      ))}
      <button onClick={addSlide} className="bg-sky-500 text-white px-4 py-2 rounded mt-2">Add Slide</button>
      {/* Save button would persist settings to backend or local storage in a real app */}
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">Save Settings</button>
    </div>
  );
}
