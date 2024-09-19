import { Link, useNavigate } from 'react-router-dom';

interface cardProps {
    title: string;
    description: string;
    author: string;
    modified?: string;
    to?: string;
    onClick?: () => void;
}



export default function Card({ title, description, author, modified, to = "/error", onClick }: cardProps) {

    return (
        <div onClick={() => {
            <Link to={"/blog/1"} />
        }}>
            <Link to={to}
                className="block w-full p-6 
        bg-white border border-gray-200 
        rounded-lg shadow hover:bg-gray-100 
        ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 ">
                    {description}
                </p>
                <p className='pt-2'>
                    <b>Created by - </b> <i>{author}</i>
                </p>
            </Link>
        </div>


    );
}


