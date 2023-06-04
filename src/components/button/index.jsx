export default function Button({ children, className, disabled = false,bgColor }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`flex w-full justify-center rounded-md ${bgColor} px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait ${className}`}
    >
      {children}
    </button>
  );
}
