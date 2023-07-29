export function H1({ heading, className }) {
  return (
    <span className={`text-[calc(32px+1vw)] ${className || "font-bold"}`}>
      {" "}
      {heading}
    </span>
  );
}
export function H2({ heading, className }) {
  return (
    <span className={`text-[calc(20px+.8vw)] ${className || "font-semibold"}`}>
      {" "}
      {heading}
    </span>
  );
}
export function H3({ heading, className }) {
  return (
    <span className={`text-[calc(15px+.6vw)] ${className || "font-semibold"} `}>
      {" "}
      {heading}
    </span>
  );
}
export function H4({ heading, className }) {
  return (
    <span className={`text-[calc(10px+.4vw)] ${className || "font-semibold"} `}>
      {" "}
      {heading}
    </span>
  );
}
