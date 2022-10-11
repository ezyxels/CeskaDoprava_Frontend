type MenuButtonOptions = {
  isActivated: boolean;
  onClick: () => void;
  className?: string;
};

export default function MenuButton({
  isActivated = false,
  onClick,
  className = "",
  ...rest
}: MenuButtonOptions) {
  return (
    <button
      onClick={onClick}
      className={`flex w-24 items-center justify-end ${className}`}
      {...rest}
    >
      <span className="sr-only">Otevřít / zavřít menu</span>
      <span className="mr-2 block text-sm font-medium text-muted">
        {isActivated ? "Zavřít" : "Menu"}
      </span>
      <div className="flex h-[36px] w-[40px] shrink-0 grow-0 flex-col items-center justify-between p-[10px]">
        <span
          aria-hidden="true"
          className={`block h-[2px] w-[28px] transform-gpu rounded-full bg-rich transition duration-300 ease-out-back ${
            isActivated ? "translate-y-[7px] -rotate-45" : ""
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block h-[2px] w-[28px] transform-gpu rounded-full bg-rich transition duration-300 ease-out-back ${
            isActivated ? "translate-x-1 opacity-0" : ""
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block h-[2px] w-[28px] transform-gpu rounded-full bg-rich transition duration-300 ease-out-back ${
            isActivated ? "translate-y-[-7px] rotate-45" : ""
          }`}
        ></span>
      </div>
    </button>
  );
}
