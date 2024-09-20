import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface UserData {
    name: string;
    email: string;
    createdAt: string;
}

const Profile: React.FC = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const token = query.get("token");
    const authHeader = token ? `Bearer ${token}` : null;

    const [userData, setUserData] = useState<UserData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get<UserData>(`http://localhost:3000/api/v1/u/profile`, {
                    headers: { Authorization: authHeader }
                });
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setError("Failed to load user data.");
            }
        };

        getUser();
    }, [authHeader]);

    if (!userData) {
        return (
            <div className="flex justify-center items-center h-screen">
                {error ? <div>{error}</div> : <div>Loading...</div>}
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center h-screen bg-[url('https://i.redd.it/sk6aqjh1ro371.png')]">
            <div className="flex w-full max-w-screen-lg mx-auto my-8 bg-cover bg-center relative">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative w-full max-w-screen-lg p-8 bg-white bg-opacity-60 rounded-lg shadow-lg backdrop-blur-md">
                    <div className="flex items-center">
                        <div className="flex-1 p-8 flex flex-col justify-between">
                            <div className="mb-6">
                                <div className="flex items-center justify-between">
                                    <div className="font-bold text-4xl text-gray-900 mb-4">
                                        {userData.name} <span className="tracking-widest text-black md:text-lg "><mark className="p-0.5 rounded-lg bg-white">@medium_user</mark></span>
                                    </div>
                                    <img
                                        className="h-36 w-36 object-cover rounded-full"
                                        src="/profilebg.jpg"
                                        alt="Profile"
                                    />
                                </div>
                                <div className="text-gray-700 text-lg leading-relaxed mt-4">
                                <p className="tracking-widest text-black md:text-lg ">Email: {userData.email}</p>
                        
                                    <p className="tracking-widest text-black md:text-lg ">Joined: {userData.createdAt}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;
