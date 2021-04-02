import React from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const handleClick = props.handleClick;
  return (
    <div>
      <ul className="nav navbar flex-column">
        <li
          className="nav-item logo"
          onClick={() => {
            handleClick("My Dashboard");
          }}
        >
          <Link to="/" className="nav-link">
            <img
              className="nav-logo"
              width="32"
              height="32"
              data-test-id="nav-header-logo"
              alt="Logo preview"
              src="https://indfassetsgreen.freshdesk.com/production/a/assets/images/svg/global-flat/freshdesk-white-ce0ad7c00022376e847279680a88be983e6ad283645629e5fe33e903c9aff895.svg"
              data-identifyelement="27"
            />
          </Link>
        </li>
        <li
          className="nav-item"
          data-tip
          data-for="dashboardTip"
          onClick={() => {
            handleClick("My Dashboard");
          }}
        >
          <Link to="/" className="nav-link">
            <span
              className="nav-icon-wrapper hint--right hint--rounded"
              aria-label="Dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                className="nav-icon"
                focusable="false"
              >
                <path d="M15.733 30.933a15.117 15.117 0 01-10.287-4.01 15.27 15.27 0 01-3.121-4.025 15.148 15.148 0 01-1.483-4.103 15.33 15.33 0 01-.187-4.997 15.132 15.132 0 011.298-4.489A15.254 15.254 0 019.73 1.764a15.063 15.063 0 012.94-.922A15.336 15.336 0 0118.422.77c1.016.181 2.013.467 2.97.852a15.245 15.245 0 017.959 7.355 15.12 15.12 0 011.405 4.442c.248 1.624.233 3.29-.046 4.909a15.103 15.103 0 01-1.36 4.16 15.267 15.267 0 01-7.196 7.024 15.14 15.14 0 01-6.13 1.418l-.294.003zm0-2.026a13.128 13.128 0 008.974-3.53 13.265 13.265 0 002.686-3.506c.577-1.094.998-2.27 1.246-3.482.297-1.45.347-2.95.151-4.417a13.141 13.141 0 00-1.113-3.805 13.229 13.229 0 00-6.742-6.54 13.168 13.168 0 00-5.03-1.065 13.199 13.199 0 00-5.075.942 13.21 13.21 0 00-6.9 6.376 13.107 13.107 0 00-1.217 3.847 13.314 13.314 0 00.054 4.341 13.1 13.1 0 001.199 3.592c.655 1.298 1.526 2.485 2.566 3.501s2.249 1.86 3.564 2.483a13.117 13.117 0 005.639 1.264zm3.737-9.398a4.368 4.368 0 01.594 3.027 4.355 4.355 0 01-.375 1.182 4.388 4.388 0 01-3.845 2.484l-.113.001a4.363 4.363 0 01-1.807-.389 4.422 4.422 0 01-2.103-2.002 4.366 4.366 0 01-.446-2.557 4.364 4.364 0 011.289-2.585 4.387 4.387 0 015.362-.601c1.449-1.491 2.948-2.933 4.419-4.403a1.039 1.039 0 01.37-.235 1.02 1.02 0 01.999.176 1.02 1.02 0 01.327 1.038 1.022 1.022 0 01-.232.422c-1.447 1.512-2.954 2.967-4.439 4.442zm-3.739 4.668c.335-.002.667-.07.972-.208a2.385 2.385 0 001.332-1.621 2.379 2.379 0 00-.148-1.507 2.387 2.387 0 00-1.211-1.196 2.364 2.364 0 10-1.008 4.53l.061.001zm8.963-11.478l-.084-.004a1.017 1.017 0 01-.714-.392c-.051-.066-.089-.139-.129-.212l-.074-.134a9.281 9.281 0 00-.714-1.084 9.177 9.177 0 00-4.206-3.065 9.194 9.194 0 00-4.255-.44 9.08 9.08 0 00-4.9 2.271 9.234 9.234 0 00-1.96 2.518l-.043.072c-.043.061-.052.078-.102.133a1.036 1.036 0 01-.827.328 1.02 1.02 0 01-.903-.757 1.016 1.016 0 01.021-.578c.024-.071.034-.087.066-.154a11.643 11.643 0 01.784-1.267 11.2 11.2 0 015.269-4.007 11.21 11.21 0 015.284-.57 11.1 11.1 0 015.718 2.535 11.233 11.233 0 012.626 3.236l.042.079c.032.067.043.083.066.154a.978.978 0 01.038.496 1.021 1.021 0 01-.756.811c-.072.018-.091.018-.165.027l-.084.003z"></path>
              </svg>
            </span>
          </Link>
        </li>
        <ReactTooltip id="dashboardTip" place="right" effect="solid">
          Dashboard
        </ReactTooltip>
        <li
          className="nav-item"
          data-tip
          data-for="ticketTip"
          onClick={() => {
            handleClick("All Tickets");
          }}
        >
          <Link to="/Tickets" className="nav-link">
            <span
              className="nav-icon-wrapper hint--right hint--rounded"
              aria-label="Tickets"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                className="nav-icon"
                focusable="false"
              >
                <path d="M.267 12.874V10.23a3.824 3.824 0 013.818-3.831h23.831a3.825 3.825 0 013.818 3.831v2.644l-1.018.563c-1.076.595-1.736 1.665-1.736 2.83s.66 2.235 1.736 2.83l1.018.563v2.644a3.824 3.824 0 01-3.818 3.831H4.085a3.825 3.825 0 01-3.818-3.831V19.66l1.018-.563c1.076-.595 1.736-1.665 1.736-2.83s-.66-2.235-1.736-2.83l-1.018-.563zm4.72 3.393c0 1.948-1.107 3.648-2.753 4.558v1.478c0 1.026.829 1.857 1.851 1.857h23.831a1.855 1.855 0 001.851-1.857v-1.478c-1.646-.91-2.753-2.61-2.753-4.558s1.107-3.648 2.753-4.558v-1.478a1.854 1.854 0 00-1.851-1.857H4.085a1.855 1.855 0 00-1.851 1.857v1.478c1.646.91 2.753 2.61 2.753 4.558zm5.981-5.14h10.065a3.825 3.825 0 013.818 3.831v2.6a3.824 3.824 0 01-3.818 3.831H10.968a3.825 3.825 0 01-3.818-3.831v-2.6a3.824 3.824 0 013.818-3.831zm0 1.973a1.855 1.855 0 00-1.851 1.857v2.6c0 1.026.829 1.857 1.851 1.857h10.065a1.855 1.855 0 001.851-1.857v-2.6a1.854 1.854 0 00-1.851-1.857H10.968z"></path>
              </svg>
            </span>
          </Link>
        </li>
        <ReactTooltip id="ticketTip" place="right" effect="solid">
          Tickets
        </ReactTooltip>
        <li
          className="nav-item"
          data-tip
          data-for="contactTip"
          onClick={() => {
            handleClick("All Contacts");
          }}
        >
          <Link to="/Contacts" className="nav-link">
            <span
              className="nav-icon-wrapper hint--right hint--rounded"
              aria-label="Contacts"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 2"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                className="nav-icon"
                focusable="false"
              >
                <path d="M10 3.92a3 3 0 103 3 3 3 0 00-3-3zm0 4.54a1.57 1.57 0 111.57-1.57A1.57 1.57 0 0110 8.46zM16.06 1H3.94A2.94 2.94 0 001 3.94v12.12A2.94 2.94 0 003.94 19h12.12A2.94 2.94 0 0019 16.06V3.94A2.94 2.94 0 0016.06 1zM5.78 17.6l.67-4A1.54 1.54 0 018 12.27h4a1.54 1.54 0 011.52 1.29l.67 4zm11.82-1.54a1.54 1.54 0 01-1.54 1.54h-.42l-.71-4.27A2.93 2.93 0 0012 10.87H8a2.93 2.93 0 00-2.9 2.46l-.74 4.27h-.42a1.54 1.54 0 01-1.54-1.54V3.94A1.54 1.54 0 013.94 2.4h12.12a1.54 1.54 0 011.54 1.54z"></path>
              </svg>
            </span>
          </Link>
        </li>
        <ReactTooltip id="contactTip" place="right" effect="solid">
          Contacts
        </ReactTooltip>
      </ul>
    </div>
  );
}

export default Sidebar;
