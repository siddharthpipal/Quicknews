import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Categorychoose extends Component {
  render() {
    return (
      <div className="my-3 ">
        <h1 className="position-absolute top-10 start-50 translate-middle pt-5 ">
          QuickNews - Get News Quick
        </h1>
        

        <div className="pt-5">
          <ul className="nav nav-pills nav-justified pt-5 ">
            <li className="nav-item">
              <button type="button" class="btn btn-primary">
                <Link className="nav-link text-dark fs-5" to="/">
                  General
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" class="btn btn-primary">
                <Link className="nav-link text-dark fs-5" to="/business">
                  business
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" class="btn btn-primary">
                <Link className="nav-link text-dark fs-5" to="/Entertainment">
                  Entertainment
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" class="btn btn-primary">
                <Link className="nav-link text-dark fs-5" to="/Health">
                  Health
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" class="btn btn-primary">
                <Link className="nav-link text-dark fs-5" to="/Science">
                  Science
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" class="btn btn-primary">
                <Link className="nav-link text-dark fs-5" to="/Sports">
                Sports
                </Link>
              </button>
            </li>
            <li className="nav-item">
              <button type="button" class="btn btn-primary"><Link className="nav-link text-dark fs-5" to="/technology">
              technology
                </Link>
                
              </button>
              
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Categorychoose;
