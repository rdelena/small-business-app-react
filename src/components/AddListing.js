import React, { Component } from "react";
import { TextField, Button } from "@mui/material";

class AddListing extends Component {
  state = {
    name: "",
    address: "",
    hours: "",
    description: "",
  };

  handleTextChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...this.state };
    payload.id = this.props.listing.length + 1;
    // delete payload.open;
    this.props.addListing(payload);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.listing.length !== this.props.listing.length) {
      this.setState({
        name: "",
        address: "",
        hours: "",
        description: "",
      });
    }
    console.log(this.state);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="create-form"
        style={{ width: "30%" }}
      >
        <TextField
          required
          onChange={this.handleTextChange}
          value={this.state.name}
          name="name"
          label="Name"
          type="text"
          variant="standard"
        />
        <TextField
          required
          onChange={this.handleTextChange}
          value={this.state.address}
          name="address"
          label="Address"
          type="text"
          variant="standard"
        />
        <TextField
          required
          onChange={this.handleTextChange}
          value={this.state.hours}
          name="hours"
          label="Hours (ex. 8AM-9PM)"
          type="text"
          variant="standard"
        />
        <TextField
          required
          onChange={this.handleTextChange}
          value={this.state.description}
          name="description"
          label="Description"
          type="text"
          variant="standard"
        />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    );
  }
}

export default AddListing;
