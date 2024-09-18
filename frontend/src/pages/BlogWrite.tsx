import Button from "../components/Button";
import Heading from "../components/Heading";
import InputField from "../components/InputField";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BlogWrite() {

    const params = useParams()

    console.log(params)


    const postBlog = async () => {
        // const response = await axios.post("http://localhost:3000/api/v1/u/blog", {
        //     title,
        //     description
        // })

        // console.log(response)
    }

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://i.redd.it/sk6aqjh1ro371.png')` }}>
            <div className="w-full max-w-lg p-8 bg-white bg-opacity-70 rounded-lg shadow-lg backdrop-blur-md">
                <div className="text-center mb-6">
                    <Heading text="Create Blog" />
                </div>
                <div className="space-y-4">
                    <InputField placeholder="Styling is a pain" label="Title" onChange={(e) => setTitle(e.target.value)} />
                    <InputField placeholder="" label="Description" onChange={(e) => setDescription(e.target.value)} size={"description"}/>

                </div>

                <div className="mt-6 space-y-4">
                    <Button label="Post Blog" className="w-full" onClick={postBlog} />
                </div>
            </div>
        </div>
    )
}


