import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ImageUploadForm = () => {
    const [aadharFront, setAadharFront] = useState(null);
    const [aadharBack, setAadharBack] = useState(null);
    const [panCard, setPanCard] = useState(null);
    const [passportSizePhoto, setPassportSizePhoto] = useState(null);
    const [signature, setSignature] = useState(null);


    const handleFileChange = (event, setter) => {
        const file = event.target.files[0];
        setter(file);
    };

    const handleSubmit = async (event) => {


        const formDataImage = new FormData();
        formDataImage.append('aadharFront', aadharFront);
        formDataImage.append('aadharBack', aadharBack);
        formDataImage.append('panCard', panCard);
        formDataImage.append('passportSizePhoto', passportSizePhoto);
        formDataImage.append('signature', signature);

        try {
            const url = `http://localhost:5000/`
            const response = await axios.post(`${url}images/upload`, formDataImage, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Images uploaded successfully', response.data.message);
        } catch (error) {
            console.error('Image upload failed', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="border rounded-lg shadow-lg p-8 bg-white">
                <h1 className="text-2xl font-bold mb-4">Image Upload Form</h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Aadhar Front</label>
                        < input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setAadharFront)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Aadhar Back</label>
                        < input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setAadharBack)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">PAN Card</label>
                        < input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setPanCard)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Passport Size Photo</label>
                        < input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setPassportSizePhoto)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Signature of Customer</label>
                        < input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setSignature)} />
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                        Upload Images
                    </button>

                </form>
            </div>
        </div >


    );
};

export default ImageUploadForm