import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ReactTooltip from "react-tooltip";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Ticket(props) {
  const classes = useStyles();
  const [ticketData, setTicketData] = useState({
    id: props.ticket.id,
    subject: props.ticket.subject,
    name: props.ticket.name,
    priority: props.ticket.priority,
    status: props.ticket.status,
  });
  const saveUpdatedTicketData = props.saveUpdatedTicketData;

  const handleChange = (event) => {
    let type = event.target.name;
    let newVal = event.target.value;
    console.log(newVal, type);
    const obj = {
      ...ticketData,
      [type]: newVal,
    };
    setTicketData(obj);
    saveUpdatedTicketData(obj);
  };

  return (
    <div className="mail-data bg-white m-3 p-3">
      <div className="mail-info mt-4 ml-4">
        <h6>
          <strong>{ticketData.subject}</strong>
        </h6>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 32 32"
            data-test-icon="email"
            className="app-icon app-icon--small app-icon--topalign"
          >
            <path d="M2.56 5.333h26.347c1.119 0 2.027.912 2.027 2.036v18.327a2.03 2.03 0 01-2.027 2.036H2.56a2.032 2.032 0 01-2.027-2.036V7.369A2.03 2.03 0 012.56 5.333zm.405 2.444V25.29h25.536V7.777H2.965zm4.323 3.667l8.445 5.657 8.445-5.657c.559-.374 1.314-.223 1.686.339s.222 1.32-.337 1.694l-9.12 6.109a1.21 1.21 0 01-1.349 0l-9.12-6.109c-.559-.374-.71-1.133-.337-1.694s1.128-.713 1.686-.339z"></path>
          </svg>
          <span className="pname ml-1">
            {ticketData.name} .{" "}
            <span className="pmdetails">Created 2 days ago .</span>
          </span>
        </p>
      </div>
      <div className="mail-details mr-4">
        <FormControl className={classes.formControl}>
          <Select
            id="demo-simple-select"
            data-tip
            data-for="priorityTip"
            value={ticketData.priority}
            name="priority"
            onChange={handleChange}
            disableUnderline={true}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Urgent">Urgent</MenuItem>
          </Select>
          <ReactTooltip id="priorityTip" place="left" effect="solid">
            Priority
          </ReactTooltip>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Select
            id="demo-simple-select1"
            data-tip
            data-for="statusTip"
            value={ticketData.status}
            name="status"
            onChange={handleChange}
            disableUnderline={true}
          >
            <MenuItem value="Open">Open</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Resolved">Resolved</MenuItem>
            <MenuItem value="Closed">Closed</MenuItem>
            <MenuItem value="Waiting on Customer">Waiting on Customer</MenuItem>
            <MenuItem value="Waiting on Third Party">
              Waiting on Third Party
            </MenuItem>
          </Select>
          <ReactTooltip id="statusTip" place="left" effect="solid">
            Status
          </ReactTooltip>
        </FormControl>
      </div>
    </div>
  );
}

export default Ticket;
