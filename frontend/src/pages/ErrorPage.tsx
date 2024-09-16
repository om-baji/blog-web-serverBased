interface errorProps {
    code? : string;

}

export default function ErrorPage({code = "404"} : errorProps) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="font-mono text-4xl font-semibold">
                {code} Not Found
            </div>
            
        </div>
    )
}