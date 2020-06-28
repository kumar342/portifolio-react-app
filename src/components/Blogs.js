import React, { Component } from "react";
import blogaws from "./awsstorage.png";
import Capture from "./crud.png";
import awsimg from "./nodedeploy.png";

export default class Blogs extends Component {
  render() {
    return (
      <div className="col-sm-12 mt-10 mb-40">
        <div className="row">
          <div className="col-sm-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={Capture} alt="blog" />
              <div class="px-6 py-4">
                <a href="https://medium.com/@hemanth2gundala/performing-curd-operations-using-nodejs-90752aa959dc">
                  See Full Blog
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={blogaws} alt="blog" />
              <div class="px-6 py-4">
                <a href="https://medium.com/@hemanth2gundala/how-to-add-storage-or-volume-to-remote-server-in-aws-112a10c06877">
                  See Full Blog
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={awsimg} alt="blog" />
              <div class="px-6 py-4">
                <a href="https://medium.com/@hemanth2gundala/how-to-deploy-node-application-on-aws-be60b0e508e4">
                  See Full Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
