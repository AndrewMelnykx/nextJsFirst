function LabelForForm(props) {
  const { text, className } = props;
  return <p className={className}>{text}</p>;
}

export default LabelForForm;
