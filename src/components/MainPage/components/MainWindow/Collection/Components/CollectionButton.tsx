interface CollectionButtonProps {
  onClick: () => void;
  className: string;
}

function CollectionButton({ onClick, className }: CollectionButtonProps) {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        onClick={onClick}
        className={className}
      >
        <path
          d="M11.6667 5V35M6.66667 5H16.6667C17.5871 5 18.3333 5.74619 18.3333 6.66667V33.3333C18.3333 34.2538 17.5871 35 16.6667 35H6.66667C5.74619 35 5 34.2538 5 33.3333V6.66667C5 5.74619 5.74619 5 6.66667 5ZM34 31.5C34.3333 32.3333 33.8333 33.3333 33 33.6667L29.8333 34.8333C29 35.1667 28 34.6667 27.6667 33.8333L18.5 8.5C18.1667 7.66667 18.6667 6.66667 19.5 6.33333L22.6667 5.16667C23.5 4.83333 24.5 5.33333 24.8333 6.16667L34 31.5Z"
          stroke="#8D8C96"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
}

export default CollectionButton;
