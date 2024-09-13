interface inputs {
    placeholder: string;

}
export default function InputField({ placeholder }: inputs) {
    return (
        <div className="mb-6">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">{placeholder}</label>
            <input type="text" id="default-input" 
            placeholder={placeholder}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
        </div>
    )
}