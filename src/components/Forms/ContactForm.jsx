import React, { useState } from "react";

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center ">
      {/* Trigger Button */}
      <button
        className="bg-gray-600 rounded-full text-white font-semibold"
        onClick={openModal}
      >
        <div className="flex gap-3 justify-center items-center">
          <span className="text-xl">Download Brochure</span>
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && <>
      
      </>}
    </div>
  );
};

export default ContactForm;
