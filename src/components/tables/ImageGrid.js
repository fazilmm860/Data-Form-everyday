import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageGrid = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const url = `http://localhost:5000/`
            const response = await axios.get(`${url}images/upload`)
            setImages(response.data);
        } catch (error) {
            console.error('Failed to fetch images', error);
        }
    };

    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {images.map((image, index) => (
                <div key={index} className="bg-gray-200 p-2 rounded">
                    <img src={image.path} alt={`Image ${index}`} className="max-w-full h-auto" />
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
