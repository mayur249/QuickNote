import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { MainScreen } from "../";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listNotes, deleteNoteAction } from "../../actions/notesActions";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

const MyNotes = ({ search }) => {
  // const [notes, setNotes] = useState([]);

  const dispatch = useDispatch();

  const noteCreate = useSelector((state) => state.noteCreate);

  const history = useHistory();

  const noteList = useSelector((state) => state.noteList);

  const userSignin = useSelector((state) => state.userSignin);

  const noteUpdate = useSelector((state) => state.noteUpdate);

  const noteDelete = useSelector((state) => state.noteDelete);

  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const { success: successUpdate } = noteUpdate;

  const { success: successCreate } = noteCreate;

  const { userInfo } = userSignin;

  const { loading, notes, error } = noteList;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
    history.push("/mynotes");
  };

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    successCreate,
    history,
    userInfo,
    successUpdate,
    successDelete,
  ]);

  return (
    <div>
      <MainScreen title={`Welcome back ${userInfo.name}`}>
        <Link to="/createnote">
          <Button
            style={{ marginLeft: 10, marginBottom: 6 }}
            size="lg"
            variant="success"
          >
            Create New Note
          </Button>
        </Link>
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {loadingDelete && <Loading />}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        {notes
          ?.reverse()
          .filter((filteredNote) =>
            filteredNote.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((note) => (
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
                    <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      {note.title}
                    </Accordion.Toggle>
                  </span>
                  <div>
                    <Link to={`/updatenote/${note._id}`}>
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
                        Created on{" "}
                        <cite>{note.createdAt.substring(0, 10)}</cite>
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
