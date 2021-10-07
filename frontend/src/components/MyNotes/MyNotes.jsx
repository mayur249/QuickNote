import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainScreen } from "../";

const MyNotes = () => {
  const notes = [
    {
      _id: "1",
      title: "Day 1 of College",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat necessitatibus deserunt voluptates est magnam nihil esse iusto dolor, explicabo assumenda atque sit optio libero, quis provident praesentium consectetur eos.",
      category: "College",
    },
    {
      _id: "2",
      title: "Day 1 of College",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat necessitatibus deserunt voluptates est magnam nihil esse iusto dolor, explicabo assumenda atque sit optio libero, quis provident praesentium consectetur eos.",
      category: "College",
    },
    {
      _id: "3",
      title: "Day 1 of College",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat necessitatibus deserunt voluptates est magnam nihil esse iusto dolor, explicabo assumenda atque sit optio libero, quis provident praesentium consectetur eos.",
      category: "College",
    },
    {
      _id: "4",
      title: "Day 1 of College",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat necessitatibus deserunt voluptates est magnam nihil esse iusto dolor, explicabo assumenda atque sit optio libero, quis provident praesentium consectetur eos.",
      category: "College",
    },
    {
      _id: "5",
      title: "Day 1 of College",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat necessitatibus deserunt voluptates est magnam nihil esse iusto dolor, explicabo assumenda atque sit optio libero, quis provident praesentium consectetur eos.",
      category: "College",
    },
  ];

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  return (
    <div>
      <MainScreen title="Welcome back Mayuresh">
        <Link to="/createnote">
          <Button
            style={{ marginLeft: 10, marginBottom: 6 }}
            size="lg"
            variant="success"
          >
            Create New Note
          </Button>
        </Link>
        {notes.map((note) => (
          <Accordion key={note._id}>
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "white",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                    {note.title}
                  </Accordion.Toggle>
                </span>
                <div>
                  <Link to={`/note/${note._id}`}>
                    <Button variant="success">Edit</Button>
                  </Link>

                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge className="badge bg-primary">
                      Category - {note.category}
                    </Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p style={{ color: "white" }}>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </MainScreen>
    </div>
  );
};

export default MyNotes;
