import React, { useState } from 'react';
import sampleData from '../data/sampleData';
import Modal from './Modal';

const Table: React.FC = () => {
    const [modalData, setModalData] = useState<any | null>(null);

    const openModal = (data: any) => {
        setModalData(data);
    };

    const closeModal = () => {
        setModalData(null);
    };

    return (
        <div className="p-6">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-md">
                    <thead className="mehroon text-white">
                        <tr>
                            <th className="py-2 px-4 text-left">Patient Name</th>
                            <th className="py-2 px-4 text-left">Contact</th>
                            <th className="py-2 px-4 text-left">Parent</th>
                            <th className="py-2 px-4 text-left">Immediate Actions</th>
                            <th className="py-2 px-4 text-left">Due Date</th>
                            <th className="py-2 px-4 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sampleData.map((row, index) => (
                            <tr
                                key={index}
                                className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                            >
                                <td className="py-2 px-4">
                                    <button
                                        onClick={() => openModal(row)}
                                        className="text-blue-500 hover:underline"
                                    >
                                        {row.patientName}
                                    </button>
                                </td>
                                <td className="py-2 px-4">{row.contact}</td>
                                <td className="py-2 px-4">{row.parent}</td>
                                <td className="py-2 px-4">{row.actions}</td>
                                <td className="py-2 px-4">{row.dueDate}</td>
                                <td className="py-2 px-4">
                                    <button
                                        onClick={() => openModal(row)}
                                        className="mehroon text-white px-3 py-1 rounded hover:bg-red-500"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {modalData && <Modal data={modalData} onClose={closeModal} />}
        </div>
    );
};

export default Table;
