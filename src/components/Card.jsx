function Card({ children, className }) {
  return (
    <div
      className={`${className} card bg-gradient-to-br from-white/50 to-white/10 rounded-lg backdrop-blur-lg max-w-sm relative z-10 border-2 border-t-white/40 border-l-white/40 border-r-white/10 border-b-white/10 group overflow-hidden shadow-sm w-full`}
    >
      <div className="absolute bg-white/20 w-24 -right-48 top-0 bottom-0 -skew-x-[-45deg] -z-10  transition-all duration-500 group-hover:right-full"></div>
      {children}
    </div>
  );
}

function Title({ children, className }) {
  return (
    <div className={`${className} p-5`}>
      <h1 className="text-2xl">{children}</h1>
    </div>
  );
}

function Body({ children, className }) {
  return <div className={`${className} pr-5 pb-5 pl-5`}>{children}</div>;
}

function Footer({ children, className }) {
  return <div className={`${className} p-5`}>{children}</div>;
}

Card.body = Body;
Card.title = Title;
Card.footer = Footer;

export default Card;
