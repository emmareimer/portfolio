import React from "react";

const Modal = props => {
    if (!props.show){
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4>Modal title</h4>
                </div>
                <div className="modal-body">
                    <p>This is modal content.</p>
                </div>
                <div className="modal-footer">
                    <button className="close">Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;