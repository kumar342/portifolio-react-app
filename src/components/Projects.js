import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="col-sm-12 mt-3">
          <div className="row">
            <div className="col-sm-4 ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-60  ml-2">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl  mb-2">
                    Covid-19 Tracking System
                  </div>
                  <p className="text-gray-700 text-base">
                    It is a React Application that use digital contact tracing
                    in response to the Covid-19-Pandemic
                  </p>
                </div>
                <div className="px-6 py-4">
                  <button type="button" className="btn btn-outline-dark mr-2">
                    {" "}
                    <a href="https://github.com/kumar342/Covid-19.git">
                      <i className="fa fa-github" aria-hidden="true"></i> View
                      Source
                    </a>
                  </button>

                  <button type="button" className="btn btn-outline-primary">
                    <a href="https://covid-19-tracking-hk.netlify.app/">
                      <i className="fa fa-globe mr-1" aria-hidden="true"></i>
                      Live-view
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className=" col-sm-4">
              <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Google login</div>
                  <p className="text-gray-700 text-base">
                    A web application where an user can login via Google. After
                    the user login, user can update his details
                  </p>
                </div>
                <div className="px-6 py-4">
                  <button type="button" className="btn btn-outline-dark mr-2">
                    {" "}
                    <a href="https://github.com/kumar342/React-app-Editable-Table.git">
                      <i className="fa fa-github" aria-hidden="true"></i> View
                      Source
                    </a>
                  </button>

                  <button type="button" className="btn btn-outline-primary">
                    <a href="https://editable-table-using-react.netlify.app/">
                      <i className="fa fa-globe mr-1" aria-hidden="true"></i>
                      Live-view
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    A React-app-Random-Dog-image
                  </div>
                  <p className="text-gray-700 text-base">
                    A simple React app which shows the list of all breeds from
                    the dog.ceo API and also a detail page which shows a random
                    image for the picked dog (from the list).
                  </p>
                </div>
                <div className="px-6 py-4">
                  <button type="button" className="btn btn-outline-dark mr-2">
                    {" "}
                    <a href="https://github.com/kumar342/random-dogs-image-list-using-react.git">
                      <i className="fa fa-github" aria-hidden="true"></i> View
                      Source
                    </a>
                  </button>

                  <button type="button" className="btn btn-outline-primary">
                    <a href="https://random-dogs-image.netlify.app">
                      <i className="fa fa-globe mr-1" aria-hidden="true"></i>
                      Live-view
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 mt-2">
          <div className="row">
            <div className="col-sm-4 ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-60  ml-2">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl  mb-2">
                    Github Users list
                  </div>
                  <p className="text-gray-700 text-base">
                    A web page which lists GitHub users based in Bangalore and
                    this web page shows the list users with picture, have
                    pagination & search.
                  </p>
                </div>
                <div className="px-6 py-4">
                  <button type="button" className="btn btn-outline-dark mr-2">
                    {" "}
                    <a href="https://github.com/kumar342/Git-search-users-api-project.git">
                      <i className="fa fa-github" aria-hidden="true"></i> View
                      Source
                    </a>
                  </button>

                  <button type="button" className="btn btn-outline-primary">
                    <a href="https://githubuserslist.netlify.app/">
                      <i className="fa fa-globe mr-1" aria-hidden="true"></i>
                      Live-view
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Login system</div>
                  <p className="text-gray-700 text-base">
                    An Application build a full stack login/Authentication using
                    MERN Stack
                  </p>
                </div>
                <div className="px-6 py-4">
                  <button type="button" className="btn btn-outline-dark mr-2">
                    {" "}
                    <a href="https://github.com/kumar342/login-system.git">
                      <i className="fa fa-github" aria-hidden="true"></i> View
                      Source
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Node Application</div>
                  <p className="text-gray-700 text-base">
                    An Application build with Node js and deployed by using AWS
                  </p>
                </div>
                <div className="px-6 py-4">
                  <button type="button" className="btn btn-outline-dark mr-2">
                    {" "}
                    <a href="https://github.com/kumar342/Node_project_0320.git">
                      <i className="fa fa-github" aria-hidden="true"></i> View
                      Source
                    </a>
                  </button>

                  <button type="button" className="btn btn-outline-primary">
                    <a href="http://18.188.18.78/">
                      <i className="fa fa-globe mr-1" aria-hidden="true"></i>
                      Live-view
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
