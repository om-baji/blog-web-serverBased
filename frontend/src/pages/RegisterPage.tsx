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
        const response = await axios.post("http://localhost:3000/api/v1/u/signup", {
            name,
            email,
            password: pass
        })

        const data = response.data

        const token = data.token

        navigate(`/blogPage/${token}`)

    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen gap-1 bg-slate-100">
                <Heading text={"Create an account"}/>
                <div className="w-[40%]">
                    <InputField placeholder={"Name"} label={"Enter your name"} onChange={(e) => setName(e.target.value)} />
                    <InputField placeholder={"email"} label={"Enter your email"} onChange={(e) => setEmail(e.target.value)} />
                    <InputField placeholder={"Create a password"} label={"Create a password"} type={"password"} onChange={(e) => setPass(e.target.value)} />
                    <InputField placeholder={"re-enter password"} label={"Re-enter"} type={"password"} />
                </div>


                <div className="flex flex-col gap-4">
                    <div>
                        <div className="flex gap-2">
                            Already have an account?
                            <Link className="text-blue-400" to={"/login"}><u>Login</u></Link>
                        </div>
                    </div>
                    <Button label={"Sign Up"} className="w-50" onClick={regs} />
                </div>

            </div>
        </div>
    )
}