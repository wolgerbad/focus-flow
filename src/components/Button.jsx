function Button({ type, children, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} className={`btn btn-${type}`}>
      {children}
    </button>
  );
}

export default Button;
