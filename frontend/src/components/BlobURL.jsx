import React, { useRef } from 'react';

const BlobURL = () => {
    const fileInputRef = useRef(null);
    const previewRef = useRef(null);

    const handleFileChange = () => {
        const file = fileInputRef.current.files[0];
        if (file) {
            const objectURL = URL.createObjectURL(file);
            previewRef.current.src = objectURL;

            previewRef.current.onload = () => {
                URL.revokeObjectURL(objectURL); // Clean up memory
            };
        }
    };

    return (
        <div>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} />
            <img ref={previewRef} alt="Preview" width="200" />
        </div>
    );
};

export default BlobURL;
