import React from "react";

import Style from "./card.module.css";

import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  // align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Circle = styled.div`
  width: 4px;
  height: 4px;
  background: rgba(225, 225, 225, 0.2);
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

const LeftTrangle = styled.div`
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 100px solid rgba(225, 225, 225, 0.2);
  border-bottom: 50px solid transparent;
  z-index: -1;
  position: absolute;
  left: 20%;
  top: 20%;
`;

const RightTrangle = styled.div`
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 100px solid rgba(225, 225, 225, 0.2);
  border-bottom: 50px solid transparent;
  z-index: -1;
  position: absolute;
  left: 52%;
  top: 20%;
`;

const CardArea = styled.div`
  width: 350px;
  height: 200px;
  font-family: "Courier New", Courier, monospace;
  border-radius: 7px;
  position: relative;
  z-index: -2;
  color: white;
  margin: auto;
  margin-top: 100px;
`;

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardno: this.props.cardNumber,
      month: null,
      year: null,
      name: "",
      cvv: null,
      cardType: "",
    };
  }

  getCreditCardType = (accountNumber) => {
    var result = "unknown";
    this.state.cardType = result;
  };

  componentDidMount() {
    this.getCreditCardType(this.props.cardNumber);
  }

  componentDidUpdate() {
    if (this.state.cardno.length === 4) {
      this.getCreditCardType(Number(this.state.cardno));
      console.log(Number(this.state.cardno));
    }
  }

  render() {
    return (
      <CardContainer>
        <div>
          <CardArea
            className={
              this.state.cardType === "mastercard"
                ? Style.mastercard
                : this.state.cardType === "visa"
                ? Style.visa
                : this.state.cardType === "amex"
                ? Style.amex
                : Style.unknown
            }
          >
            <Circle left="25%" top="2px" />
            <Circle left="25%" top="10px" />
            <Circle left="25%" top="20px" />
            <Circle left="25%" top="30px" />
            <Circle left="25%" top="40px" />
            <Circle left="25%" top="50px" />
            <Circle left="25%" top="60px" />

            <Circle left="28%" top="2px" />
            <Circle left="28%" top="10px" />
            <Circle left="28%" top="20px" />
            <Circle left="28%" top="30px" />
            <Circle left="28%" top="40px" />

            <Circle left="31%" top="2px" />
            <Circle left="31%" top="10px" />
            <Circle left="31%" top="20px" />
            <Circle left="31%" top="30px" />
            <Circle left="31%" top="40px" />
            <Circle left="31%" top="50px" />
            <Circle left="31%" top="60px" />
            <Circle left="31%" top="70px" />
            <Circle left="31%" top="80px" />

            <Circle left="75%" top="120px" />
            <Circle left="75%" top="130px" />
            <Circle left="75%" top="140px" />
            <Circle left="75%" top="150px" />
            <Circle left="75%" top="160px" />
            <Circle left="75%" top="170px" />
            <Circle left="75%" top="180px" />
            <Circle left="75%" top="190px" />
            <Circle left="75%" top="198px" />

            <Circle left="78%" top="160px" />
            <Circle left="78%" top="170px" />
            <Circle left="78%" top="180px" />
            <Circle left="78%" top="190px" />
            <Circle left="78%" top="198px" />

            <Circle left="81%" top="140px" />
            <Circle left="81%" top="150px" />
            <Circle left="81%" top="160px" />
            <Circle left="81%" top="170px" />
            <Circle left="81%" top="180px" />
            <Circle left="81%" top="190px" />
            <Circle left="81%" top="198px" />

            <LeftTrangle />
            <RightTrangle />
            <div className={Style.imgContainer}>
              <img
                className={Style.chip}
                src="chip.png"
                alt="chip"
                style={{ width: "50px" }}
              />
            </div>

            <div className={Style.cardNo}>
              <p>{this.state.cardno.toString().slice(0, 4)}</p>
              <p>{this.state.cardno.toString().slice(4, 8)}</p>
              <p>{this.state.cardno.toString().slice(8, 12)}</p>
              <p>{this.state.cardno.toString().slice(12, 16)}</p>
            </div>

            <div className={Style.details}>
              <small>NAME</small>
              <small>VALID</small>
              <small>CVV</small>
            </div>

            <div className={Style.details}>
              <div>
                <p>Gargi Das</p>{" "}
              </div>

              <div className={Style.valid}>
                {"  "}
                <div>03/22</div>
              </div>

              <div>
                <p>899</p>
              </div>
            </div>
          </CardArea>
        </div>
      </CardContainer>
    );
  }
}
