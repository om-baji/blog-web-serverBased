    import { useNavigate } from "react-router-dom";
    import Button from "./Button";

    export default function HomeHeading({ text }: { text: string }) {

        const navigate = useNavigate();

        const handleClick = () => {
            navigate("/login")
        }

        return (
        <div className="flex flex-col justify-center items-center h-screen gap-2">
            <div >
                <div className="p-4">
                
                    <div className="font-bold font-mono text-5xl text-center">
                    {/* <img src={"/logoF.png"} alt="loading.." className="block w-32 h-25 md:w-48 md:h-48 mb-4"/> */}
                    Medium - blog Website
                       
                    </div>
                    <div className="text-slate-500 p-4">
                        {text}
                    </div> 
                </div>
                <div className="p-4">
                    <div className="flex flex-col gap-4">
                    <Button label={"Login"} onClick={handleClick} />
                    <Button label={"Regiter"} onClick={handleClick} />
                    </div>
                   
                </div>
            </div>       
        </div>
        );
    }
    