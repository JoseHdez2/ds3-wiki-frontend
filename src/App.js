import React from "react";
import { Row, Card } from "react-bootstrap";
import "./styles.css";

import testData from "./data/test";

export default function App() {
  return (
    <div className="App">
      <h1>Dark Souls III</h1>
      <h2>game wiki</h2>
      <Row>
        {testData.items.map((it) => (
          <Item item={it} />
        ))}
      </Row>
    </div>
  );
}

let Item = ({ item }) => (
  <Card style={{ width: "18rem" }} key={item.id} bg="dark">
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <img src={"image/" + item.img} width="100" alt="icon" />
      <Card.Subtitle className="mb-2 text-muted">{item.type}</Card.Subtitle>
      <Card.Text>{item.desc.replaceAll("\n\n", "...")}</Card.Text>
    </Card.Body>
  </Card>
);
