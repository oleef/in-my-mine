import React, { Component, Fragment } from "react";
import Card from "../../card/card";
const BMI = () => {
  return (
    <Fragment>
      <Card size={12} title="BMI" withHeader={true}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="ส่วนสูง (cm)"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="น้ำหนัก (kg)"
              />
            </div>
            <hr />
            <button className="btn btn-lg btn-primary btn-block">คำนวณ</button>
          </div>
          <div className="col-6">
            <h1 className="text-center">BMI</h1>
            <div class="alert alert-success">
              <h5>
                <i class="icon fas fa-ban"></i> Alert!
              </h5>
              Danger alert preview. This alert is dismissable. A wonderful
              serenity has taken possession of my entire soul, like these sweet
              mornings of spring which I enjoy with my whole heart.
            </div>
            <p className="text-center">24</p>
          </div>
        </div>
      </Card>
    </Fragment>
  );
};
export default BMI;
