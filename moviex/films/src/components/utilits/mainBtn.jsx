function LoginBtn(props) {
  const { className, type, action, children } = props;

  return (
    <button className={className} type={type} onClick={action}>
      {children}
    </button>
  );
}

export default LoginBtn;
