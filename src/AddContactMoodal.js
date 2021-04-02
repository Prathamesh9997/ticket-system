import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { inputConfig } from "./AppConfig";

function AddContactMoodal(props) {
  const [newObj, setNewObj] = useState({
    contact: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    facebook: "",
    twitter: "",
  });

  const addData = (event) => {
    let type = event.target.name;
    let newVal = event.target.value;
    setNewObj((prevValue) => {
      return {
        ...prevValue,
        [type]: newVal,
      };
    });
  };

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
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
                    onChange={addData}
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
              props.saveData(newObj);
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddContactMoodal;
