import React, { useState } from 'react';

const App = () => {
    const [residentialAddress, setResidentialAddress] = useState({
        street: '',
        city: '',
        state: '',
        postalCode: '',
    });

    const [permanentAddress, setPermanentAddress] = useState({
        street: '',
        city: '',
        state: '',
        postalCode: '',
    });

    const [copyAddress, setCopyAddress] = useState(false);

    const handleResidentialAddressChange = (field, value) => {
        setResidentialAddress((prevAddress) => ({
            ...prevAddress,
            [field]: value,
        }));

        if (copyAddress) {
            setPermanentAddress((prevAddress) => ({
                ...prevAddress,
                [field]: value,
            }));
        }
    };

    const handleCopyAddressChange = () => {
        setCopyAddress(!copyAddress);
        if (!copyAddress) {
            setPermanentAddress(residentialAddress);
        } else {
            setPermanentAddress({
                street: '',
                city: '',
                state: '',
                postalCode: '',
            });
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                <h1 className="text-2xl font-semibold mb-4">Address Form</h1>

                <div className="mb-4">
                    <label className="block mb-1">Residential Address:</label>
                    <input
                        type="text"
                        placeholder="Street"
                        value={residentialAddress.street}
                        onChange={(e) =>
                            handleResidentialAddressChange('street', e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded mb-2"
                    />
                    <input
                        type="text"
                        placeholder="City"
                        value={residentialAddress.city}
                        onChange={(e) =>
                            handleResidentialAddressChange('city', e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded mb-2"
                    />
                    <input
                        type="text"
                        placeholder="State"
                        value={residentialAddress.state}
                        onChange={(e) =>
                            handleResidentialAddressChange('state', e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded mb-2"
                    />
                    <input
                        type="text"
                        placeholder="Postal Code"
                        value={residentialAddress.postalCode}
                        onChange={(e) =>
                            handleResidentialAddressChange('postalCode', e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="flex items-center mb-1">
                        <input
                            type="checkbox"
                            checked={copyAddress}
                            onChange={handleCopyAddressChange}
                            className="mr-1"
                        />
                        Same as above (Copy Residential Address to Permanent Address)
                    </label>
                </div>

                <h2 className="text-lg font-semibold mb-2">Permanent Address:</h2>
                <input
                    type="text"
                    placeholder="Street"
                    value={permanentAddress.street}
                    onChange={(e) =>
                        setPermanentAddress({
                            ...permanentAddress,
                            street: e.target.value,
                        })
                    }
                    className="w-full px-2 py-1 border rounded mb-2"
                />
                <input
                    type="text"
                    placeholder="City"
                    value={permanentAddress.city}
                    onChange={(e) =>
                        setPermanentAddress({
                            ...permanentAddress,
                            city: e.target.value,
                        })
                    }
                    className="w-full px-2 py-1 border rounded mb-2"
                />
                <input
                    type="text"
                    placeholder="State"
                    value={permanentAddress.state}
                    onChange={(e) =>
                        setPermanentAddress({
                            ...permanentAddress,
                            state: e.target.value,
                        })
                    }
                    className="w-full px-2 py-1 border rounded mb-2"
                />
                <input
                    type="text"
                    placeholder="Postal Code"
                    value={permanentAddress.postalCode}
                    onChange={(e) =>
                        setPermanentAddress({
                            ...permanentAddress,
                            postalCode: e.target.value,
                        })
                    }
                    className="w-full px-2 py-1 border rounded"
                />

                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default App;
