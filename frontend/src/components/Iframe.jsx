import React, { useState } from 'react';

const YouTubeEmbedder = () => {
    const [videoId, setVideoId] = useState('');

    // Function to extract video ID from full YouTube link or ID
    const extractVideoId = (input) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/;
        const match = input.match(regex);
        return match ? match[1] : input; // If match found, use ID from URL; else treat as plain ID
    };

    const handleChange = (e) => {
        const input = e.target.value.trim();
        const id = extractVideoId(input);
        setVideoId(id);
    };

    return (
        <div className="space-y-4">
            <input
                type="text"
                placeholder="Enter YouTube link or ID"
                onChange={handleChange}
                className="border border-gray-300 rounded p-2 w-full"
            />

            {videoId && (
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </div>
    );
};

export default YouTubeEmbedder;
