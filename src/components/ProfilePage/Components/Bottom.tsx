function Bottom() {
  return (
    <div className="flex justify-start mt-2">
      <button className="ml-2 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transform rotate-90"
        >
          <circle
            cx="12"
            cy="12"
            r="1"
          ></circle>
          <circle
            cx="12"
            cy="5"
            r="1"
          ></circle>
          <circle
            cx="12"
            cy="19"
            r="1"
          ></circle>
        </svg>
      </button>
    </div>
  );
}

export default Bottom;
