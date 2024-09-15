import InputNormal from "./InputNormal";

export default function SearchBar() {
    return (
        <div className="flex">
            <div className="flex-shrink-0 w-[30%]">
                <img src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png" alt="loading" className="w-full " />
            </div>
            <div className="flex-grow w-[70%]">
                <InputNormal />
            </div>
        </div>
    )
}