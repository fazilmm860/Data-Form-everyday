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

        // <Card className="h-full w-full overflow-scroll">
        //     <table className="w-full min-w-max table-auto text-left">
        //         <thead>
        //             <tr>
        //                 {TABLE_HEAD.map((head) => (
        //                     <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
        //                         <Typography
        //                             variant="small"
        //                             color="blue-gray"
        //                             className="font-normal leading-none opacity-70"
        //                         >
        //                             {head}
        //                         </Typography>
        //                     </th>
        //                 ))}
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {images.map((image) => (
        //                 <tr key={images._id}>
        //                     <td className="p-4 border-b border-blue-gray-50">
        //                         <Typography variant="small" color="blue-gray" className="font-normal">
        //                             <img
        //                                 src={`http://localhost:5000/${image.filepath}`} alt={image.filename}

        //                                 style={{ width: '100px', height: 'au', objectFit: 'cover' }}
        //                             />
        //                         </Typography>
        //                     </td>
        //                     <td className="p-4 border-b border-blue-gray-50">
        //                         <Typography variant="small" color="blue-gray" className="font-normal">
        //                             <img src={`http://localhost:5000/${image.filepath}`} alt={image.filename} />
        //                         </Typography>
        //                     </td>
        //                     <td className="p-4 border-b border-blue-gray-50">
        //                         <Typography variant="small" color="blue-gray" className="font-normal">
        //                             <img src={`http://localhost:5000/${image.filepath}`} alt={image.filename}

        //                                 style={{ width: '100px', height: 'auto', objectFit: 'cover' }}
        //                             />
        //                         </Typography>
        //                     </td>
        //                     <td className="p-4 border-b border-blue-gray-50">
        //                         <Typography variant="small" color="blue-gray" className="font-normal">
        //                             <img src={`http://localhost:5000/${image.filepath}`} alt={image.filename} />
        //                         </Typography>
        //                     </td>

        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </Card>
        <div className="p-8">
            <h1 className="text-2xl font-semibold mb-4">Image Gallery</h1>
            <div className="grid grid-cols-3 gap-4">
                {images.map((image) => (
                    <div key={image._id} className="border p-2">
                        <img src={`http://localhost:5000/${image.filepath}`} alt={image.filename} className="max-w-full h-auto" />
                        <p className="mt-2">{image.filename}</p>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default ImageTable
