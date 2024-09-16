import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';


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

    const [combined, setCombined] = useState<{ title: string; text: string }[]>([]);

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

            const combinedData = arr.map((blog: blogObject) => ({
                title: blog.title,
                text: blog.text,
            }));            
           
            setCombined(combinedData)
        }
        fetchData();
    }, [token])

    return (
        
        <div className='w-full'>
            <SearchBar />
            <div className='flex flex-col justify-center items-center w-full'>
            {
                combined.map((item,index) => {
                    return <div className='m-2'>
                        <Card key={index} title={item.title} description={item.text}/>
                    </div>
                })
            }
            </div>
            
        </div>
    )
}
export default BlogPage;
