
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import { useNavigate,Link } from "react-router-dom";

export default function LoginPage() {

    const navigate = useNavigate();

    const click = ()=> {
        // navigate("/register")
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-2">
            <Heading />
            <InputField placeholder={"Username"} />
            <InputField placeholder={"Password"} />
            
            <div className="flex flex-col gap-4">
            <div>
                <div className="flex gap-2">
                    New to medium?
                    <Link className="text-blue-400" to={"/register"}>register</Link>  
                </div>
               
                
            </div>
                <Button label={"Login"} className="w-40"onClick={click}/>
            </div>

        </div>
    )
}

function huh() {

}

