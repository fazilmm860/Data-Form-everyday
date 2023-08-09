import React, { useState } from 'react';

const App = () => {
    const [isSelfEmployed, setIsSelfEmployed] = useState(false);
    const [isSalary, setIsSalary] = useState(false);
    const [employmentType, setEmploymentType] = useState('');

    const handleSelfEmployedChange = () => {
        setIsSelfEmployed(!isSelfEmployed);
        setIsSalary(false);
        setEmploymentType('');
    };

    const handleSalaryChange = () => {
        setIsSalary(!isSalary);
        setIsSelfEmployed(false);
        setEmploymentType('');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                <h1 className="text-2xl font-semibold mb-4">Employment Type</h1>

                <div className="mb-4">
                    <label className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            checked={isSelfEmployed}
                            onChange={handleSelfEmployedChange}
                            className="mr-2"
                        />
                        Self Employed
                    </label>
                    {isSelfEmployed && (
                        <select
                            value={employmentType}
                            onChange={(e) => setEmploymentType(e.target.value)}
                            className="w-full px-2 py-1 border rounded"
                        >
                            <option value="">Select</option>
                            <option value="pvt">Private Sector</option>
                            <option value="public">Public Sector</option>
                        </select>
                    )}
                </div>

                <div className="mb-4">
                    <label className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            checked={isSalary}
                            onChange={handleSalaryChange}
                            className="mr-2"
                        />
                        Salary
                    </label>
                    {isSalary && (
                        <select
                            value={employmentType}
                            onChange={(e) => setEmploymentType(e.target.value)}
                            className="w-full px-2 py-1 border rounded"
                        >
                            <option value="">Select</option>
                            <option value="pvt">Private Sector</option>
                            <option value="public">Public Sector</option>
                        </select>
                    )}
                </div>

                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default App;
