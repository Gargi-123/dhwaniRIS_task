import React from "react";
import Card from "./card";
import PropTypes from "prop-types";

export default class InputBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.values = new Array(this.props.length).fill("");
    this.elements = [];
    this.state = {
      submited: false,
      cardData: [],
    };
  }

  componentDidMount() {
    this.elements[0].focus();
  }

  handleChange = (e, i) => {
    if (e.keyCode === 8 || e.keyCode === 46) {
      if (e.target.value === "" && i !== 0) {
        this.elements[i - 1].focus();
      }
    }
    if (
      e.target.value.length === e.target.maxLength &&
      i < this.props.length - 1
    ) {
      this.elements[i + 1].focus();
    }
    this.values[i] = e.target.value;
    console.log(this.values);
  };

  handlePaste = (e) => {
    let x = e.clipboardData.getData("Text").split("");
    let temp = [];
    let str = "";
    x.forEach((elem, i) => {
      str += elem;
      if ((i + 1) % e.target.maxLength === 0) {
        temp.push(str);
        str = "";
      }
    });
    for (let i = 0; i < temp.length; i++) {
      if (i === this.props.length) {
        break;
      }
      this.elements[i].focus();
      this.elements[i].value = temp[i];
    }
  };

  handleNextFocus = (e, i) => {
    if (e.keyCode === 8 && i > 0) {
      if (this.elements[i].value.length <= 1) {
        e.preventDefault();
        this.elements[i - 1].focus();
        this.elements[i].value = "";
      }
    }
  };

  handleSubmit = () => {
    this.setState({ submited: true });
  };

  handleCancle = () => {
    this.setState({
      submited: false,
    });
  };

  render() {
    console.log("data", this.state.cardData);
    const { label } = this.props;
    return (
      <>
        <div
          style={{
            padding: "20px",
            background: "#e8ecef",
            width: "600px",
            margin: "auto",
            marginTop: "40px",
          }}
        >
          <div>{label}</div>
          {this.values.map((item, i) => (
            <input
              onPaste={this.handlePaste}
              maxLength={this.props.maxLength}
              style={{
                width: 80,
                height: 25,
                padding: 20,
                margin: 10,
                fontSize: "30px",
                textAlign: "center",
                borderRadius: "5px",
                border: "1px solid green",
              }}
              onChange={(e) => this.handleChange(e, i)}
              onKeyDown={(e) => this.handleNextFocus(e, i)}
              // onBlur={(e) => this.handleFocusOut(e, i)}
              key={i}
              ref={(n) => (this.elements[i] = n)}
            />
          ))}
        </div>

        <button
          style={{
            padding: "10px 20px 10px 20px",
            marginTop: "10px",
            backgroundColor: "#27ae60",
            color: "white",
            border: "none",
            borderRadius: "5%",
          }}
          onClick={this.handleSubmit}
        >
          SUBMIT
        </button>
        {this.state.submited === true ? (
          <div>
            <div>
              <Card cardNumber={this.values.join("")} />
            </div>
            <div>
              <button
                style={{
                  padding: "10px 20px 10px 20px",
                  marginTop: "10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5%",
                }}
                onClick={this.handleCancle}
              >
                DELETE
              </button>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

InputBoxes.propTypes = {
  length: PropTypes.number.isRequired,
  label: PropTypes.string,
};

InputBoxes.defaultProps = {
  label: "",
};
