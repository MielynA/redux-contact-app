import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactAction from "./actions/contactAction";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
      name: this.state.name,
    };
    this.setState({
      name: "",
    });
    this.props.createContact(contact);
  };

  deleteContact = (e, index) => {
    e.preventDefault();
    this.props.deleteContact(index);
  };

  listView(data, index) {
    return (
      <div className="row">
        <div className="col-mid-8 mt-4">
          <li key={index} className="list-group-item ">
            {data.name}
          </li>
        </div>
        <div className="col-mid-4 ">
          <button
            onClick={(e) => this.deleteContact(e, index)}
            className="btn btn-danger mt-2"
          >
            Delete{" "}
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container mt-4">
          <h1>Contacts Application</h1>
          <hr />
          <h3>Add Name</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
              value={this.state.name}
              onSubmit={this.handleSubmit}
            />
            <br />
            <input type="submit" className="btn btn-success" value="ADD" />
          </form>
          <hr />
          <ul className="list-group">
            {this.props.contacts.map((contact, i) => this.listView(contact, i))}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: (contact) => dispatch(contactAction.createContact(contact)),
    deleteContact: (id) => dispatch(contactAction.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
