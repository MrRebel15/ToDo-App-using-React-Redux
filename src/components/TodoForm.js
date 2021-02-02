import React, { useState } from "react";
import {
  Container,
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { v4 } from "uuid";
import { connect } from "react-redux";
import { addTodo } from "../action/todo";

const TodoForm = ({ addTodo }) => {
  const [title, setTilte] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((title = "")) {
      return alert("Please Add Todo");
    }
    const todo = {
      title,
      id: v4(),
    };
    addTodo(todo);

    setTilte("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your Next Todo..!"
            value={title}
            onChange={(e) => setTilte(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="primary">ADD</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};
const mapToStateProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapToStateProps, mapDispatchToProps)(TodoForm);
