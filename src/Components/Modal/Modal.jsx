import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ handleclose, content , header}) => {
  return (
    <div className='w-full h-screen fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className="w-full max-w-xl bg-white rounded-lg p-6 relative mx-4">
        {/* Close Button */}
        <div className="absolute top-4 right-4 cursor-pointer" onClick={handleclose}>
          <CloseIcon sx={{ fontSize: 28 }} />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6 text-center">{header}</h2>

        {/* Modal Content */}
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
