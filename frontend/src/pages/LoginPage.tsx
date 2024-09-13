
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function LoginPage() {

    const navigate = useNavigate();
    const [username,setUser] = useState("");
    const [pass,setPass] = useState("");

    const click = ()=> {
        
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-2">
            <Heading />
            <InputField placeholder={"Username"} />
            <InputField placeholder={"Password"} type={"password"}/>
            
            <div className="flex flex-col gap-4">
            <div>
                <div className="flex gap-2">
                    New to medium?
                    <Link className="text-blue-400" to={"/register"}>register</Link>  
                </div>     
            </div>
                <Button label={"Login"} className="w-50" onClick={click}/>
            </div>

        </div>
    )
}


