import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface inputProps {
    placeholder: string;
    name: string;
    register: UseFormRegister<any>;
    type?: string;
    label?: string;
    rules?: RegisterOptions;

}

const FormInput = ({ placeholder, type = "text", label, register, rules, name }: inputProps) => {
    return (
        <div>
            {label && (
                <label
                    htmlFor={name}
                    className="block text-md font-semibold text-gray-700 mb-1 p-1"
                >
                    {label}
                </label>
            )}

            <input
                id={name}
                type={type}
                placeholder={placeholder}
                {...register(name, rules)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2 transition duration-150 ease-in-out"
            />

        </div>
    )
}

export default FormInput
