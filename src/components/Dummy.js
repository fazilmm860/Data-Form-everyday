import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/getdata`);
            setData(response.data);
        } catch (error) {
            console.error(`Error in fetching data: ${error}`);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Column Header 1</th>
                        <th className="px-4 py-2">Column Header 2</th>
                        {/* Add more headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                            <td className="border px-4 py-2">{item.column1}</td>
                            <td className="border px-4 py-2">{item.column2}</td>
                            {/* Add more cells based on your data structure */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
