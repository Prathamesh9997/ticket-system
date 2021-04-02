import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { inputConfig } from "./AppConfig";

function UpdateContactModal(props) {
  const modalData = props.modalData;
  const saveUpdatedData = props.saveUpdatedData;
  const [updatedObj, setUpdatedObj] = useState({
    contact: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    facebook: "",
    twitter: "",
  });

  useEffect(() => {
    setUpdatedObj({
      contact: modalData.contact,
      title: modalData.title,
      company: modalData.company,
      email: modalData.email,
      phone: modalData.phone,
      facebook: modalData.facebook,
      twitter: modalData.twitter,
    });
  }, [modalData]);

  const updateData = (event) => {
    let type = event.target.name;
    let newVal = event.target.value;
    setUpdatedObj((prevValue) => {
      return {
        ...prevValue,
        [type]: newVal,
      };
    });
  };

  return (
    <div>
      <Modal show={props.showUpdateModal} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            {inputConfig.map((item, index) => (
              <div key={index} className="form-group row">
                <label htmlFor={item.id} className="col-sm-2 col-form-label">
                  {item.label}
                </label>
                <div className="col-sm-10">
                  <input
                    type={item.type}
                    name={item.id}
                    className="form-control"
                    id={item.id}
                    value={updatedObj[item.id]}
                    onChange={updateData}
                  />
                </div>
              </div>
            ))}
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              saveUpdatedData(updatedObj);
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UpdateContactModal;
