import React, { Component } from "react";
import { connect } from "react-redux";

import { changeHandler, addTodo } from "../js/actions/actionCreator";

class AddToDo extends Component {
  render() {
    return (
      <div className="border border-primary p-4">
        <h1 className="text-right font-weight-bold text-primary m-3">
          To-Do App!!
        </h1>
        <h5 className="text-right text-primary m-3">Add New To-Do</h5>
        <input
          type="text"
          placeholder="Enter new task"
          className="rounded w-100 p-3 m-2 text-primary"
          id="new-task"
          onChange={event => this.props.changeHandler(event)}
          value={this.props.task}
        />
        <div className="d-flex justify-content-end m-2">
          <button
            className="btn btn-primary btn-outline-primary border-primary pl-3 pr-3 btn-lg"
            id="add"
            onClick={this.props.addTodo}
          >
            Add
          </button>
        </div>
      </div>
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
    changeHandler: event => {
      dispatch(changeHandler(event));
    },
    addTodo: () => {
      dispatch(addTodo());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
