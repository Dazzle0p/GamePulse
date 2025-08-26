const ShinyText = ({ text, disabled = false, speed = 10, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`inline-block bg-clip-text text-transparent ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };
