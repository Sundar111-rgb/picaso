import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import * as Icon from "react-bootstrap-icons";

class Crud extends Component {
  constructor() {
    super();
    this.state = {
      employeeData: [
        {
          name: "sundar",
          age: 27,
          email: "kumarsun53@gmail.com",
          mobile: "8294439986",
        },
        {
          name: "xyz",
          age: 22,
          email: "xyz@gmail.com",
          mobile: "6876546666",
        },
        {
          name: "Seamier",
          age: 24,
          email: "Sameerchauhan@gmail.com",
          mobile: "8294434394",
        },
        {
          name: "Sana",
          age: 23,
          email: "sapnarathore@gmail.com",
          mobile: "8294489765",
        },
      ],
      index: 0,
      act: 0,
      show: false,
      buttonName: "Save",
    };
  }

  ShowModal = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    localStorage.setItem(
      "EmployeeData",
      JSON.stringify(this.state.employeeData)
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let employeeData = this.state.employeeData;
    let name = this.refs.txtName.value;
    let age = this.refs.txtAge.value;
    let email = this.refs.txtEmail.value;
    let mobile = this.refs.txtMobile.value;

    if (this.state.act === 0) {
      let newEmployee = {
        name: name,
        age: age,
        email: email,
        mobile: mobile,
      };
      employeeData.push(newEmployee);
    } else {
      let index = this.state.index;
      employeeData[index].name = name;
      employeeData[index].age = age;
      employeeData[index].email = email;
      employeeData[index].mobile = mobile;
      this.setState({ act: 0 });
    }
    this.setState({
      employeeData: employeeData,
      buttonName: "Save",
    });
    this.handleClear(e);
  };

  handleDelete = (i) => {
    let employeeData = this.state.employeeData;
    employeeData.splice(i, 1);
    this.setState({
      employeeData: employeeData,
    });
  };

  handleEdit = (i) => {
    let employeeData = this.state.employeeData;

    this.refs.txtName.value = employeeData[i].name;
    this.refs.txtAge.value = employeeData[i].age;
    this.refs.txtEmail.value = employeeData[i].email;
    this.refs.txtMobile.value = employeeData[i].mobile;

    this.setState({
      employeeData: employeeData,
      act: 1,
      index: i,
      buttonName: "Update",
    });
  };

  handleClear = (e) => {
    e.preventDefault();
    this.refs.txtName.value = "";
    this.refs.txtAge.value = "";
    this.refs.txtEmail.value = "";
    this.refs.txtMobile.value = "";
    this.setState({ buttonName: "Save", act: 0 });
  };

  render() {
    let employeeData = this.state.employeeData;
    return (
      <div className="container" style={{ background: "#3396FF" }}>
        <br />
        <h5 style={{ color: "#B0F3EC" }}>
          <center>React CRUD with Bootstrap</center>
        </h5>
        <br />
        <form ref="myform" className="form-group">
          <form className="form-group">
            <input
              className="form-control"
              style={{ background: "#DBECEA", lineHeight: 1 }}
              type="text"
              ref="txtName"
              placeholder="Name"
            />
          </form>
          <br />
          <form className="form-group">
            <input
              className="form-control"
              style={{ background: "#DBECEA", lineHeight: 1 }}
              type="text"
              ref="txtAge"
              placeholder="Age"
            />
          </form>
          <br />
          <form className="form-group">
            <input
              className="form-control"
              style={{ background: "#DBECEA", lineHeight: 1 }}
              type="text"
              ref="txtEmail"
              placeholder="Email"
            />
          </form>
          <br />
          <form className="form-group">
            <input
              className="form-control"
              style={{ background: "#DBECEA", lineHeight: 1 }}
              type="text"
              ref="txtMobile"
              placeholder="Mobile"
            />
          </form>
          <br />
          <button
            style={{ lineHeight: 1 }}
            className="btn btn-primary"
            onClick={(e) => this.handleSubmit(e)}
          >
            <Icon.Save size={14} />
            &nbsp;{this.state.buttonName}
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            style={{ lineHeight: 1 }}
            className="btn btn-primary"
            onClick={(e) => this.handleClear(e)}
          >
            <Icon.XCircle size={14} />
            &nbsp;Clear
          </button>
        </form>
        <br />
        <table className="table table-hover table-striped">
          <tr>
            <td style={{ color: "#ffffff" }}>Name </td>
            <td style={{ color: "#ffffff" }}>Age </td>
            <td style={{ color: "#ffffff" }}>Email </td>
            <td style={{ color: "#ffffff" }}>Mobile</td>
            <td colSpan={2} style={{ color: "#ffffff" }}>
              Actions
            </td>
          </tr>
          {employeeData.map((data, i) => (
            <tr key={i}>
              <td style={{ color: "#ffffff" }}>{data.name}</td>
              <td style={{ color: "#ffffff" }}>{data.age}</td>
              <td style={{ color: "#ffffff" }}>{data.email}</td>
              <td style={{ color: "#ffffff" }}>{data.mobile}</td>
              <td colSpan={2}>
                <button
                  style={{ lineHeight: 1, backgroundColor: "#DAF7A6" }}
                  className="btn btn-primary"
                  onClick={(e) => this.handleEdit(i)}
                >
                  <Icon.PencilSquare size={15} color="#000000" />
                  &nbsp;<font style={{ color: "#000000" }}>Edit</font>
                </button>
                &nbsp;&nbsp;
                <button
                  style={{ lineHeight: 1, backgroundColor: "red" }}
                  className="btn btn-primary"
                  onClick={(e) => this.handleDelete(i)}
                >
                  <Icon.Trash size={15} color="#000000" />
                  &nbsp;Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Crud;
