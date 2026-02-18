const SIZE_CLASSES = {
  sm: "px-3 py-1.5 text-xs gap-1 md:px-4 md:py-2 md:text-sm md:gap-1.5",
  md: "px-4 py-2 text-sm gap-1.5 md:px-6 md:py-2.5 md:text-base md:gap-2",
  lg: "px-6 py-2.5 text-base gap-2 md:px-8 md:py-3 md:text-lg md:gap-2.5",
};

function PrimaryBtn({
  icon = null,
  children,
  onClick = () => { },
  className = "",
  type = "button",
  size = "md",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: "#00bf63",
        boxShadow: "0 4px 14px rgba(0,191,99,0.35)",
      }}
      className={`
        flex items-center justify-center
        text-white font-semibold tracking-wide rounded-xl
        transition-all duration-200 ease-in-out cursor-pointer
        outline-none focus-visible:ring-4 focus-visible:ring-offset-2
        hover:brightness-110 hover:shadow-lg active:scale-[0.97]
        select-none whitespace-nowrap
        ${SIZE_CLASSES[size] ?? SIZE_CLASSES.md}
        ${className}
      `.trim()}
    >
      {icon && (
        <span className="shrink-0 flex items-center" aria-hidden="true">
          {icon}
        </span>
      )}
      {children && <span>{children}</span>}
    </button>
  );
}

export default PrimaryBtn;