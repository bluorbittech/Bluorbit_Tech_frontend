type Props = { from: "dark" | "light" };

const colors = {
  dark: "#0B1120",
  light: "#F9FAFB",
};

const SectionDivider = ({ from }: Props) => {
  const top = colors[from];
  const bottom = colors[from === "dark" ? "light" : "dark"];

  return (
    <div className="relative z-10 -my-px overflow-hidden leading-none" style={{ background: top }}>
      <svg
        viewBox="0 0 1440 56"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: 56 }}
      >
        <defs>
          <linearGradient id={`div-${from}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={top} />
            <stop offset="100%" stopColor={bottom} />
          </linearGradient>
        </defs>
        <path
          d="M0,0 C360,56 1080,0 1440,40 L1440,56 L0,56 Z"
          fill={`url(#div-${from})`}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
