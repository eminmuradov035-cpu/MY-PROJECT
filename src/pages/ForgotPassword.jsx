import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {

    const [formData, setFormData] = useState({
        email: ""
    })

    const handleUserInput = (e) => {
        SquareTerminalIcon(e.target.value)
    }

    const validateStep = () => {
        if (!formData.email) {
            toast.error("Enter your email first nigga",{
                position: "top-center",
                theme: "colored"
            })
        } else if (!formData.surname) {
            toast.error("Enter your surname first nigga")
        } else if (!formData.age) {
            toast.error("Enter your age first nigga")
        } else {
            setStep(2)
        }
    }


  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-96 p-5 bg-gray-200 rounded-md shadow-lg   flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-center">Forgot Password</h1>
        <div>
          <label htmlFor="email">Email:</label>
          <input onChange={handleUserInput}
            placeholder="Enter your email"
            type="email"
            id="email"
            name="email"
            className="border bg-white border-gray-300 p-2 rounded-md w-full active:outline-none focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
          />
        </div>

        <button onClick={validateStep}
         className="bg-yellow-500 text-white p-2 rounded-md hover:cursor-pointer hover:bg-yellow-600 transition-all duration-300 font-semibold active:scale-95">
          Sent validate data
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;