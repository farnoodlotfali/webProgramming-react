import { Alert, Button, Col, Modal } from "react-bootstrap";
import { Add } from "@mui/icons-material";
import "../styles/allCards.css";
import { useState } from "react";
import Tasks from "./Tasks";

const AllCards = () => {
  const [dataTasks, setdataTasks] = useState(allTask);
  const [cardTitle, setCardTitle] = useState("");
  const [cardDesc, setCardDesc] = useState("");
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const addTask = () => {
    let card = {
      title: cardTitle,
      desc: cardDesc,
      status: "todo",
    };

    setdataTasks((prev) => {
      return [...prev, card];
    });

    setCardTitle("");
    setCardDesc("");
    setShow(false);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="">
      {/* /////////////// Alert ///////////// */}

      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
          style={{ position: "absolute", top: 0, left: "50%", right: 0 }}
        >
          <Alert.Heading>Successful !</Alert.Heading>
          <p>your task has been added. </p>
        </Alert>
      )}
      {/* /////////////// Tasks btn ///////////// */}
      <div>
        <Col
          lg="5"
          className="addBtn d-flex justify-content-center  mx-auto my-4"
          onClick={handleShow}
        >
          <div className="px-5 py-3">
            Add task
            <Add />
          </div>
        </Col>
      </div>
      {/* /////////////// Tasks ///////////// */}
      <Tasks data={dataTasks} />

      {/* /////////////// modal ///////////// */}
      <Modal
        className="allCards__modal"
        centered
        show={show}
        onHide={handleClose}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">ADD TASK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal__title">
            <label>Title</label>
            <input
              placeholder="title..."
              className="w-100 mb-3 px-3 py-2"
              type="text"
              value={cardTitle}
              onChange={(e) => setCardTitle(e.target.value)}
            />
          </div>
          <div className="modal__description">
            <label>Description</label>
            <textarea
              placeholder="description..."
              className="w-100 mb-3 px-3 py-2"
              type="text"
              value={cardDesc}
              onChange={(e) => setCardDesc(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="px-4" variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="px-4" variant="success" onClick={() => addTask()}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const allTask = [
  {
    title: "web programing",
    desc: "lorem rfghjkm dioiwshdois jdnwoshdoiw klnelwndkl adadkq nn ilno;kd  addaddad> fad",
    status: "toDo",
    statusNumber: 1,
  },
  {
    title: "lunch",
    desc: "lorem rfghjkm dioiwshdois jdnwoshdoiw klnelwndkl adadkq nn ilno;kd  addaddad> fad",
    status: "InProgress",
    statusNumber: 2,
  },
];

export default AllCards;
