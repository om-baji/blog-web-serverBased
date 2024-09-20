interface inputs {
    placeholder: string;
    label?: string;
    type?: string;
    onChange?: (e: any) => void;
    size?: "title" | "description";
}

export default function InputField({ placeholder, type = "text", onChange, label, size = "title" }: inputs) {

    const sizeClasses = {
        title: "p-2 w-full",
        description: "p-4 w-full h-32 resize-none"
    };

    return (
        <div className="mb-6">
            {label && (
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">
                    {label}
                </label>
            )}
            {size === "description" ? (
                <textarea
                    id="default-input"
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block ${sizeClasses[size]}`}
                />
            ) : (
                <input
                    type={type}
                    id="default-input"
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block ${sizeClasses[size]}`}
                />
            )}
        </div>
    );
}
