import React, { useState } from 'react';

const FormComponent = () => {
    const [isPromptOpen, setIsPromptOpen] = useState(false);

    const handleSaveClick = () => {
        setIsPromptOpen(true);
    };

    const handleConfirmClick = () => {
        // Perform the actual save action here
        setIsPromptOpen(false);
    };

    const handleCancelClick = () => {
        setIsPromptOpen(false);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form className="w-full max-w-md">
                {/* Your form fields go here */}

                <button
                    type="button"
                    onClick={handleSaveClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Save
                </button>

                {isPromptOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                        <div className="bg-white p-4 rounded shadow-md">
                            <p className="mb-4">Are you sure you want to save?</p>
                            <div className="flex justify-end">
                                <button
                                    onClick={handleCancelClick}
                                    className="text-gray-500 mr-2 hover:text-gray-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmClick}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default FormComponent;
