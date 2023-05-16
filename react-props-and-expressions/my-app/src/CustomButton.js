export default function CustomButton(props) {
  const { text, color } = props;
  return <button className={color}>{text}</button>;
}
