import { useForm } from "react-hook-form";
import { z } from "zod";
import Heading from "../components/Heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "react-router-dom";
import axios from "axios";

const schema = z.object({
  title: z.string().min(3),
  text: z.string().min(5)
})

type BlogInput = z.infer<typeof schema>

export default function BlogWrite() {

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const token = queryParams.get('token')
  const authHeader = `Bearer ${token}`

  console.log(queryParams)

  const form = useForm<BlogInput>({
    resolver: zodResolver(schema)
  })
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = form


  const onSubmit = async (data: BlogInput) => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/u/blog", {
        title: data.title,
        text: data.text
      }, {
        headers: {
          Authorization: authHeader
        }
      })
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  return (

    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://i.redd.it/sk6aqjh1ro371.png')` }}>
      <div className="w-full max-w-lg p-8 bg-white bg-opacity-70 rounded-lg shadow-lg backdrop-blur-md">
        <div className="text-center mb-6">
          <Heading text="Create Blog" />
        </div>
        <div className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500"
              {...register("title")}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mb-2 font-semibold">
                {errors.title.message}
              </p>
            )}

            <textarea
              id="text"
              placeholder="Text"
              className="w-full h-[100px] p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500"
              {...register("text")}
            />
            {errors.text && (
              <p className="text-red-500 text-sm mb-2 font-semibold">
                {errors.text.message}
              </p>
            )}

            <div className="mt-6 space-y-4">
              <button disabled={isSubmitting} type="submit" className="w-full px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-500">
                {isSubmitting ? "Posting..." : "Post Blog"}
              </button>
            </div>
            {isSubmitSuccessful && (
              <p className="text-green-600 text-base font-semibold bg-green-100 border border-green-200 p-3 rounded-md mt-2">
                Posted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>


  )
}
