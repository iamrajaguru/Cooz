import React, { Component } from "react";
import axios from "axios";
class CookDash extends Component {
  state = {
    myinp: "",
    obj: [],
    del: "",
    allitem:[]
  };
  submitHolding = async e => {
    e.preventDefault();
    console.log("log");
    try {
      let res = await axios.get(
        `http://localhost:4000/post/${this.state.myinp}`
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
        `http://localhost:4000/post/${this.state.del}`
      );
      // this.state.obj=;
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  deleteAllItem = async () => {
    try {
      let res = await axios.delete("http://localhost:4000/deleteitem");
      // this.state.obj=;
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  successAll= async (e)=>{
     try {
       let res = await axios.get("http://localhost:4000/display");
        this.setState({ allitem: res.data });
      
       console.log(this.state.allitem);
     } catch (err) {
       console.log(err);
     }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHolding}>
          <input
            type="text"
            id="mytext"
            onChange={k => this.setState({ myinp: k.target.value })}
            placeholder="what you have?"
          />
          <input type="submit" />
        </form>
        <form onSubmit={this.delHolding}>
          <input
            type="text"
            id="deltext"
            onChange={e => this.setState({ del: e.target.value })}
            placeholder="Delete?"
          />
          <input type="submit" />
        </form>
        {this.state.obj !== "" &&
          this.state.obj.map((v, k) => <p key={k}>{v.item}</p>)}
        <button className="m-5 btn btn-danger" onClick={this.deleteAllItem}>
          Delete
        </button>
        <button className="m-5 btn btn-success" onClick={this.successAll}>
          All
        </button>
        {this.state.allitem.map((v, k) => (
          <p key={k}>{v.item}</p>
        ))}
      </div>
    );
  }
}

export default CookDash;
