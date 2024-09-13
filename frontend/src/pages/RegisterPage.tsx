import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function RegiterPage() {

    const regs = ()=> {

    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen gap-1">
            <Heading />
            <InputField placeholder={"Name"} />
            <InputField placeholder={"email"} />
            <InputField placeholder={"Create a password"} type={"password"}/>
            <InputField placeholder={"re-enter password"} type={"password"}/>
            
            <div className="flex flex-col gap-4">
            <div>
                <div className="flex gap-2">
                    Already have an account?
                    <Link className="text-blue-400" to={"/login"}>Login</Link>  
                </div>     
            </div>
                <Button label={"Login"} className="w-50" onClick={regs}/>
            </div>

        </div>
        </div>
    )
}