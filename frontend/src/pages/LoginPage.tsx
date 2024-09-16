import Button from "../components/Button";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function LoginPage() {

    const navigate = useNavigate();
    const [username, setUser] = useState("");
    const [pass, setPass] = useState("");

    const click = async () => {
        console.log({
            username,
            pass
        })

        try {
            const response = await axios.post("http://localhost:3000/api/v1/u/signin", {
                email: username,
                password: pass
            })

            const token = response.data.token

            navigate(`/blogPage/${encodeURIComponent(token)}`)
        } catch (e) {
            navigate("/error")
        }


    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-100">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                <div className="text-center mb-6">
                    <Heading text="Welcome Back," />
                </div>
                <div className="space-y-4">
                    <InputField placeholder="example@abc.com" label="Email" onChange={(e) => setUser(e.target.value)} />
                    <InputField placeholder="Password" type="password" label="Password" onChange={(e) => setPass(e.target.value)} />
                </div>

                <div className="mt-6 space-y-4">
                    <Button label="Login" className="w-full" onClick={click} />

                    <div className="text-center text-sm text-gray-500">
                        New to Medium?
                        <Link className="text-blue-500 ml-1" to="/register">
                            <u>Register</u>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    )
}


