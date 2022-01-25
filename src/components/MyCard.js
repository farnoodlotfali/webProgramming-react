import { useCallback, useEffect, useState } from "react";
import { Card, Col, Dropdown } from "react-bootstrap";
import "../styles/myCard.css";

const MyCard = ({ title, desc, status, statusNum = 1 }) => {
  const [options, setOptions] = useState(todo);
  const [statusNumber, setStatusNumber] = useState(statusNum);
  const [statusName, setStatusName] = useState(status);

  const changeStatus = useCallback(() => {
    switch (statusNumber) {
      case 1:
        setOptions(todo);
        break;
      case 2:
        setOptions(InProgress);
        break;
      case 3:
        setOptions(inQA);
        break;
      case 4:
        setOptions(blocked);
        break;
      case 5:
        setOptions(done);
        break;
      default:
        setOptions(todo);
        break;
    }
  }, [statusNumber]);

  useEffect(() => {
    changeStatus();
  }, [changeStatus]);

  const handleClick = (id, name) => {
    setStatusNumber(id);
    setStatusName(name);
  };

  return (
    <Col lg="3" className="myCard m-3 ">
      <Card className="text-center h-100">
        <Card.Header className="myCard__header">{title}</Card.Header>
        <Card.Body>{desc}</Card.Body>
        <Card.Footer className="myCard__footer">
          <div className="d-flex justify-content-evenly">
            <span className="myCard__status">status: </span>
            <Dropdown>
              <Dropdown.Toggle
                className="px-5"
                variant="primary"
                id="dropdown-basic"
              >
                {statusName}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {options.items.map((item) => {
                  return (
                    <Dropdown.Item
                      key={item.id}
                      onClick={() => handleClick(item.id, item.name)}
                    >
                      {item.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};
let todo = {
  items: [{ id: 2, name: "InProgress" }],
};
let InProgress = {
  items: [
    { id: 4, name: "Blocked" },
    { id: 3, name: "InQA" },
  ],
};
let inQA = {
  items: [
    { id: 1, name: "toDo" },
    { id: 5, name: "Done" },
  ],
};
let blocked = {
  items: [{ id: 1, name: "toDo" }],
};
let done = {
  items: [{ id: 6, name: "Deployed" }],
};
export default MyCard;
