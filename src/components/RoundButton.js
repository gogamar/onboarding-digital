import { ReactComponent as ArrowIcon } from "../assets/arrow.svg";

export default function RoundButton({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 text-white hover:bg-gray-800 transition duration-300">
      <ArrowIcon className="h-6 w-6" />
    </button>
  );
}
