import React from "react";
import { useState, useEffect } from "react";
import AddContactMoodal from "./AddContactMoodal";
import UpdateContactModal from "./UpdateContactModal";

function Contacts() {
  let url = "https://6065c6c1b8fbbd00175675a3.mockapi.io/contacts";
  const [contactsData, setContactsData] = useState([]);
  const [id, setId] = useState();
  const [modalData, setModalData] = useState({
    contact: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    facebook: "",
    twitter: "",
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  //fetch data
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setContactsData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  //modal show/hide functions
  const handleClose = () => {
    setShowAddModal(false);
    setShowUpdateModal(false);
  };
  const handleShow = () => setShowAddModal(true);
  const handleShowUpdate = (id) => {
    setId(id);
    setShowUpdateModal(true);
    setModalData(contactsData[id - 1]);
  };

  // save newly entered data
  const saveData = async (newObj) => {
    setShowAddModal(false);
    if (newObj.contact !== "" && newObj.email !== "") {
      const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newObj),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const result = await resp.json();
    }
    getData();
  };

  //save updated data
  const saveUpdatedData = async (updatedObj) => {
    setShowUpdateModal(false);
    if (updatedObj.contact !== "" && updatedObj.email !== "") {
      const resp = await fetch(url + "/" + id, {
        method: "PUT",
        body: JSON.stringify(updatedObj),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const result = await resp.json();
    }
    getData();
  };
  return (
    <div className="contactDiv ml-4">
      <button className="btn btn-secondary newContact" onClick={handleShow}>
        New Contact
      </button>
      <div>
        <div className="rowContainer header bg-light">
          <div className="col16 p-3">Contact</div>
          <div className="col16 p-3">Title</div>
          <div className="col12 p-3">Company</div>
          <div className="col16 p-3">Email Address</div>
          <div className="col12 p-3">Work Phone</div>
          <div className="col10 p-3">Facebook</div>
          <div className="col12 p-3">Twitter</div>
          <div className="col5 p-3"></div>
        </div>
        <div className="rowWrapper">
          {contactsData.map((item) => {
            return (
              <div key={item.id} className="rowContainer bg-white">
                <div className="col16 p-3">{item.contact}</div>
                <div className="col16 p-3">{item.title}</div>
                <div className="col12 p-3">{item.company}</div>
                <div className="col16 p-3">{item.email}</div>
                <div className="col12 p-3">{item.phone}</div>
                <div className="col10 p-3">{item.facebook}</div>
                <div className="col12 p-3">{item.twitter}</div>
                <div className="col5 p-3">
                  <div className="dropdown">
                    <div
                      className="test"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    ></div>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <div
                        className="dropdown-item"
                        onClick={() => {
                          handleShowUpdate(item.id);
                        }}
                      >
                        <i className="fa fa-edit fa-fw mr-2"></i>
                        Edit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <AddContactMoodal
        show={showAddModal}
        saveData={saveData}
        handleClose={handleClose}
      />
      <UpdateContactModal
        showUpdateModal={showUpdateModal}
        handleClose={handleClose}
        modalData={modalData}
        saveUpdatedData={saveUpdatedData}
      />
    </div>
  );
}

export default Contacts;
