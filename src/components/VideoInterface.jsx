import React, { useState } from 'react';
import './VideoInterface.css';
import InterfaceCard from './InterfaceCard';

const VideoInterface = () => {
  const [videoLink, setVideoLink] = useState('');
  const [platform, setPlatform] = useState('youtube');
  const [numInterfaces, setNumInterfaces] = useState(1);
  const [interfaces, setInterfaces] = useState([]);

  const handleGenerate = () => {
    if (!videoLink || numInterfaces < 1) {
      alert('Please enter a valid video link and number of interfaces.');
      return;
    }
    const embedLink = getEmbedLink(videoLink, platform);
    if (!embedLink) {
      alert('Invalid video link or platform selected.');
      return;
    }

    const newInterfaces = Array.from({ length: numInterfaces }, (_, i) => ({
      id: i,
      embedLink,
      title: `Video ${i + 1}`,
    }));
    setInterfaces(newInterfaces);
  };

  const getEmbedLink = (link, platform) => {
    try {
      const url = new URL(link);
      if (platform === 'youtube' && url.hostname.includes('youtube.com')) {
        return `https://www.youtube.com/embed/${url.searchParams.get('v')}`;
      } else if (platform === 'youtube' && url.hostname.includes('youtu.be')) {
        return `https://www.youtube.com/embed/${url.pathname.slice(1)}`;
      }
      // Handle additional platforms later
    } catch {
      return null;
    }
  };

  return (
    <div className="video-interface">
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter video link..."
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
        />
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="youtube">YouTube</option>
          <option value="instagram">Instagram</option>
          <option value="twitter">Twitter</option>
          <option value="tiktok">TikTok</option>
        </select>
        <input
          type="number"
          min="1"
          placeholder="Number of Interfaces"
          value={numInterfaces}
          onChange={(e) => setNumInterfaces(Number(e.target.value))}
        />
        <button onClick={handleGenerate}>Generate Interfaces</button>
      </div>
      <div className="interfaces-container">
        {interfaces.map((iface) => (
          <InterfaceCard key={iface.id} {...iface} />
        ))}
      </div>
    </div>
  );
};

export default VideoInterface;
