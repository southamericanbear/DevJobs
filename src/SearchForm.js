import React from "react";
import { Form, Col, InputGroup } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col} className="title">
          <InputGroup className="just-for-media">
            <InputGroup.Prepend className="prepend-input">
              <Form.Label className="search-icon-label">
                <SearchIcon className="search-icon" />
              </Form.Label>
            </InputGroup.Prepend>
            <Form.Control
              className="input-field "
              onChange={onParamChange}
              value={params.description}
              name="description"
              type="text"
              placeholder="Filter by title, companies, expertise..."
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} className="location">
          <InputGroup>
            <InputGroup.Prepend className="prepend-input">
              <Form.Label>
                <LocationOnIcon className="location-icon" />
              </Form.Label>
            </InputGroup.Prepend>
            <Form.Control
              className="input-field "
              onChange={onParamChange}
              value={params.location}
              name="location"
              type="text"
              placeholder="Filter by location..."
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2 full-time">
          <Form.Check
            onChange={onParamChange}
            value={params.full_time}
            name="full_time"
            id="full-time"
            label="Full Time Only"
            type="checkbox"
            className="ml-3 mr-2 check-container"
          />
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
