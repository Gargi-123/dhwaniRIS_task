import React from "react";

import "./App.css";

import CreditCard from "./Components/CreditCard";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div className="App">
        <CreditCard
          onChange={this.onChange}
          length={4}
          maxLength={4}
          label="Enter Card Number"
        />

        <div>{this.state.value}</div>
      </div>
    );
  }
}
