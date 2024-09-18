interface buttonInput {
    label : string;
    className? : string;
    onChange? : () => void;
    onClick : () => void;
}
export default function Button({label,onClick,className} : buttonInput){
    return (
        <button
        onClick={onClick}
        className={`px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-500 ${className}`}
      >
        {label}
      </button>
    );
}