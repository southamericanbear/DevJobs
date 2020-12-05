import React, { useState } from "react";
import ReactTimeAgo from "react-time-ago";
import { Button, Modal } from "react-bootstrap";

export default function Job({ job }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card-container">
      <img className="job-logo" src={job.company_logo} alt={job.company} />
      <div className="job-info">
        <div className="date-and-job-type">
          <ReactTimeAgo className="date" date={job.created_at} locale="en-us" />
          <span className="dot">•</span>
          <span variant="secondary" className="job-type">
            {job.type}
          </span>
        </div>
        <h1 className="job-title">{job.title}</h1>
        <h2 className="job-company">{job.company}</h2>
        <span className="job-location">{job.location}</span>
        <Button
          onClick={handleShow}
          className="btn-more-info"
          variant="outline-secondary"
          size="sm"
        >
          More Info
        </Button>{" "}
      </div>
      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <img
            className="company-logo-modal"
            src={job.company_logo}
            alt={job.company}
          />
          <div className="job-info-header">
            <h4>{job.company}</h4>
            <a href={job.company_url}>Company Site.</a>
          </div>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="date-and-job-type">
            <ReactTimeAgo
              className="date"
              date={job.created_at}
              locale="en-us"
            />
            <span className="dot">•</span>
            <span variant="secondary" className="job-type">
              {job.type}
            </span>
          </div>
          <h2>{job.title}</h2>
          <h3>{job.location}</h3>
          <div dangerouslySetInnerHTML={{ __html: "hello" }} />
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <h2>How to Apply</h2>
          {job.how_to_apply}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
