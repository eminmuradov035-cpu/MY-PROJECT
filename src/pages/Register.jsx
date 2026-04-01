import { useEffect, useState } from "react";
import {toast} from 'react-toastify'

const Register = () => {

    const [step, setStep] = useState(1)

    const [formData, setFormData] = useState({ name: '', surname: '', email: '', password: '', age: 'null'})

    const handleUserInput = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.valuec
        }))
    }

    const validateStep = () => {
        if (!formData.name) {
            toast.error("Enter your name first",{
                position: "top-center",
                theme: "colored"
            })
        } else if (!formData.surname) {
            toast.error("Enter your surname first")
        } else if (!formData.age) {
            toast.error("Enter your age first")
        } else {
            setStep(2)
        }
    }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <form className="w-96 p-5 bg-sky-100 rounded-md shadow-2xl shadow-blue-500 flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-center">Register Page</h1>

        {
            step === 1 ? <>
            <div>
          <label htmlFor="Name">Name:</label>
          <input required value={formData.name} onChange={handleUserInput}
            placeholder="Enter your Name"
            type="text"
            id="name"
            name="name"
            className="border bg-white border-gray-300 p-2 rounded-md w-full active:outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="Surname">Surname:</label>
          <input required value={formData.surname} onChange={handleUserInput}
            placeholder="Enter your Surname"
            type="text"
            id="surname"
            name="surname"
            className="border bg-white border-gray-300 p-2 rounded-md w-full active:outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="Surname">Age:</label>
          <input required min={1} value={formData.age} onChange={handleUserInput}
            placeholder="Enter your Age"
            type="number"
            id="age"
            name="age"
            className="border bg-white border-gray-300 p-2 rounded-md w-full active:outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
        </div>

        <button onClick={validateStep}
         className="bg-blue-500 text-white p-2 rounded-md hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 font-semibold active:scale-95">
          Next
        </button>
            </> : <>
            <div>
          <label htmlFor="email">Email:</label>
          <input required value={formData.email} onChange={handleUserInput}
            placeholder="Enter your email"
            type="email"
            id="email"
            name="email"
            className="border bg-white border-blue-300 p-2 rounded-md w-full active:outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input required value={formData.password} onChange={handleUserInput}
            placeholder="Enter your password"
            type="password"
            id="password"
            name="password"
            className="border bg-white border-gray-300 p-2 rounded-md w-full active:outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
        </div>

        <button onClick={() => {
            e.preventDefault()
          console.log(formData);
        }}
         className="bg-blue-500 text-white p-2 rounded-md hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 font-semibold active:scale-95">
          Register
        </button>

            </>
        }

<button className="text-center cursor-pointer text-zinc-600 font-bold hover:text-blue-500">Alreadt have an account?</button>

       
      </form>
    </div>
  );
};

export default Register;