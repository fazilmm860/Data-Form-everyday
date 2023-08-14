import React, { useState } from 'react';
import axios from 'axios';


const ResidenceAddressForm = ({ formData, setFormData }) => {
    const handleResidenceChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            residenceAddress: {
                ...prevData.residenceAddress,
                [name]: value,
            },
        }));
    };

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Residence Address</h2>
            <input
                type="text"
                name="flat"
                value={formData.residenceAddress.flat}
                onChange={handleResidenceChange}
                placeholder="Flat"
                className="mb-2 p-2 border rounded w-full"
            />
            {/* Add other input fields for residence address */}
        </div>
    );
};

const PermanentAddressForm = ({ formData, setFormData, sameAsAbove }) => {
    const handlePermanentChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            permanentAddress: {
                ...prevData.permanentAddress,
                [name]: value,
            },
        }));
    };

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Permanent Address</h2>
            <input
                type="text"
                name="flat"
                value={formData.permanentAddress.flat}
                onChange={handlePermanentChange}
                placeholder="Flat"
                className="mb-2 p-2 border rounded w-full"
                disabled={sameAsAbove}
            />
            {/* Add other input fields for permanent address */}
        </div>
    );
};

const AddressForm = () => {
    const [formData, setFormData] = useState({
        date: '',
        exeName: '',
        dseCode: '',
        cardSelect: '',
        surrogate: '',
        custName: {
            firstName: '',
            middleName: '',
            lastName: ''
        },
        dateOfBirth: '',
        gender: '',
        maritalStatus: '',
        spouseName: '',
        qualification: '',
        other: '',
        panNumber: '',
        mobileNumber: '',
        altMobileNumber: '',
        email: '',
        residenceAddress: {
            flat: '',
            street: '',
            city: '',
            state: '',
            landMark: '',
            pincode: ''
        },
        sameAsAbove: false,
        permanentAddress: {
            flat: '',
            street: '',
            city: '',
            state: '',
            landMark: '',
            pincode: ''
        },
        periodResidence: '',
        residenceIs: '',
        companyName: '',
        companyAddress: {
            flat: '',
            street: '',
            city: '',
            state: '',
            landMark: '',
            pincode: ''
        },
        designation: '',
        telNo: '',
        officeEmail: '',
        employmentType: '',
        employmentDetails: '',
        hdfcAcc: '',
        otherAcc: '',
        remark: ''
    })
    const [sameAsAbove, setSameAsAbove] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/saveFormData', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            {/* Other form fields */}
            <ResidenceAddressForm formData={formData} setFormData={setFormData} />

            <div className="mt-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        checked={sameAsAbove}
                        onChange={() => setSameAsAbove(!sameAsAbove)}
                        className="mr-2"
                    />
                    Same as above
                </label>
            </div>

            <PermanentAddressForm formData={formData} setFormData={setFormData} sameAsAbove={sameAsAbove} />

            <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
};

export default AddressForm;
