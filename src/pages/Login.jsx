import { useEffect, useState } from "react";

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleUserInput = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="w-96 p-5 bg-cyan-100 rounded-md shadow-2xl shadow-blue-500 flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-center">Login Page</h1>
        <div>
          <label htmlFor="email">Email:</label>
          <input onChange={handleUserInput}
            placeholder="Enter your email"
            type="email"
            id="email"
            name="email" 
            className="border bg-white border-gray-300 p-2 rounded-md w-full active:outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input onChange={handleUserInput}
            placeholder="Enter your password"
            type="password"
            id="password"
            name="password"
            className="border bg-white border-gray-300 p-2 rounded-md w-full active:outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
        </div>

        <button onClick={() => {
          console.log(formData);
        }}
         className="bg-blue-500 text-white p-2 rounded-md hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 font-semibold active:scale-95">
          Sign In
        </button>

        
<button className="text-center cursor-pointer text-zinc-600 font-bold hover:text-blue-500">Don't have an account?</button>
<button className="text-center cursor-pointer text-zinc-600 font-bold hover:text-blue-500">Forgot Password again?</button>
      </div>
    </div>
  );
};

export default Login;