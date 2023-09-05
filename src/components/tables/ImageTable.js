import { Button, Card, Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const TABLE_HEAD = ["Aadhar Front Image", "Aadhar Back Image", "PanCard", "Signature"];

const ImageTable = () => {
    const [images, setImages] = useState([]);

    const fetchImages = async () => {
        try {
            const url = `http://localhost:5000/`
            const response = await axios.get(`${url}images/getImage`);
            console.log('Response data:', response.data);
            setImages(response.data);
        } catch (error) {
            console.error(`Error  fetching images: ${error}`);
        }

    };

    useEffect(() => {
        fetchImages()
    }, []);
    return (


        <div className="p-8">
            <h1 className="text-2xl font-semibold mb-4">Image Gallery</h1>
            <div className="grid grid-cols-3 gap-4">
                {images.map((image) => (
                    <div key={image._id} className="border p-2">
                        <img src={`https://everyday-finance-solution-crm-backend.onrender.com/${image.filepath}`} alt={image.filename} className="max-w-full h-auto" />
                        <p className="mt-2">{image.filename}</p>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default ImageTable
