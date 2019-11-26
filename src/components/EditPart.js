import React, { Component } from "react";
import { connect } from "react-redux";

import {
  saveEdit,
  editHandler,
  editinputHandler
} from "../js/actions/actionCreator";

class EditPart extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit task
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className=" w-100 p-3"
                onChange={event => this.props.editinputHandler(event)}
                value={this.props.edittask}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.props.cancelEdit}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={this.props.saveEdit}
              >
                Save changes
              </button>
            </div>
          </div>
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
    editinputHandler: event => {
      dispatch(editinputHandler(event));
    },

    editHandler: index => {
      dispatch(editHandler(index));
    },

    // cancelEdit: () => {
    //   dispatch(cancelEdit());
    // },

    saveEdit: () => dispatch(saveEdit())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditPart);
