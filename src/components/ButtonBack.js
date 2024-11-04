import { ReactComponent as ArrowLeft } from "../assets/arrowLeft.svg";

export default function ButtonBack({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-gray-700 border hover:bg-white-200 transition duration-300">
      <ArrowLeft className="h-6 w-6" />
    </button>
  );
}