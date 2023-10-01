/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import React, { Fragment } from "react";
// import ReactDOM from "react-dom";

// const Backdrop = (props) => {
//   return <div onClick={props.onClose} className="backdrop"></div>;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div className="modal">
//       <div className="content w-full">{props.children}</div>
//     </div>
//   );
// };

// const portalElement = document.getElementById("sent");

// const Modal = (props) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(
//         <Backdrop onClose={props.onClose} />,
//         portalElement
//       )}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         portalElement
//       )}
//     </Fragment>
//   );
// };

// export default Modal;


// import React, { Fragment } from "react";
// import ReactDOM from "react-dom";


// const Backdrop = (props) => {
//   return <div onClick={props.onClose} className="backdrop"></div>;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div className="modal">
//       <div className="content w-full">{props.children}</div>
//     </div>
//   );
// };

// const portalElement = document.getElementById("sent");

// const Modal = (props) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(
//         <Backdrop onClose={props.onClose} />,
//         portalElement
//       )}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         portalElement
//       )}
//     </Fragment>
//   );
// };

// export default Modal;

import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen
    ? "fixed top-0 left-0 w-full h-full border-2  flex items-center justify-center z-50"
    : "hidden";

  
  return (
    <div className={modalClasses}>
      {/* <div className="modal-container w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 border-2 border-blue-950 overflow-y-auto"> */}
      <div className="modal-content bg-[#F2F4F7] py-4 text-left  w-45 h-96 px-6 overflow-y-hidden rounded-lg">
        {children}
      </div>
      <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
        <svg
          className="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          onClick={onClose}
        >
          <path d="M18 1.583L16.417 0 9 7.417 1.583 0 0 1.583 7.417 9 0 16.417 1.583 18 9 10.583 16.417 18 18 16.417 10.583 9z" />
        </svg>
        <span>Close</span>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Modal;
