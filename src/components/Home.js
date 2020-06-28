import React, { Component } from "react";
import Icons from "./icons";

export default class Home extends Component {
  state = {
    magic: "✨",
  };
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <div className="row " style={{ height: "100%" }}>
          <div className="col-xl-12" style={{ height: "100%" }}>
            <div className="card" style={{ height: "100%" }}>
              <div className="row" style={{ height: "100%" }}>
                <div className="col-sm-3" style={{ height: "100%" }}></div>
                <div className="col-sm-5 " style={{ marginTop: "5%" }}>
                  <div className="card ">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="card-body">
                          <h5
                            className="card-title d-flex"
                            style={{ color: "#39CCCC", fontWeight: "bold" }}
                          >
                            Hemanth Kumar
                          </h5>
                          <p
                            className="card-text d-flex "
                            style={{ color: "#001f3f" }}
                          >
                            <strong>MERN Stack Developer</strong>
                          </p>
                          <p className="card-text d-flex  justify-content-center">
                            Hey, Hi! I'm Hemanth kumar I am in search of
                            opportunities that could compel my creativity and
                            innovation to work and constantly feed my zeal to
                            pioneer and make a strong presence.
                          </p>
                          <p>
                            I believe coding is magic{this.state.magic}, The
                            magic which enables us to create everything the
                            world has never seen before. Now, I build Webapps
                            and UI for Websites. Actively looking for job
                            opportunities.I love to work in high pressure
                            startup environment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mt-5">
                  <Icons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
