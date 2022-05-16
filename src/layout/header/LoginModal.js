import { useEffect, useRef, useState } from "react";

import { Modal } from "bootstrap";

const LoginModal = ({ show, setShow }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (show) showModal();
  }, [show]);

  const showModal = () => {
    const modalEle = modalRef.current;
    const bsModal = new Modal(modalEle, {
      backdrop: false,
      keyboard: false,
    });
    bsModal.show();
  };

  const hideModal = () => {
    const modalEle = modalRef.current;
    const bsModal = Modal.getInstance(modalEle);
    bsModal.hide();
    setShow(false);
  };

  // const [modal, setModal] = useState([]);
  // const parseExceptionModal = useRef();

  // useEffect(() => {
  //   const modal = new Modal(parseExceptionModal.current, { keyboard: false });
  //   setModal(modal);
  //   modal.show();
  // }, []);

  // const handleClose = () => {
  //     modal.hide();
  //     setShow(false);
  // };

  return (
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      ref={modalRef}
      aria-labelledby="parseExceptionModal"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">title</h5>
            <button
              type="button"
              className="btn-close"
              onClick={hideModal}
              aria-label="Close"
            >
              {/*<span aria-hidden="true">&times;</span>*/}
            </button>
          </div>
          <div className="modal-body">are you sure?</div>
          <div className="modal-footer">
            <button
              onClick={hideModal}
              type="button"
              className="btn btn-outline-secondary"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
