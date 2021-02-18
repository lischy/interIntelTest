/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html } from "lit-element";
import "./shared-styles.js";

class MyView2 extends LitElement {
  static get properties() {
    return {
      style: { type: Boolean },
    };
  }
  constructor() {
    super();
    this.style = true;
  }

  render() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on the button, open the modal
    let onClick = (e) => {
      e.preventDefault();

      this.style = !this.style;
      console.log("clicked", this.style);
    };
    let xcloseOnclick = (e) => {
      e.preventDefault();

      this.style = !this.style;
    };
    return html`
      <style>
        :host {
          display: block;

          padding: 10px;
        }

        my-element .card {
          margin: 24px;
          padding: 16px;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        my-element .circle {
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
        my-element .columns {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        /* The Modal (background) */
        my-element .modal {
          position: absolute;
          text-align: center;
          z-index: 1; /* Sit on top */
          left: 0;
          right: 0;
          top: 0;
          margin-left: auto;
          margin-right: auto;
          width: 80%; /* Full width */
          overflow: auto; /* Enable scroll if needed */
          background-color: rgb(0, 0, 0); /* Fallback color */
          background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
        }

        /* Modal Content/Box */
        my-element .modal-content {
          background-color: #fefefe;
          margin: 15% auto; /* 15% from the top and centered */
          padding: 20px;
          border: 1px solid #888;
          width: 80%; /* Could be more or less, depending on screen size */
        }

        /* The Close Button */
        my-element .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }

        my-element .close:hover,
        my-element .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
      </style>

      <div class="card">
        <div class="circle">2</div>
        <h1>View Two</h1>
        <div class="columns">
          <div class="column">
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
          <div class="column">
            <p class="heading">Following</p>
            <p class="title">123</p>
          </div>
          <div class="column">
            <p class="heading">Followers</p>
            <p class="title">456K</p>
          </div>
          <div class="column">
            <p class="heading">Likes</p>
            <p class="title">789</p>
          </div>
        </div>
        <!-- Trigger/Open The Modal -->
        <button id="myBtn" @click="${onClick}" ?hidden="${!this.style}">
          Open Modal
        </button>

        <!-- The Modal -->
        <div id="myModal" class="modal" ?hidden="${this.style}">
          <!-- Modal content -->
          <div class="modal-content">
            <span class="close" @click="${xcloseOnclick}">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </div>
    `;
  }
  createRenderRoot() {
    return this;
  }
}

window.customElements.define("my-element", MyView2);
