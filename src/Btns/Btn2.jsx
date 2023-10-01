/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
const Btn2 = (props) => {
  const classes = "button text-white " + props.className;
  return (
    <button id={props.id} className={classes}>
      {props.children}
    </button>
  );
};

export default Btn2;
