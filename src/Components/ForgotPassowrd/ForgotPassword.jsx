import React, { useState } from 'react';

const ForgotPassword = () => {
  const [emailSubmit, setEmailSubmit] = useState(false);
  const [otpValidate, setOtpValidate] = useState(false);
  const [contentValue, setContentValue] = useState("Enter Your Email");

  const handleSubmit = () => {
    if (!emailSubmit) {
      setEmailSubmit(true);
      setContentValue("Enter Your OTP");
    } else if (emailSubmit && !otpValidate) {
      setOtpValidate(true);
      setContentValue("Submit Your New Password");
    }
  };

  return (
    <div className='w-full px-4'>
      {/* Email Input */}
      <div className="mb-5">
        <label className="block mb-1 font-medium">Email</label>
        <input type="email" placeholder="Enter Your Email" className='w-full max-w-md p-2 border border-gray-300 rounded-lg' />
      </div>

      {/* OTP Input */}
      {emailSubmit && (
        <div className="mb-5">
          <label className="block mb-1 font-medium">OTP</label>
          <input type="text" placeholder="Enter OTP" className='w-full max-w-md p-2 border border-gray-300 rounded-lg' />
        </div>
      )}

      {/* New Password Input */}
      {otpValidate && (
        <div className="mb-5">
          <label className="block mb-1 font-medium">New Password</label>
          <input type="password" placeholder="Enter New Password" className='w-full max-w-md p-2 border border-gray-300 rounded-lg' />
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className='bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-white hover:text-slate-800 border border-slate-800 font-semibold transition-all duration-200 mx-auto block'
      >
        {contentValue}
      </button>
    </div>
  );
};

export default ForgotPassword;
