interface PlayerAddButton {
  className?: string;
  isAdd: boolean;
  onClick: () => void;
}

function PlayerAddButton({ className, isAdd, onClick }: PlayerAddButton) {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {!isAdd && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <g clip-path="url(#clip0_199_163)">
            <path
              d="M6.33301 9.49998H12.6663M9.49967 6.33331V12.6666M17.4163 9.49998C17.4163 13.8722 13.8719 17.4166 9.49967 17.4166C5.12742 17.4166 1.58301 13.8722 1.58301 9.49998C1.58301 5.12773 5.12742 1.58331 9.49967 1.58331C13.8719 1.58331 17.4163 5.12773 17.4163 9.49998Z"
              stroke="#8D8C96"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_199_163">
              <rect
                width="19"
                height="19"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      )}
      {isAdd && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <g clip-path="url(#clip0_225_15)">
            <path
              d="M7.12467 9.49998L8.70801 11.0833L11.8747 7.91665M17.4163 9.49998C17.4163 13.8722 13.8719 17.4166 9.49967 17.4166C5.12742 17.4166 1.58301 13.8722 1.58301 9.49998C1.58301 5.12773 5.12742 1.58331 9.49967 1.58331C13.8719 1.58331 17.4163 5.12773 17.4163 9.49998Z"
              stroke="#8D8C96"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_225_15">
              <rect
                width="19"
                height="19"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  );
}

export default PlayerAddButton;
