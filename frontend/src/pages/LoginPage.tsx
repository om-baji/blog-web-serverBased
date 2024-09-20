import Heading from "../components/Heading";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

type InputFields = z.infer<typeof loginSchema>

export default function LoginPage() {

    const form = useForm<InputFields>({
        resolver: zodResolver(loginSchema)
    })
    const { register, handleSubmit, setError ,formState: { isSubmitting, errors, isSubmitSuccessful } } = form

    const navigate = useNavigate();

    const onSubmit = async ({ email, password }: InputFields) => {

        try {
            const response = await axios.post("http://localhost:3000/api/v1/u/signin", {
                email,
                password
            })

            const { token } = response.data

            {token && navigate(`/blogPage?token=${token}`)}


        } catch (e : any) {
            console.log(e)
            setError("root", { message : e.response?.data?.message || "Something went wrong!"})
        }


    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://i.redd.it/sk6aqjh1ro371.png')` }}>
            <div className="w-full max-w-lg p-8 bg-white bg-opacity-70 rounded-lg shadow-lg backdrop-blur-md">
                <div className="text-center mb-6">
                    <Heading text="Welcome Back," />
                </div>
                <div className="space-y-4">

                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                {isSubmitting ? "Loading..." : "Login"}
                            </button>
                            {!isSubmitSuccessful && (
                                <p className="text-red-500 text-sm mb-2 font-semibold">
                                    {errors.root?.message}
                                </p>
                            )}


                            <div className="text-center text-sm text-gray-500">
                                New to Medium?
                                <Link className="text-blue-500 ml-1" to="/register">
                                    <u>Register</u>
                                </Link>
                            </div>
                        </div>

                    </form>

                </div>


            </div>
        </div>



    )
}


