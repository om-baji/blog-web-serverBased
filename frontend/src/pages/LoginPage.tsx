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

    const click = async ()=> {
        console.log({
            username,
            pass
        })

        try {
            const response = await axios.post("http://localhost:3000/api/v1/u/signin", {
                email : username,
                password : pass
            })
        
            const token = response.data.token

            navigate(`/blogPage/${encodeURIComponent(token)}`)
        } catch (e) {
            navigate("/error")
        }

       
    }   

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-2">
            <Heading />
            <InputField placeholder={"Username"} onChange={(e) => setUser(e.target.value)}/>
            <InputField placeholder={"Password"} type={"password"} onChange={(e) => setPass(e.target.value)}/>
            
            <div className="flex flex-col gap-4">
            <div>
                <div className="flex gap-2">
                    New to medium?
                    <Link className="text-blue-400" to={"/register"}><u>Register</u></Link>  
                </div>     
            </div>
                <Button label={"Login"} className="w-50" onClick={click}/>
            </div>

        </div>
    )
}


