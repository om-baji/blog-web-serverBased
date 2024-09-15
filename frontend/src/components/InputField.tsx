interface inputs {
    placeholder: string;
    type? : string;
    onChange? : (e : any)=> void;


}
export default function InputField({ placeholder,type = "text", onChange }: inputs) {
    return (
        <div className="mb-6">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">{placeholder}</label>
            <input 
            type={type}
            id="default-input" 
            onChange={onChange}
            placeholder={placeholder}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
        </div>
    )
}