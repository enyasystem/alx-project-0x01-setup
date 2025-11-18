import React from "react";

// Define the props that the Button component will accept
interface ButtonProps {
  title: string;       // The text displayed on the button
  styles?: string;     // Optional: custom CSS classes to style the button
}

// Create a functional component with React.FC type
const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    // Render a button element
    // If a custom styles string is provided, use it; otherwise, apply default Tailwind classes
    <button className={styles ? styles : "bg-blue-500 text-white px-4 py-2 rounded"}>
      {title} {/* Display the button title */}
    </button>
  );
};

// Export the component to be used in other parts of the app
export default Button;
