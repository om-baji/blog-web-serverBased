import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


interface blogObject {
    id : string;
    Sr_no : number;
    title : string;
    text : string;
    author : string;
    authorId : string;
    createdAt : string;
    updatedAt : string;

}

const BlogPage = () => {
    
    const params = useParams();
    
    const token = `Bearer ${params.token}`;

    console.log(token)

    useEffect( () => {

        const fetchData = async () => {
           
            const response = await axios.post("http://localhost:3000/api/v1/u/blogs" ,null , {
                headers : {
                    Authorization : token
                }
            })
            const data = response.data

            const arr = data.blogs

            const titles = arr.map( (blog : blogObject) => blog.title)

            console.log(titles)
        }
        fetchData();
    }, [token])

    return (
        <div className="flex text-2xl justify-center items-center h-screen gap-4">
            
                Landed on blog page!
           
        </div>
    );
}
export default BlogPage;
