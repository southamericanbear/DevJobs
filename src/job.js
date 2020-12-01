import React from "react";
import { Card, Badge } from "react-bootstrap";

export default function job({ job }) {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} -{" "}
              <span className="texted-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary">{job.type}</Badge>
            <Badge variant="secondary">{job.location}</Badge>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
