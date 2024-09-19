import { Link, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z, ZodParsedType } from "zod";
import FormInput from "../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";


const registerSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email(),
    password: z.string().min(6)
})

type registerProps = z.infer<typeof registerSchema>

export default function RegiterPage() {

    const form = useForm<registerProps>({
        resolver : zodResolver(registerSchema)
    })
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful, isSubmitting } } = form

    const navigate = useNavigate()

    const onRegister = async ({name,email,password}: registerProps) => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/u/signup", {
                name,
                email,
                password
            })
            const { token } = response.data
            navigate(`/blogPage?token=${token}`)
        
        } catch (e) {
            console.log(e)
            navigate("/error")
        }
    }


    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://i.redd.it/sk6aqjh1ro371.png')` }}>
            <div className="w-full max-w-lg p-8 bg-white bg-opacity-70 rounded-lg shadow-lg backdrop-blur-md">
                <div className="text-center mb-6">
                    <Heading text="Welcome Back," />
                </div>
                <div className="space-y-4">

                    <form onSubmit={handleSubmit(onRegister)}>
                        <FormInput
                            placeholder={"someone"}
                            type={"text"}
                            label={"Name"}
                            name={"name"}
                            register={register} />
                        {errors.name && (
                            <p className="text-red-500 text-sm mb-2 font-semibold">
                                {errors.name.message}
                            </p>
                        )}
                        <FormInput
                            placeholder={"example@xyz.com"}
                            type={"text"}
                            label={"Email"}
                            name={"email"}
                            register={register} />
                        {errors.email && (
                            <p className="text-red-500 text-sm mb-2 font-semibold">
                                {errors.email.message}
                            </p>
                        )}
                        <FormInput
                            placeholder={"password"}
                            type={"password"}
                            label={"Password"}
                            name={"password"}
                            register={register} />
                        {errors.password && (
                            <p className="text-red-500 text-sm mb-2 font-semibold">
                                {errors.password.message}
                            </p>
                        )}
                        <div className="mt-6 space-y-4">
                            <button disabled={isSubmitting} type="submit" className="w-full px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-500">
                                {isSubmitting ? "Loading..." : "Register"}
                            </button>
                            {!isSubmitSuccessful && (
                                <p className="text-red-500 text-sm mb-2 font-semibold">
                                    {errors.root?.message}
                                </p>
                            )}
                            <div className="text-center text-sm text-gray-500">
                                Already have an account??
                                <Link className="text-blue-500 ml-1" to="/login">
                                    <u>Login</u>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    )
}