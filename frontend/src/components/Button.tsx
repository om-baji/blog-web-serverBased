interface buttonInput {
    label : string;
    onClick : () => void
}
export default function Button({label,onClick} : buttonInput){
    return (
        <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {label}
      </button>
    );
}