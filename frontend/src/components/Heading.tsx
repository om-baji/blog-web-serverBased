
interface props {
    text : string;
}
export default function Heading({text} : props) {
    return (
        <div>
            <div className="p-4">
                <div className="font-bold font-mono text-4xl text-center">
                    {text}
                </div>
            </div>
        </div>
    )
}