function NameInput(props) {
  const { placeholder, type, className } = props;

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      required
    />
  );
}

export default NameInput;
