import { Link } from "react-router-dom";
import InputNormal from "./InputNormal";

interface props {
    onChange?: (e: any) => void
    token?: string;
}

export default function SearchBar({ onChange, token }: props) {
    return (
        <div className="flex w-full max-w-screen-lg mx-auto bg-white rounded-lg shadow-md p-6 my-8">
            <div className="flex-shrink-0 w-[30%]">
                <Link to="/">
                    <img
                        src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png"
                        alt="Logo"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </Link>
            </div>

            <div className="flex-grow w-[50%] flex items-center px-4">
                <div className="w-full">
                    <InputNormal onChange={onChange} placeholder="Search..." />
                </div>
            </div>

            <div className="flex-shrink-0 w-[10%] flex justify-center items-center">
                <Link to={`/profile?token=${token}`} className="text-blue-600 font-semibold hover:underline">
                    Profile
                </Link>
            </div>
        </div>
    )
}