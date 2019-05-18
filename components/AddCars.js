import React from "react";
import { connect } from "react-redux";
import { addCars } from "../actions/actions";

const AddCars = props => {
  let currentMake;
  let currentModel;
  return (
    <div>
      <h3 className="title">Add Vehicle to Display </h3>
      <div className="row form">
        <div className="input-group">
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="make"
              ref={make => (currentMake = make)}
            />
          </div>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              placeholder="model"
              ref={model => (currentModel = model)}
            />
          </div>

          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => {
                props.dispatch(addCars(currentMake.value, currentModel.value));
                currentMake.value = null;
                currentModel.value = null;
              }}
            >
              Add Vehicle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(AddCars);
