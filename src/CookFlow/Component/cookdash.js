import React, { Component } from "react";
import axios from "axios";
import MapHoc from "./mapHoc";
import GridComponent from './gridComponent'
class CookDash extends Component {
  state = {
    userinput: "",
    obj: [],
    allitem: [],
    search: ""
  };
  submitHolding = async e => {
    e.preventDefault();
    console.log(this.state.userinput);
    try {
      let res = await axios.get(
        `http://localhost:4000/post/${this.state.userinput}`
      );
      this.state.obj = res.data;
      this.setState({ obj: res.data });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  delHolding = async e => {
    e.preventDefault();
    try {
      let res = await axios.delete(
        `http://localhost:4000/post/${this.state.userinput}`
      );
      // this.state.obj=;
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  deleteAllItem = async e => {
    try {
      let res = await axios.delete("http://localhost:4000/deleteitem");
      // this.state.obj=;
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  successAll = async e => {
    e.preventDefault();
    try {
      let res = await axios.get("http://localhost:4000/display");
      this.setState({ allitem: res.data });

      console.log(this.state.allitem);
    } catch (err) {
      console.log(err);
    }
  };
  insertItem = async () => {
    try {
      let res = await axios.get(
        `http://localhost:4000/insert/${this.state.userinput}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  tightsearch = async e => {
    console.log(e);

    try {
      let res = await axios.get(`http://localhost:4000/post/${e}`);
      this.setState({ obj: res.data });
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  GridComponenet;
  render() {
    return (
      <div>
        <form className="mt-5">
          <div className="form-group form-group-md d-flex align-items-center justify-content-center">
            <div className="col-sm-5">
              <input
                className="form-control "
                type="text"
                id="mytext"
                onChange={k => this.setState({ userinput: k.target.value })}
                placeholder="Enter Text"
              />
            </div>
          </div>
          <br />
          <br />

          <br />
          <div className="container mt-mb-3">
            <div className="row">
              <div className="col-4">
                {" "}
                <button onClick={this.delHolding} className="btn btn-danger">
                  DeleteItem
                </button>
              </div>
              <div className="col-4">
                {" "}
                <button className="btn btn-danger" onClick={this.deleteAllItem}>
                  DeleteAll
                </button>
              </div>
              <div className="col-4">
                {" "}
                <button className="btn btn-success" onClick={this.successAll}>
                  DisplayAll
                </button>
              </div>
            </div>
          </div>
          <br />
          <div className=" row">
            <div className="col-6">
              <button className=" btn btn-primary" onClick={this.insertItem}>
                Insert
              </button>
            </div>
            <div className="col-6">
              <input
                type="button"
                className="like m-1 btn btn-warning"
                value="Search"
                onClick={this.submitHolding}
              />
            </div>
          </div>
        </form>

        <input
          type="text"
          onChange={e =>
            e.target.value !== "" && this.tightsearch(e.target.value)
          }
          placeholder="Search"
        />
        <hr />
        <div className="container mt-2 align-items-center ">
          <div className="row">
            <div className="col-md-6">
              {this.state.obj !== "" && <MapHoc mapValue={this.state.obj} />}
            </div>
            <div className="col-md-6">
              <MapHoc mapValue={this.state.allitem} />
            </div>
          </div>
        </div>
        <GridComponent/>
      </div>
    );
  }
}

export default CookDash;
