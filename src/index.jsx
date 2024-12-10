import { createRoot } from 'react-dom/client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Correctly import Container and Row
// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";
import { MainView } from './components/main-view';
import 'bootstrap/dist/css/bootstrap.min.css';

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return (
    <Container>
      <div className="my-flix">
        <Row>
          <Col xs={12} md={4} className="bg-primary text-white p-3">
            Column 1
          </Col>
          <Col xs={12} md={4} className="bg-secondary text-white p-3">
            Column 2
          </Col>
          <Col xs={12} md={4} className="bg-success text-white p-3">
            Column 3
          </Col>
        </Row>
        <MainView />
      </div>
    </Container>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);
