import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import CreateButton from '../components/CreateButton';


interface blogObject {
    id: string;
    Sr_no: number;
    title: string;
    text: string;
    author: string;
    authorId: string;
    createdAt: string;
    updatedAt: string;

}


const BlogPage = () => {

    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const token = query.get('token')
    const authHeader = `Bearer ${token}`

    const [combined, setCombined] = useState<{
        modified: string;
        author: string;
        title: string;
        text: string
    }[]>([])
    
    const [search, setSearch] = useState<string>("")


    // console.log(token)

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await axios.post("http://localhost:3000/api/v1/u/blogs", null, {
                    headers: {
                        Authorization: authHeader
                    }
                })
                const data = response.data

                const arr = data.blogs

                const combinedData = arr.map((blog: blogObject) => ({
                    title: blog.title,
                    text: blog.text,
                    author: blog.author,
                    updatedAt: blog.updatedAt,
                }));

                setCombined(combinedData)
            } catch (e) {
                console.log("Error", e)
            }
            // console.log(combined[0].modified)
        }
        fetchData();
    }, [token])


    return (

        <div className='w-full'>
            <SearchBar onChange={(e : any) => setSearch(e.target.value)}/>
            {/* <SearchBar /> */}
            <div className='flex flex-col justify-center items-center w-full'>
                {
                    combined
                        .filter(blog =>
                        blog.title.toLowerCase().includes(search.toLowerCase()) ||
                        blog.text.toLowerCase().includes(search.toLowerCase())
                        )   
                        .map((item, index) => {
                            return <div className='m-2'>
                                <Card key={index}
                                    title={item.title}
                                    description={item.text}
                                    author={item.author}
                                    modified={item.modified} />
                        </div>
                    })
                }
            </div>
            <CreateButton />
        </div>
    )
}
export default BlogPage;
