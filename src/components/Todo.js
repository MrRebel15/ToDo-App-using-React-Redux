import React from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import { removetodo } from "../action/todo";

const Todo = ({ todos, markComplete }) => {
  return (
    <ListGroup className="mt-5 mb-2">
      {todos.map(todo =>(
        <ListGroupItem key={todo.id}>
          {todo.title}
          <span onClick={() => markComplete(todo.id)} className="float-right">
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

const mapToStateProps = (state) => ({
  todos: state.todo,
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (id) => {
    dispatch(removetodo(id))
  }
})

export default connect(mapToStateProps, mapDispatchToProps)(Todo);
