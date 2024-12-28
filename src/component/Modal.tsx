import React from 'react';

const Modal: React.FC<{ data: any; onClose: () => void }> = ({ data, onClose }) => (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white w-96 p-6 rounded shadow-lg relative">
            <button
                onClick={onClose}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
            >
                &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
            <div className="text-gray-700">
                <p><strong>Name:</strong> {data.patientName}</p>
                <p><strong>Contact:</strong> {data.contact}</p>
                <p><strong>Parent:</strong> {data.parent}</p>
                <p><strong>Action:</strong> {data.actions}</p>
                <p><strong>Due Date:</strong> {data.dueDate}</p>
            </div>
        </div>
    </div>
);

export default Modal;
