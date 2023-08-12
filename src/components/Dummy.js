import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        residenceAddress: '',
        permanentAddress: '',
        sameAsAbove: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        if (name === 'sameAsAbove') {
            setFormData({
                ...formData,
                sameAsAbove: newValue,
                permanentAddress: newValue ? formData.residenceAddress : formData.permanentAddress,
            });
        } else {
            setFormData({
                ...formData,
                [name]: newValue,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/addData', formData);
            console.log('Data added successfully');
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="residenceAddress">
                        Residence Address
                    </label>
                    <input
                        type="text"
                        name="residenceAddress"
                        value={formData.residenceAddress}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="permanentAddress">
                        Permanent Address
                    </label>
                    <input
                        type="text"
                        name="permanentAddress"
                        value={formData.permanentAddress}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                        disabled={formData.sameAsAbove}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold">
                        <input
                            type="checkbox"
                            name="sameAsAbove"
                            checked={formData.sameAsAbove}
                            onChange={handleChange}
                            className="mr-2 leading-tight"
                        />
                        <span className="text-sm">Same as above</span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
