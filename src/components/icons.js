import React, { Component } from "react";

export default class Icons extends Component {
  render() {
    return (
      <div>
        <a href="/#">
          <a href="/#">
            {" "}
            <span>
              <i
                className="fa fa-instagram mr-1"
                style={{ color: "red", fontSize: "24px" }}
              ></i>
            </span>
          </a>
          <a href="/#">
            {" "}
            <span>
              <i
                className="fa fa-linkedin mr-1"
                style={{ color: "#0074D9", fontSize: "24px" }}
              ></i>
            </span>
          </a>
          <a href="/#">
            {" "}
            <span>
              <i
                className="fa fa-twitter"
                style={{ color: "#0074D9", fontSize: "24px" }}
              ></i>
            </span>
          </a>
          <a href="/#">
            {" "}
            <span>
              <i
                className="fa fa-github"
                style={{ color: "black", fontSize: "24px" }}
              ></i>
            </span>
          </a>
          <a href="/#">
            {" "}
            <span>
              <i
                className="fa fa-gitlab"
                style={{ color: "#fc6d26", fontSize: "24px" }}
              ></i>
            </span>
          </a>
          <a href="/#">
            {" "}
            <span>
              <i
                className="fa fa-stack-overflow"
                style={{ color: "rgb(255, 153, 0", fontSize: "24px" }}
              ></i>
            </span>
          </a>
        </a>
      </div>
    );
  }
}
