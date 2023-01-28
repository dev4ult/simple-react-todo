export default function Button({ text, children, className, type = 'button', ...props }) {
  return (
    <button {...props} type={type} className={`${className} rounded py-2 px-4 flex items-center gap-2 font-semibold uppercase`}>
      {text || children}
    </button>
  );
}
