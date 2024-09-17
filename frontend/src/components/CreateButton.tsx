import { useNavigate } from "react-router-dom"



export default function CreateButton() {

    const navigate = useNavigate()

    return (
        <div className="flex fixed h-screen">
            <button
                className="fixed bottom-5 right-5 bg-slate-600 hover:bg-slate-400 text-white font-bold py-4 px-5 text-lg rounded-lg shadow-xl transition-all"
                onClick={() => {
                    navigate("/create")
                }}
            >
                + Create
            </button>
        </div>
    )
}

