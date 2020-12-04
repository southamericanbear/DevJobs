import React, { useState } from "react";
import ReactTimeAgo from "react-time-ago";
import { Button } from "react-bootstrap";

export default function Job({ job }) {
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
        <Button className="btn-more-info" variant="outline-secondary" size="sm">
          More Info
        </Button>{" "}
      </div>
    </div>
  );
}
