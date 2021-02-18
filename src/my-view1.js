/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, css, html } from "lit-element";
import "./shared-styles.js";

class MyView1 extends LitElement {
  static get styles() {
    return css``;
  }
  static get properties() {
    return {
      name: { type: String },
      email: { type: String },
      password: { type: String },
      phoneNumber: { type: String },
      details: { type: Array },
    };
  }
  constructor() {
    super();
    this.userName = "";
    this.email = "";
    this.password = "";
    this.phoneNumber = "";
    this.details = [];
  }
  updateDetails(e) {
    const { name, value } = e.target;
    console.log([name]);
    this.details = [
      ...this.details,
      {
        [name]: value,
      },
    ];

    console.log(this.details);
  }
  saveDetails(e) {
    e.preventDefault();
    console.log(this.details);
    alert(JSON.stringify(this.details));
    this.details.map((details) => {
      console.log(JSON.stringify(details));
      alert(JSON.stringify(details));
    });
  }
  render() {
    return html`
      <style>
        :host {
          display: block;

          padding: 10px;
        }

        my-view1 .card {
          margin: 24px;
          padding: 16px;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        my-view1 .circle {
          display: inline-block;
          width: 64px;
          height: 64px;
          text-align: center;
          color: #555;
          border-radius: 50%;
          background: #ddd;
          font-size: 30px;
          line-height: 64px;
        }
        my-view1 .title {
          text-align: center;
        }
        my-view1 .container {
          display: grid;
          text-align: end;
          grid-template-columns: auto auto;
          justify-content: space-evenly;
          grid-gap: 20px;
        }
        my-view1 .row {
          display: flex;
          justify-content: space-between;
        }
        my-view1 .control {
          width: 90%;
        }

        h1 {
          margin: 16px 0;
          color: #212121;
          font-size: 22px;
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <div class="block">
          <h2 class="title is-6">Register</h2>
          <div class="container" id="myForm">
            <div class="row">
              <label class="label">Username</label>
              <div class="control ">
                <input
                  class="input"
                  type="text"
                  name="userName"
                  placeholder="Username"
                  .value="${this.userName}"
                  @change="${this.updateDetails}"
                />
              </div>
            </div>

            <div class="row">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input "
                  type="email"
                  name="email"
                  placeholder="Email input"
                  .value="${this.email}"
                  @change="${this.updateDetails}"
                />
              </div>
            </div>
            <div class="row">
              <label class="label">Phone</label>
              <div class="control">
                <input
                  class="input"
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone number"
                  value="${this.phoneNumber}"
                  @change="${this.updateDetails}"
                />
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button @click="${this.saveDetails}" class="button is-link">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  createRenderRoot() {
    return this;
  }
}

customElements.define("my-view1", MyView1);
