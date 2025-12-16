import React from 'react';

const HowItWorks = () => {
    return (
        <div className="mt-16 bg-white p-8 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">How It Works</h3>
            <p className="text-gray-500 text-sm">Follow these simple steps</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold">1. Post Food</h4>
                    <p className="text-sm text-gray-500">Share food details for others.</p>
                </div>
                <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold">2. Find Food</h4>
                    <p className="text-sm text-gray-500">Browse featured & available items.</p>
                </div>
                <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold">3. Collect Food</h4>
                    <p className="text-sm text-gray-500">Pick up from the donor.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
