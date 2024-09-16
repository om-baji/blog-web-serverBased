import { Link, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";

export default function RegiterPage() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const navigate = useNavigate()

    const regs = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/u/signup", {
                name,
                email,
                password: pass
            })
    
            const data = response.data
    
            const token = data.token
    
            navigate(`/blogPage/${token}`)
        } catch (e) {

        }
        
    }

    return (
         <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://i.redd.it/sk6aqjh1ro371.png')` }}>
            <div className="w-full max-w-lg p-8 bg-white bg-opacity-70 rounded-lg shadow-lg backdrop-blur-md">
                <div className="text-center mb-6">
                    <Heading text="Create an account" />
                </div>
                <div className="space-y-4">
                    <InputField placeholder="Name" label="Enter your name" onChange={(e) => setName(e.target.value)} />
                    <InputField placeholder="Email" label="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                    <InputField placeholder="Create a password" label="Create a password" type="password" onChange={(e) => setPass(e.target.value)} />
                    <InputField placeholder="Re-enter password" label="Re-enter" type="password" />
                </div>

                <div className="mt-6 space-y-4">
                    <Button label="Sign Up" className="w-full" onClick={regs} />

                    <div className="text-center text-sm text-gray-500">
                        Already have an account?
                        <Link className="text-blue-500 ml-1" to="/login">
                            <u>Login</u>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}