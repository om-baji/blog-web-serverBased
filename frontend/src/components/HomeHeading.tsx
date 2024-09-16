import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function HomeHeading({ text }: { text: string }) {

    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate("/login")
    }

    const handleClick2 = () => {
        navigate("/register")
    }

    return (
        <div className="flex w-full max-w-screen-lg mx-auto my-8 bg-cover bg-center relative" style={{ backgroundImage: `url('https://pbs.twimg.com/card_img/1833684906989309952/irVyNC0s?format=png&name=medium')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative w-full max-w-screen-lg p-8 bg-white bg-opacity-60 rounded-lg shadow-lg backdrop-blur-md">
                <div className="flex">
                    <div className="flex-1 p-8 flex flex-col justify-between">
                        <div className="mb-6">
                            <div className="font-bold text-4xl text-gray-900 mb-4">
                                Start using Medium!
                            </div>
                            <div className="text-gray-700 text-lg leading-relaxed">
                                Discover Medium, a platform where ideas come to life. Founded by Evan Williams in 2012, Medium is a space where voices from around the world share stories, insights, and experiences. Whether you're an avid reader or an aspiring writer, Medium offers a community-driven approach to exploring topics that matter most to you.
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Button label={"Login"} onClick={handleClick1} />
                            <Button label={"Register"} onClick={handleClick2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
