interface cardProps {
    title : string;
    description? : string
}

export default function Card({title,description = '...'} : cardProps){
    return  (
        <div className="flex flex-row justify-center items-center p-4">
            <div className="rounded-3xl bg-slate-200 h-[120px] w-full flex flex-col justify-center items-center">
                <div className="text-left text-2xl font-mono">
                    {title}
                </div>

                <div className="text-center p-2">
                    {description}
                </div>
                
            </div>
        </div>
    )
}