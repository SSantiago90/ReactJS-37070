function Button({ text, color = "blue", className = "" }) {
  let styles = `bg-${color}-500 rounded-lg font-bold text-white mx-auto ${className}`;

  return <button className={styles}>{text}</button>;
}

export default Button;
