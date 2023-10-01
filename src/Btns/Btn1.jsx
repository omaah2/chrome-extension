/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
const Btn1 = (props) => {
  const classes = "Btn1" + props.className;
  return <button className={classes}>{props.children}</button>;
};

export default Btn1;
