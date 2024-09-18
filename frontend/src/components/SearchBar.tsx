import { Link } from "react-router-dom";
import InputNormal from "./InputNormal";

interface props {
    onChange? : (e : any) => void
} 

export default function SearchBar({onChange} : props) {
    return (
        <div className="flex">
            <div className="flex-shrink-0 w-[30%] transform scale-50">
                <Link to={"/"}> <img src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png" alt="loading" className="w-full " /></Link>

            </div>
            <div className="flex-grow w-[70%] flex items-center">
                <div className="w-full">
                    <InputNormal onChange={onChange} placeholder=""/>

                </div>

            </div>
        </div>
    )
}