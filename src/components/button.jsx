const Button = ({ type, clickHandler, children }) => {
  return (
    <button type={type} onClick={clickHandler} className="button">
      {children}
    </button>
  );
};

export default Button;
