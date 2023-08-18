import React from 'react';
import { Link } from 'react-router-dom';
const title = [
    {
        choose: "HDFC",
        to: "/form"
    },
    {
        choose: "IDFC",
        to: "/form"
    },
    {
        choose: "Indusand",
        to: "/form"
    },
    {
        choose: "ICICI",
        to: "/form"
    },
    {
        choose: "ICICI",
        to: "/form"
    },
]


export default function HomePage() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="grid gap-1 grid-cols-1 md:grid-cols-5 mt-5 ">
                {title.map((item, index) => (
                    <Link to={item.to}>
                        <div key={index} className="flex flex-col w-60 h-full ml-2 items-center justify-center rounded-lg bg-gray-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                            <div className="flex flex-col justify-center p-6">
                                <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 text-center">
                                    {item.choose}
                                </h5>
                            </div>
                        </div>
                    </Link>
                ))
                }
            </div >
        </div>


    );
}