import { ReactComponent as ArrowRight } from "../assets/arrowRight.svg";

export default function ButtonForward({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 text-white hover:bg-gray-800 transition duration-300">
      <ArrowRight className="h-6 w-6" />
    </button>
  );
}
