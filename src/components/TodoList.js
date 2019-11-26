import React, { Component } from "react";
import { connect } from "react-redux";

import {
  completeToDo,
  deleteTodo,
  editHandler
} from "../js/actions/actionCreator";

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.tasklist.map((e, i) => (
          <li key={i} className="list-group-item row text-left">
            <button
              className="btn btn-outline-danger m-1 col-2"
              onClick={() => this.props.deleteTodo(i)}
            >
              Remove
            </button>

            <button
              className={
                "btn m-1 col-2 " +
                (this.props.iscompleted[i]
                  ? " btn-secondary"
                  : " btn btn-outline-success")
              }
              onClick={() => this.props.completeToDo(i)}
            >
              {!this.props.iscompleted[i] ? "Complete" : "Undo"}
            </button>
            <span
              className={
                "task-text m-1 col-2 " +
                (this.props.iscompleted[i] ? "text-secondary task-comp" : "")
              }
            >
              {e}
            </span>
            <button
              className="bg-transparent border-0 float-right col-1 m-1"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={() => this.props.editHandler(i)}
            >
              <span>EDIT</span>
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    task: state.task,
    tasklist: state.tasklist,
    iscompleted: state.iscompleted,
    edittask: state.edittask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    completeToDo: index => {
      dispatch(completeToDo(index));
    },

    deleteTodo: index => {
      dispatch(deleteTodo(index));
    },

    editHandler: index => {
      dispatch(editHandler(index));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
