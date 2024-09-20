import axios from "axios"
import { useLocation } from "react-router-dom"

export default function BlogExpand() {

  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const id = query.get("id")
  const token = query.get("token")

  const getData = async () => {
      const response = await axios.get(`http://localhost:3000/blog/${id}`, {
        headers : {
          Authorization : `Bearer ${token}`
        }
      })

      const { blog } = response.data
      {blog }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl ">Landed on expanded blog page!</h1>
    </div>
  )
}
